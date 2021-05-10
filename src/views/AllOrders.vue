<template>
  <the-sidebar activeElem="orders" />
  <section class="main">
    <all-orders-header
      :upper="slotUpper"
      :lower="slotLower"
      @increase="(slot) => updateSlot(slot, 'up')"
      @decrease="(slot) => updateSlot(slot, 'down')"
      @resetInterval="resetFasce()"
    />

    <section class="orders">
      <div class="type-container ta">
        <div class="icon"></div>
        <ul class="orders-list">
          <order-card
            v-for="takeaway in filteredTakeAways"
            :key="takeaway.id"
            :headerTitle="takeaway.name"
            :hour="{
              hours: takeaway ? takeaway.hour.getHours() : '',
              minutes: takeaway.hour.getMinutes(),
            }"
            :lineItems="takeaway.lineItems"
            :alert="getAlert(takeaway, 'ta')"
            orderType="ta"
            @goInto="goInto(takeaway.id, 'ta')"
            @showPrint="setPrintInfos(takeaway.name)"
            @showConto="setBillInfos(takeaway.total, takeaway.name)"
          />
        </ul>
      </div>
      <div class="type-container del">
        <div class="icon"></div>
        <ul class="orders-list">
          <order-card
            v-for="delivery in filteredDeliveries"
            :key="delivery.id"
            :headerTitle="deliveryHeader(delivery)"
            :hour="{
              hours: delivery.hour.getHours(),
              minutes: delivery.hour.getMinutes(),
            }"
            :lineItems="delivery.lineItems"
            :alert="getAlert(delivery, 'del')"
            orderType="del"
            @goInto="goInto(delivery.id, 'del')"
            @showPrint="setPrintInfos(deliveryHeader(delivery))"
            @showConto="setBillInfos(delivery.total, deliveryHeader(delivery))"
          />
        </ul>
      </div>
      <div class="type-container tables">
        <div class="icon"></div>
        <ul class="orders-list">
          <order-card
            v-for="order in filteredOrders"
            :key="order.tableId"
            :headerTitle="`Tavolo ${order.tableNumber}`"
            :hour="{
              hours: order.lastUpdate.getHours(),
              minutes: order.lastUpdate.getMinutes(),
            }"
            :lineItems="order.lineItems"
            :alert="getAlert(order, 'table')"
            orderType="table"
            @goInto="goInto(order.tableId, 'table')"
            @showPrint="setPrintInfos('Tavolo ' + order.tableNumber)"
            @showConto="
              setBillInfos(order.total, 'Tavolo ' + order.tableNumber)
            "
          />
        </ul>
      </div>
    </section>

    <print-order
      v-if="showStampa"
      :header="stampaHeader"
      @close="showStampa = false"
    />

    <print-order-bill
      v-if="showConto"
      @close="showConto = false"
      :total="orderSelectedTotal"
      :header="contoHeader"
    />
  </section>
</template>

<script>
import AllOrdersHeader from "../components/all/AllOrdersHeader";
import OrderCard from "../components/all/OrdersCard.vue";
import PrintOrder from "../components/orders/actions/PrintOrder";
import PrintOrderBill from "../components/orders/actions/PrintOrderBill";
export default {
  components: {
    AllOrdersHeader,
    OrderCard,
    PrintOrder,
    PrintOrderBill,
  },
  data() {
    return {
      slotLower: null,
      slotUpper: null,
      showStampa: false,
      showConto: false,
      stampaHeader: "",
      contoHeader: "",
      orderSelectedTotal: 0,
      selectedOrder: null,
      orderStatus: null,
      takeaways: [],
      deliveries: [],
      tableOrders: [],
    };
  },
  computed: {
    filteredTakeAways() {
      return this.takeaways.filter(this.isBeetween);
    },
    filteredDeliveries() {
      return this.deliveries.filter(this.isBeetween);
    },
    filteredOrders() {
      const isBeetween = (t) =>
        t.lastUpdate >= this.slotLower && t.lastUpdate <= this.slotUpper;
      return this.tableOrders.filter(isBeetween);
    },
  },
  created() {
    this.takeaways = this.$store.getters["takeaways/getTakeAways"];
    this.deliveries = this.$store.getters["deliveries/getDeliveries"];
    this.tableOrders = this.$store.getters["orders/getOrders"];
    const slots = this.$store.getters["getOrdersSlot"];
    this.slotLower = slots[0];
    this.slotUpper = slots[1];
  },
  methods: {
    goInto(id, type) {
      if (type === "ta") this.$router.push("/takeaway/" + id);
      else if (type === "del") this.$router.push("/delivery/" + id);
      else this.$router.push("/table-order/" + id);
    },
    setPrintInfos(header) {
      this.stampaHeader = header;
      this.showStampa = true;
    },
    setBillInfos(total, header) {
      this.contoHeader = header;
      this.orderSelectedTotal = total;
      this.showConto = true;
    },
    isBeetween(t) {
      return t.hour >= this.slotLower && t.hour <= this.slotUpper;
    },
    updateSlot(slot, upOrDown) {
      let selectedMins;
      let selectedHours;
      let selectedSlot = slot === "lower" ? this.slotLower : this.slotUpper;

      selectedMins = new Date(selectedSlot).getMinutes();
      selectedHours = new Date(selectedSlot).getHours();

      if (upOrDown === "up") {
        if (selectedMins >= 45) {
          const newHour = selectedHours + 1;
          selectedSlot = new Date().setHours(newHour, 0, 0, 0);
        } else
          selectedSlot = new Date().setHours(
            selectedHours,
            selectedMins + 15,
            0,
            0
          );
      } else {
        if (selectedMins === 0) {
          const newHour = selectedHours - 1;
          selectedSlot = new Date().setHours(newHour, 45, 0, 0);
        } else
          selectedSlot = new Date().setHours(
            selectedHours,
            selectedMins - 15,
            0,
            0
          );
      }
      slot === "lower"
        ? (this.slotLower = selectedSlot)
        : (this.slotUpper = selectedSlot);

      this.$store.dispatch("updateSlots", {
        page: "allOrders",
        slots: [this.slotLower, this.slotUpper],
      });
    },
    getAlert(order, type) {
      if (type === "ta" || type === "del") {
        if (order.completed) return "completed";
        const hour = order.hour;
        return this.calcAlert(hour, "-");
      } else {
        if (order.status === "completed") return "completed";
        const createdAt = order.createdAt;
        return this.calcAlert(createdAt, "+");
      }
    },
    calcAlert(time, op) {
      const currentTime = Date.now();
      const hourMillis = new Date(time).getTime();

      const alertMillis = this.$store.getters["getAlertMillis"];
      const tableAlertMillis = this.$store.getters["getTableAlertMillis"];

      let alert;
      if (op === "+") {
        alert = hourMillis + tableAlertMillis <= currentTime;
      } else {
        alert =
          currentTime + alertMillis >= hourMillis || hourMillis <= currentTime;
      }
      if (alert) return "alert";
      return "";
    },
    deliveryHeader(delivery) {
      return `${delivery.street}/${delivery.civic}`;
    },
    resetFasce() {
      const defaultLower = new Date().setHours(18, 30, 0, 0);
      const defaultUpper = new Date().setHours(22, 30, 0, 0);
      this.slotLower = defaultLower;
      this.slotUpper = defaultUpper;
      this.$store.dispatch("updateSlots", {
        page: "allOrders",
        slots: [this.slotLower, this.slotUpper],
      });
    },
  },
};
</script>

<style scoped>
.main {
  margin-left: 90px;
  height: 100%;
  overflow: hidden;
}

.orders {
  display: flex;
  justify-content: space-evenly;
  height: calc(80% - 1px);
}

.type-container {
  background-color: white;
  margin-top: 4%;
  width: 30%;
  overflow-y: scroll;
  border-radius: 24px;
  border: none;
}

.orders-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
  padding-bottom: 1rem;
}

.ta {
  background-color: rgba(106, 141, 115, 0.09);
}
.del {
  background-color: rgba(182, 129, 73, 0.09);
}
.tables {
  background-color: rgba(45, 21, 11, 0.09);
}
</style>

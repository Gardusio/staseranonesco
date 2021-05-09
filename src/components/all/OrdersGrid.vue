<template>
  <div class="grid-container">
    <orders-card
      v-for="order in orders"
      :key="order.id"
      :headerTitle="order.name"
      :hour="getOrderHour(order.hour)"
      :alert="getAlert(order.completed, order.hour)"
      :orderType="type"
      :lineItems="order.lineItems"
      @goInto="goInto(order.id, type)"
      @showPrint="setPrintInfos(order.name)"
      @showConto="setBillInfos(order.total, order.name)"
    ></orders-card>
  </div>

  <small-modal v-if="showStampa" @close="showStampa = false">
    <print-order :header="stampaHeader"></print-order>
  </small-modal>

  <big-modal v-if="showConto" @close="showConto = false">
    <print-order-bill
      :total="orderSelectedTotal"
      :header="contoHeader"
    ></print-order-bill>
  </big-modal>
</template>

<script>
import OrdersCard from "./OrdersCard";
import BigModal from "../UI/layouts/modals/BigModal";
import SmallModal from "../UI/layouts/modals/SmallModal";
import PrintOrderBill from "../orders/actions/PrintOrderBill";
import PrintOrder from "../orders/actions/PrintOrder";
export default {
  components: { OrdersCard, BigModal, SmallModal, PrintOrder, PrintOrderBill },
  props: ["orders", "type"],
  data() {
    return {
      showConto: false,
      showStampa: false,
      contoHeader: "",
      stampaHeader: "",
      orderSelectedTotal: 0,
    };
  },
  methods: {
    goInto(id) {
      if (this.type === "ta") this.$router.push("/takeaway/" + id);
      else this.$router.push("/delivery/" + id);
    },
    getAlert(completed, hour) {
      if (completed) return "completed";

      const currentTime = Date.now();
      const hourMillis = new Date(hour).getTime();
      const alertMillis = this.$store.getters["getAlertMillis"];
      if (
        currentTime + alertMillis >= hourMillis ||
        hourMillis <= currentTime
      )
        return "alert";
      return "";
    },
    getOrderHour(date) {
      return {
        hours: new Date(date).getHours(),
        minutes: new Date(date).getMinutes(),
      };
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
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  margin-top: 3rem;
  height: 82%;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  grid-auto-flow: dense;
  overflow-y: scroll;
}
</style>

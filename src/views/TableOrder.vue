<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>

  <order-header
    @toSala="toSala()"
    @addLineItem="addProduct()"
    view="Sala"
    :title="title"
    :waiting="waitingTitle"
  ></order-header>

  <main class="line-items-section">
    <line-items-grid
      @addOne="(li) => addOne(li)"
      @removeOne="removeOne"
      :lineItems="order.lineItems"
    ></line-items-grid>
  </main>

  <div class="nav-list">
    <div class="nav-item" @click="showStampa = true">
      <font-awesome-icon
        :icon="['fas', 'print']"
        class="icon"
        size="2x"
      ></font-awesome-icon>
      <span class="category">Stampa</span>
    </div>
    <div class="nav-item" @click="showConto = true">
      <font-awesome-icon
        :icon="['fas', 'euro-sign']"
        class="icon"
        size="2x"
      ></font-awesome-icon>
      <span class="category">Conto</span>
    </div>
    <div class="nav-item">
      <font-awesome-icon
        :icon="['fas', 'chair']"
        class="icon"
        size="2x"
      ></font-awesome-icon>
      <span class="category">Tavolo</span>
    </div>
    <div class="nav-item" @click="showChiudi = true">
      <font-awesome-icon
        :icon="['fas', 'check-circle']"
        class="icon"
        size="2x"
      ></font-awesome-icon>
      <span class="category">{{ statusNavText }}</span>
    </div>
    <div class="nav-item" @click="showElimina = true">
      <font-awesome-icon
        :icon="['fas', 'trash']"
        class="icon"
        size="2x"
      ></font-awesome-icon>
      <span class="category">Elimina</span>
    </div>
  </div>

  <small-modal v-if="showStampa" @close="showStampa = false">
    <print-order :header="title"></print-order>
  </small-modal>

  <big-modal v-if="showConto" @close="showConto = false">
    <print-order-bill :total="total" :header="title"></print-order-bill>
  </big-modal>

  <big-modal v-if="showTavolo" @close="showTavolo = false">
    <!-- seats, lastUpdate - waiting for tot li (#fritti,#panini...) -->
  </big-modal>

  <small-modal v-if="showChiudi" @close="showChiudi = false">
    <close-table
      v-if="table.status !== 'completed'"
      :header="title"
      @closeOrder="setStatus('completed')"
    ></close-table>
    <open-order
      v-if="table.status === 'completed'"
      :header="title"
      @openOrder="setStatus()"
    ></open-order>
  </small-modal>

  <small-modal v-if="showElimina" @close="showElimina = false">
    <delete-order
      instructionsEvidence="Vuoi liberare il tavolo?"
      @deleteOrder="deleteOrder()"
    ></delete-order>
  </small-modal>

  <date-widget></date-widget>
</template>

<script>
import OrderHeader from "../components/orders/header/OrderHeader";
import LineItemsGrid from "../components/orders/lineitems/LineItemsGrid";
import DateWidget from "../components/UI/date/DateWidget";
import SmallModal from "../components/UI/layouts/SmallModal";
import BigModal from "../components/UI/layouts/BigModal";
import PrintOrder from "../components/orders/actions/PrintOrder";
import PrintOrderBill from "../components/orders/actions/PrintOrderBill";
import CloseTable from "../components/orders/actions/CloseTable";
import DeleteOrder from "../components/orders/actions/DeleteOrder";
import OpenOrder from "../components/orders/actions/OpenOrder";
export default {
  components: {
    LineItemsGrid,
    DateWidget,
    OrderHeader,
    SmallModal,
    BigModal,
    PrintOrder,
    OpenOrder,
    PrintOrderBill,
    CloseTable,
    DeleteOrder,
  },
  data() {
    return {
      table: null,
      order: null,
      showStampa: false,
      showConto: false,
      showTavolo: false,
      showChiudi: false,
      showElimina: false,
    };
  },
  created() {
    const tId = parseInt(this.$route.params.id);
    const tables = this.$store.getters["tables/getTables"];
    this.table = tables.find((t) => t.id === tId);
    const orders = this.$store.getters["orders/getOrders"];
    this.order = orders.find((o) => o.tableId === tId);
  },

  methods: {
    toSala() {
      this.$router.push("/sala");
    },
    addProduct() {
      this.$router.push("/create/" + this.table.id);
    },
    addOne(li) {
      for (let i = 0; i < this.order.lineItems.length; i = i + 1) {
        const current = this.order.lineItems[i];
        if (current.productId === li.productId) {
          current.qty += 1;
          current.total += current.productPrice;
          this.order.total += current.productPrice;
        }
      }
      //set local-order line items
      const updatedOrder = {
        ...this.order,
        lineItems: this.order.lineItems,
      };
      this.order = updatedOrder;

      //update order
      this.$store.dispatch("orders/updateLineItems", updatedOrder);
    },
    removeOne(li) {
      for (let i = 0; i < this.order.lineItems.length; i = i + 1) {
        const current = this.order.lineItems[i];
        if (current.productId === li.productId) {
          current.qty -= 1;
          current.total -= current.productPrice;
          this.order.total -= current.productPrice;
          if (current.qty === 0) {
            const index = this.order.lineItems.indexOf(current);
            this.order.lineItems.splice(index, 1);
          }
        }
      }

      const updatedOrder = {
        ...this.order,
        lineItems: this.order.lineItems,
      };
      this.order = updatedOrder;

      //update order
      this.$store.dispatch("orders/updateLineItems", updatedOrder);
    },
    setStatus(newStatus) {
      const updated = newStatus ? newStatus : this.calculateStatus(this.table);
      const tablePayload = { id: this.table.id, status: updated };
      const orderPayload = { id: this.order.id, status: updated };
      this.$store.dispatch("tables/setTableStatus", tablePayload);
      this.$store.dispatch("orders/setOrderStatus", orderPayload);

      if (newStatus === "completed")
        this.$store.dispatch("notifications/deleteNotificationCompleted", orderPayload);
      this.showChiudi = false;
    },
    deleteOrder() {
      this.$store.dispatch("orders/deleteOrder", { id: this.table.id });
      this.$store.dispatch("notifications/deleteNotificationCompleted", {
        id: this.order.id,
      });
      this.setStatus("free");
      this.$router.push("/sala");
    },
    calculateStatus(table)  {
      if (this.isToAlert(table.statusChanges, table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          status: "alert",
        });
        return "alert";
      }
      if (this.isToFirstAlert(table.statusChanges, table.orderCreatedAt)) {
        this.$store.dispatch("tables/setTableStatus", {
          id: table.id,
          status: "first-alert",
        });
        return "first-alert";
      }
      return "waiting";
    },

    isToFirstAlert(statusChanges, orderCreatedAt) {
      const currentTime = Date.now();
      const firstAlertMillis = statusChanges.firstAlert * 60 * 1000;
      const creationMillis = new Date(orderCreatedAt).getTime();
      const firstAlertTime = creationMillis + firstAlertMillis;
      return firstAlertTime < currentTime;
    },
    isToAlert(statusChanges, orderCreatedAt) {
      const currentTime = Date.now();
      const secondAlertMillis = statusChanges.secondAlert * 60 * 1000;
      const creationMillis = new Date(orderCreatedAt).getTime();
      const secondAlertTime = creationMillis + secondAlertMillis;
      return secondAlertTime < currentTime;
    },
  },
  computed: {
    total() {
      return this.order.total;
    },
    title() {
      return `Tavolo ${this.table.number}`;
    },
    statusNavText() {
      return this.table.status === "completed" ? "Apri" : "Chiudi";
    },
    waitingTitle() {
      const createdAt = this.order.createdAt;
      const waitingMillis = Date.now() - createdAt;
      const waiting = Math.round(
        ((waitingMillis % 86400000) % 3600000) / 60000
      );
      if (this.table.status === "completed") return "Ordine completato.";
      return `Aspetta da ${waiting} minuti`;
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
}
.line-items-section {
  margin-top: 2rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  height: 65%;
  width: 80%;
}

.nav-list {
  position: absolute;
  width: 80%;
  margin: auto;
  bottom: 1.225rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  left: 0;
  right: 0;
}

.nav-item {
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 120%);
  color: white;
  border-radius: 26px;
  border: 2px solid white;
  filter: drop-shadow(0px 3px 3px rgba(45, 21, 11, 1));
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 6.25rem;
  width: 6.25rem;
  font-weight: 400;
}

.category {
  font-family: "Raleway";
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-top: 0.75rem;
}

.icon {
  margin-top: 1rem;
}

.date {
  position: fixed;
  bottom: 3%;
  right: 3%;
  height: auto;
}
</style>

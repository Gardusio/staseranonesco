<template>
  <the-sidebar activeElem="ta"></the-sidebar>

  <order-header
    @toTakeAways="$router.push('/take-away')"
    @addLineItem="$router.push(`/update-ta/${order.id}`)"
    view="Asporto"
    :title="`${order.name}`"
    :waiting="expectedInTime"
  />

  <main class="line-items-section">
    <line-items-grid
      @addOne="addOne"
      @removeOne="removeOne"
      :lineItems="order.lineItems"
    />
  </main>

  <actions-list
    :isCompleted="order.completed"
    @showStampa="showStampa = true"
    @showConto="showConto = true"
    @showChiudi="showChiudi = true"
    @showElimina="showElimina = true"
  />

  <print-order
    :header="`${order.name}`"
    v-if="showStampa"
    @close="showStampa = false"
  />

  <print-order-bill
    v-if="showConto"
    @close="showConto = false"
    :total="order.total"
    :header="`${order.name}`"
  />

  <!-- seats, lastUpdate - waiting for tot li (#fritti,#panini...) -->

  <close-table
    v-if="showChiudi && !order.completed"
    :header="`${order.name}`"
    @closeOrder="setStatus(true)"
    @close="showChiudi = false"
  />

  <open-order
    v-if="showChiudi && order.completed"
    :header="`${order.name}`"
    @openOrder="setStatus(false)"
    @close="showChiudi = false"
  />

  <delete-order
    @deleteOrder="deleteTakeAway()"
    v-if="showElimina"
    @close="showElimina = false"
    instructionsEvidence="Eliminare questo asporto?"
  />

  <date-widget />
</template>

<script>
import OrderHeader from "../components/orders/header/OrderHeader";
import LineItemsGrid from "../components/orders/lineitems/LineItemsGrid";
import DateWidget from "../components/UI/date/DateWidget";
import PrintOrder from "../components/orders/actions/PrintOrder";
import PrintOrderBill from "../components/orders/actions/PrintOrderBill";
import CloseTable from "../components/orders/actions/CloseTable";
import DeleteOrder from "../components/orders/actions/DeleteOrder";
import OpenOrder from "../components/orders/actions/OpenOrder";
import ActionsList from "../components/orders/nav-actions/OrdersActionsNavList";
export default {
  components: {
    LineItemsGrid,
    DateWidget,
    OrderHeader,
    OpenOrder,
    PrintOrder,
    PrintOrderBill,
    CloseTable,
    DeleteOrder,
    ActionsList,
  },
  data() {
    return {
      order: null,
      showStampa: false,
      showConto: false,
      showTavolo: false,
      showChiudi: false,
      showElimina: false,
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    const orders = this.$store.getters["takeaways/getTakeAways"];
    this.order = orders.find((o) => o.id === id);
  },
  computed: {
    expectedInTime() {
      if (this.order.completed) return "Ordine completato.";
      const hour = this.order.hour;
      const waitingMillis = hour - new Date();
      const waiting = Math.round(
        ((waitingMillis % 86400000) % 3600000) / 60000
      );
      if (waitingMillis < 0) return `Aspetta da ${Math.abs(waiting)} minuti`;
      if (this.order.completed) return "Ordine completato.";
      return `Previsto tra ${waiting} minuti`;
    },
  },
  methods: {
    addOne(li) {
      for (let i = 0; i < this.order.lineItems.length; i = i + 1) {
        const current = this.order.lineItems[i];
        if (current.productId === li.productId) {
          current.qty += 1;
          current.total += current.productPrice;
          this.order.total += current.productPrice;
        }
      }
      //update order
      this.$store.dispatch("takeaways/updateLineItems", this.order);
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
      //update order
      this.$store.dispatch("takeaways/updateLineItems", this.order);
    },
    setStatus(newStatus) {
      const payload = { id: this.order.id, status: newStatus };
      this.$store.dispatch("takeaways/setStatus", payload);
      if (newStatus)
        this.$store.dispatch("notifications/deleteNotification", payload);
      this.showChiudi = false;
    },
    deleteTakeAway() {
      this.$store.dispatch("takeaways/deleteTakeAway", { id: this.order.id });
      this.$store.dispatch("notifications/deleteNotification", {
        id: this.order.id,
      });
      this.$router.push("/take-away");
    },
  },
};
</script>

<style scoped>

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
</style>

<template>
  <the-sidebar activeElem="sala"></the-sidebar>

  <order-header
    @toSala="$router.push('/sala')"
    @addLineItem="$router.push(`/create/${table.id}`)"
    view="Sala"
    :title="title"
    :waiting="waitingTitle"
  />

  <categories-chips
    :quantityState="order.quantityState"
    :chips="categoryChips"
    @selected="(chip) => categoryChipSelected = chip"
    class="order-menu-chips"
  />

  <main class="line-items-section">
    <line-items-grid
      @addOne="addOne"
      @removeOne="removeOne"
      :lineItems="categoryLineItems"
    />
  </main>

  <actions-list
    :isCompleted="order.completed"
    @showStampa="showStampa = true"
    @showConto="showConto = true"
    @showChiudi="showChiudi = true"
    @showElimina="showElimina = true"
  />

  <print-order :header="title" v-if="showStampa" @close="showStampa = false" />

  <print-order-bill
    v-if="showConto"
    @close="showConto = false"
    :total="order.total"
    :header="title"
  />

  <!-- seats, lastUpdate - waiting for tot li (#fritti,#panini...) -->

  <close-table
    v-if="showChiudi && table.status !== 'completed'"
    :header="title"
    @closeOrder="setStatus('completed')"
    @close="showChiudi = false"
  />

  <open-order
    v-if="showChiudi && table.status === 'completed'"
    :header="title"
    @openOrder="setStatus()"
    @close="showChiudi = false"
  />
  <delete-order
    @deleteOrder="deleteOrder()"
    v-if="showElimina"
    @close="showElimina = false"
    instructionsEvidence="Vuoi liberare il tavolo?"
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
import CategoriesChips from "../components/menu/CategoriesChips";
export default {
  components: {
    LineItemsGrid,
    ActionsList,
    DateWidget,
    OrderHeader,
    PrintOrder,
    OpenOrder,
    PrintOrderBill,
    CloseTable,
    DeleteOrder,
    CategoriesChips,
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
      categoryChips: ["Fritti", "Pizze", "Panini", "Tutti"],
      chipSelected: "Tutti",
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
    addOne(li) {
      for (let i = 0; i < this.order.lineItems.length; i = i + 1) {
        const current = this.order.lineItems[i];
        if (current.productId === li.productId) {
          current.qty += 1;
          current.total += current.productPrice;
          this.order.total += current.productPrice;
          this.updateQuantityState(current.productCategory, true);
        }
      }
      //update order
      this.$store.dispatch("orders/updateLineItems", this.order);
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
          this.updateQuantityState(current.productCategory, false);
        }
      }
      //update order
      this.$store.dispatch("orders/updateLineItems", this.order);
    },

    setStatus(newStatus) {
      const updated = newStatus ? newStatus : this.isToAlert(this.table.orderCreatedAt) ? "alert" : "waiting" ;
      const tablePayload = { id: this.table.id, status: updated };
      const orderPayload = { id: this.order.id, status: updated };
      
      this.$store.dispatch("tables/setTableStatus", tablePayload);

      if (updated !== "free") {
        console.log("SHOULD SEE THIS");
        this.$store.dispatch("orders/setOrderStatus", orderPayload);
      }

      if (newStatus === "completed") {
        this.$store.dispatch("notifications/deleteNotification", orderPayload);
      }
      this.showChiudi = false;
    },

    deleteOrder() {
      this.setStatus("free");
      this.$store.dispatch("orders/deleteOrder", { id: this.table.id });
      this.$store.dispatch("notifications/deleteNotification", {
        id: this.order.id,
      });
      this.$router.push("/sala");
    },

    isToAlert(orderCreatedAt) {
      const currentTime = Date.now();
      const alertMillis = this.$store.getters["getTableAlertMillis"];
      const creationMillis = new Date(orderCreatedAt).getTime();
      const alertTime = creationMillis + alertMillis;
      return alertTime < currentTime;
    },

    updateQuantityState(category, isAdding) {
      let quantityState = this.order.quantityState;
      for (let i = 0; i < quantityState.length; i++) {
        const currentCategoryState = quantityState[i];
        if (currentCategoryState.category === category) {
          if (isAdding) currentCategoryState.qty += 1;
          else currentCategoryState.qty -= 1;
        }
      }
      this.order.quantityState = quantityState;
    },
  },
  computed: {
    title() {
      return `Tavolo ${this.table.number}`;
    },

    waitingTitle() {
      if (this.table.status === "completed") return "Ordine completato.";

      const createdAt = this.order.createdAt;
      const waitingMillis = Date.now() - createdAt;
      const waiting = Math.round(
        ((waitingMillis % 86400000) % 3600000) / 60000
      );
      return `Aspetta da ${waiting} minuti`;
    },

    categoryLineItems() {
      if (this.chipSelected === "Tutti") return this.order.lineItems;
      return this.order.lineItems.filter(
        (li) => li.productCategory === this.chipSelected.toLowerCase()
      );
    },

    quantityState() {
      let quantityState = [];
      for (let i = 0; i < this.categoryChips.length; i++) {
        const currentCategory = this.categoryChips[i];
        for (let j = 0; j < this.lineItems.length; j++) {
          const currentLineItem = this.lineItems[j];
          if (currentLineItem.productCategory === currentCategory)
            this.updateQuantityState(quantityState, currentCategory);
        }
      }
      return quantityState;
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
  height: 60%;
  width: 80%;
}

.order-menu-chips {
  margin-top: 3rem;
}
</style>

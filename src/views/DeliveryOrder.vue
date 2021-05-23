<template>
  <the-sidebar activeElem="delivery" />

  <order-header
    @toDeliveries="$router.push('/delivery')"
    @addLineItem="$router.push(`/update-del/${order.id}`)"
    view="Consegne"
    :title="order.name"
    :waiting="timeBefore"
  />

  <categories-chips
    :quantityState="order.quantityState"
    :chips="categoryChips"
    @selected="categoryChipSelected"
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
    @deleteOrder="deleteDelivery()"
    v-if="showElimina"
    @close="showElimina = false"
    instructionsEvidence="Eliminare questa consegna?"
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
    DateWidget,
    ActionsList,
    OrderHeader,
    PrintOrder,
    PrintOrderBill,
    CloseTable,
    DeleteOrder,
    OpenOrder,
    CategoriesChips
  },
  data() {
    return {
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
    const id = parseInt(this.$route.params.id);
    const orders = this.$store.getters["deliveries/getDeliveries"];
    this.order = orders.find((o) => o.id === id);
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
      this.$store.dispatch("deliveries/updateLineItems", this.order);
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
      this.$store.dispatch("deliveries/updateLineItems", this.order);
    },
    setStatus(newStatus) {
      const payload = { id: this.order.id, status: newStatus };
      this.$store.dispatch("deliveries/setStatus", payload);
      if (newStatus)
        this.$store.dispatch("notifications/deleteNotification", payload);
      this.showChiudi = false;
    },
    deleteDelivery() {
      this.$store.dispatch("deliveries/deleteDelivery", { id: this.order.id });
      this.$store.dispatch("notifications/deleteNotification", {
        id: this.order.id,
      });
      this.$router.push("/delivery");
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
    categoryChipSelected(chip) {
      this.chipSelected = chip;
    },
  },
  computed: {
    timeBefore() {
      if (this.order.completed) return "Ordine completato.";
      const hour = this.order.hour;
      const waitingMillis = hour - new Date();
      const waiting = Math.round(
        ((waitingMillis % 86400000) % 3600000) / 60000
      );
      if (waitingMillis < 0) return `Prevista ${Math.abs(waiting)} minuti fa`;
      return `Prevista tra ${waiting} minuti`;
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
        for (let j = 0; j < this.order.lineItems.length; j++) {
          const currentLineItem = this.order.lineItems[j];
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
  height: 65%;
  width: 80%;
}

.order-menu-chips {
  margin-top: 3rem;
}
</style>

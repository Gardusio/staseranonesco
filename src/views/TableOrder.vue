<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>

  <table-order-header @toSala="toSala()"></table-order-header>

  <main class="line-items-section">
    <line-items-grid
      @addOne="addOne"
      @removeOne="removeOne"
      :lineItems="order.lineItems"
    ></line-items-grid>
  </main>

  <div class="nav">
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
        <span class="category-text">21€</span>
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
        <span class="category">Chiudi</span>
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
  </div>

  <small-modal v-if="showStampa" @close="showStampa = false">
    <print-order :header="orderActionsHeader"></print-order>
  </small-modal>

  <big-modal v-if="showConto" @close="showConto = false">
    <print-order-bill
      :total="order.total"
      :header="orderActionsHeader"
    ></print-order-bill>
  </big-modal>

  <big-modal v-if="showTavolo" @close="showTavolo = false">
    <!-- seats, lastUpdate - waiting for tot li (#fritti,#panini...) -->
  </big-modal>

  <small-modal v-if="showChiudi" @close="showChiudi = false">
    <close-table :header="orderActionsHeader"></close-table>
  </small-modal>

  <small-modal v-if="showElimina" @close="showElimina = false">
    <delete-order></delete-order>
  </small-modal>

  <date-widget></date-widget>
</template>

<script>
import TableOrderHeader from "../components/orders/header/TableOrderHeader";
import LineItemsGrid from "../components/orders/lineitems/LineItemsGrid";
import DateWidget from "../components/UI/date/DateWidget";
import SmallModal from "../components/UI/layouts/SmallModal";
import BigModal from "../components/UI/layouts/BigModal";
import PrintOrder from "../components/orders/actions/PrintOrder";
import PrintOrderBill from "../components/orders/actions/PrintOrderBill";
import CloseTable from "../components/orders/actions/CloseTable";
import DeleteOrder from "../components/orders/actions/DeleteOrder";
export default {
  components: {
    LineItemsGrid,
    DateWidget,
    TableOrderHeader,
    SmallModal,
    BigModal,
    PrintOrder,
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

    console.log(this.order);
  },

  methods: {
    toSala() {
      this.$router.push("/sala");
    },
    addOne(li) {
      for (let i = 0; i < this.order.lineItems.length; i = i + 1) {
        const current = this.order.lineItems[i];
        if (current.productId === li.productId) {
          current.qty += 1;
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
  },
  computed: {
    orderActionsHeader() {
      return `Tavolo ${this.table.number}`;
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

.nav {
  position: absolute;
  width: 80%;
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 9%;
  bottom: 0;
  text-align: center;
}

.nav-list {
  position: absolute;
  width: 100%;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.nav-item {
  background-image: linear-gradient(180deg, #2d150b 0%, #623d22 120%);
  color: white;
  border-radius: 28px;
  border: 2px solid white;
  filter: drop-shadow(0px 3px 3px rgba(45, 21, 11, 1));
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
  width: 8rem;
  font-weight: 400;
  justify-content: space-evenly;
  align-items: center;
}

.category {
  font-family: "Raleway";
  font-size: 1.5rem;
  letter-spacing: 2px;
}

.category-text {
  font-family: "Lato", "sans-serif";
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: bolder;
  color: var(--evidenceorange);
}
</style>
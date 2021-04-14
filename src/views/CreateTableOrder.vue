<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>

  <section class="left-section">
    <span class="title">Tavolo {{ table.number }}</span>
    <line-items
      :lineItems="lineItems"
      @addOne="addOne"
      @removeOne="removeOne"
    ></line-items>
    <primary-button
      @click="saveOrder()"
      text="Salva Ordine"
      class="continue"
    ></primary-button>
  </section>

  <section class="main-container">
    <div class="header">
      <h1>{{ category }}</h1>
    </div>
    <products-grid @select-product="addProduct" :category="selectedCategory">
    </products-grid>
    <menu-nav @category-selected="setSelectedCategory"></menu-nav>
  </section>
</template>

<script>
import MenuNav from "../components/menu/MenuNav";
import ProductsGrid from "../components/menu/ProductsGrid";
import LineItems from "../components/orders/lineitems/LineItemsList";

export default {
  components: {
    LineItems,
    MenuNav,
    ProductsGrid,
  },
  data() {
    return {
      table: null,
      order: null,
      lineItems: [],
      selectedCategory: "Fritti",
    };
  },
  computed: {
    category() {
      return this.selectedCategory;
    },
  },
  created() {
    const tables = this.$store.getters["tables/getTables"];
    const id = this.$route.params.id;
    const t = tables.find((t) => t.id === parseInt(id));
    this.table = t;

    const orders = this.$store.getters["orders/getOrders"];
    let order = orders.find((o) => o.tableId === parseInt(id));
    this.order = order;
    this.lineItems = order ? order.lineItems : [];

    if (!order) {
      order = {
        id: null,
        tableId: parseInt(id),
        lastUpdate: new Date(),
        createdAt: new Date(),
        total: 0,
        lineItems: [],
      };
      this.order = order;
      this.$store.dispatch("orders/createOrder", order);
    }
  },
  methods: {
    setSelectedCategory(selected) {
      this.selectedCategory = selected;
    },

    saveOrder() {
      this.$store.dispatch("tables/saveOrder", this.order);
      this.$router.push("/sala");
    },

    addProduct(product) {
      //create line item
      let lineItem = {
        id: null,
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        qty: 1,
        total: product.price,
        //...note related
      };

      //if lineItem is already there
      for (let i = 0; i < this.lineItems.length; i = i + 1) {
        const current = this.lineItems[i];
        if (current.productId === product.id) {
          current.qty += 1;
          lineItem = current;
        }
      }

      if (lineItem.qty < 2) this.lineItems.push(lineItem);

      //sort lineItems to show fritti-pizze-panini-bevande

      //set local-order line items
      const updatedOrder = {
        ...this.order,
        lineItems: this.lineItems,
      };
      this.order = updatedOrder;

      //update order
      this.$store.dispatch("orders/updateLineItems", updatedOrder);
    },

    addOne(li) {
      for (let i = 0; i < this.lineItems.length; i = i + 1) {
        const current = this.lineItems[i];
        if (current.productId === li.productId) {
          current.qty += 1;
          current.total += current.productPrice;
        }
      }
      //set local-order line items
      const updatedOrder = {
        ...this.order,
        lineItems: this.lineItems,
      };
      this.order = updatedOrder;

      //update order
      this.$store.dispatch("orders/updateLineItems", updatedOrder);
    },

    removeOne(li) {
      for (let i = 0; i < this.lineItems.length; i = i + 1) {
        const current = this.lineItems[i];
        if (current.productId === li.productId) {
          current.qty -= 1;
          current.total -= current.productPrice;
          if (current.qty === 0) {
            const index = this.lineItems.indexOf(current);
            this.lineItems.splice(index, 1);
          }
        }
      }

      const updatedOrder = {
        ...this.order,
        lineItems: this.lineItems,
      };
      this.order = updatedOrder;

      //update order
      this.$store.dispatch("orders/updateLineItems", updatedOrder);
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Raleway", "sans-serif";
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 2px;
  align-self: center;
  color: var(--mainbrown)
}

.left-section > .continue {
  align-self: center;
  margin-top: auto;
  justify-self: flex-end;
}
</style>
<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>

  <section class="left-section">
    <span class="title">{{ order.name }}</span>
    <span class="via">{{ order.street }} - {{ order.civic }}</span>
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
    const id = this.$route.params.id;
    const orders = this.$store.getters["deliveries/getDeliveries"];
    let order = orders.find((o) => o.id === parseInt(id));
    this.order = order;
    this.lineItems = order ? order.lineItems : [];
  },
  methods: {
    setSelectedCategory(selected) {
      this.selectedCategory = selected;
    },

    saveOrder() {
      this.$store.dispatch("deliveries/saveDelivery", { order: this.order });
      this.$router.push("/delivery");
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
      this.$store.dispatch("deliveries/updateLineItems", updatedOrder);
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
      this.$store.dispatch("deliveries/updateLineItems", updatedOrder);
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
      this.$store.dispatch("deliveries/updateLineItems", updatedOrder);
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
  color: var(--mainbrown);
}

.via {
  font-family: "Raleway", "sans-serif";
  font-size: 1.5rem;
  font-weight: 400;
  margin-top:0.5rem;
  letter-spacing: 1px;
  align-self: center;
  color: var(--mainbrown);
}

.left-section > .continue {
  align-self: center;
  margin-top: auto;
  justify-self: flex-end;
}
</style>

<template>
  <the-sidebar activeElem="delivery" />

  <section class="left-section" style="padding: 1.5rem">
    <span class="title">{{ order.name }}</span>
    <span class="via">{{ order.street }} - {{ order.civic }}</span>
    <div id="line-items" class="line-items">
      <line-items
        :lineItems="lineItems"
        @addOne="addOne"
        @removeOne="removeOne"
      />
    </div>
    <primary-button @click="saveOrder()" text="Salva Ordine" class="continue" />
  </section>

  <section class="main-container">
    <div class="header">
      <h1>{{ category }}</h1>
      <input
        type="text"
        class="search-bar"
        v-model="search"
        placeholder="Cerca un prodotto.."
      />
    </div>

    <menu-chips
      v-if="selectedCategoryIsWithSub"
      :chips="chipsType"
      @selected="(c) => (chipSelected = c)"
    />
    <products-grid
      :category="selectedCategory"
      :subCategory="selectedCategoryIsWithSub ? chipSelected : false"
      :search="search"
      @select-product="addProduct"
    />

    <menu-nav @category-selected="setSelectedCategory" />
  </section>
</template>

<script>
import MenuNav from "../components/menu/MenuNav";
import MenuChips from "../components/menu/MenuChips";
import ProductsGrid from "../components/menu/ProductsGrid";
import LineItems from "../components/orders/lineitems/LineItemsList";

export default {
  components: {
    LineItems,
    MenuNav,
    MenuChips,
    ProductsGrid,
  },
  data() {
    return {
      order: null,
      lineItems: [],
      selectedCategory: "Fritti",
      chipSelected: "",
      search: "",
    };
  },
  computed: {
    category() {
      return this.selectedCategory;
    },
    chipsType() {
      const pizze = ["Classiche", "Speciali", "Rosse", "Bianche"];
      const panini = ["Speciali", "Hamburger", "Salsiccia", "Pollo"];
      if (this.selectedCategory === "Pizze") return pizze;
      else return panini;
    },
    selectedCategoryIsWithSub() {
      return (
        this.selectedCategory === "Panini" || this.selectedCategory === "Pizze"
      );
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
      this.chipSelected = "";
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
        productCategory: product.category,
        qty: 1,
        total: product.price,
        //...note related
      };

      //if lineItem is already there
      for (let i = 0; i < this.lineItems.length; i = i + 1) {
        const current = this.lineItems[i];
        if (current.productId === product.id) {
          current.qty += 1;
          current.total += current.productPrice;
          lineItem = current;
        }
      }

      if (lineItem.qty < 2) this.lineItems.push(lineItem);
      this.updateQuantityState(lineItem.productCategory, true);
      //sort lineItems to show fritti-pizze-panini-bevande
      //update order
      this.$store.dispatch("deliveries/updateLineItems", this.order);
    },
    addOne(li) {
      for (let i = 0; i < this.lineItems.length; i = i + 1) {
        const current = this.lineItems[i];
        if (current.productId === li.productId) {
          current.qty += 1;
          current.total += current.productPrice;
          this.updateQuantityState(current.productCategory, true);
        }
      }
      //update order
      this.$store.dispatch("deliveries/updateLineItems", this.order);
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
          this.updateQuantityState(current.productCategory, false);
        }
      }
      //update order
      this.$store.dispatch("deliveries/updateLineItems", this.order);
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
  margin-top: 0.5rem;
  letter-spacing: 1px;
  text-align: center;
  color: var(--mainbrown);
}

.left-section > .continue {
  align-self: center;
  justify-self: flex-end;
}

.line-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 2rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15%;
}

h1 {
  position: unset;
  margin-left: 5%;
  margin-top: unset;
  font-size: 3rem;
  font-family: "Raleway", "sans-serif";
  font-weight: 500;
  letter-spacing: 2px;
  color: var(--mainbrown);
}
.search-bar {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.2rem;
  color: var(--mainbrown);
  margin-right: 5%;
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 4px solid var(--mainbrown);
}
</style>

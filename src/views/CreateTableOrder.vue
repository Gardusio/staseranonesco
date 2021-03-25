<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>
  <section class="left-section">
    <span class="title">Tavolo {{ table.number }}</span>
    <line-items></line-items>
  </section>
  <section class="main-container">
    <div class="header">
      <h1>{{ category }}</h1>
    </div>
    <products-grid></products-grid>
    <menu-nav></menu-nav>
  </section>
</template>

<script>
import MenuNav from "../components/menu/MenuNav";
import ProductsGrid from "../components/menu/ProductsGrid";
import LineItems from "../components/orders/LineItemsList";

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
    const t = tables.find((t) => (t.id = id));
    this.table = t;
  },
};
</script>

<style scoped>
.title {
  font-family: "Raleway", "sans-serif";
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 4px;
  align-self: center;
}
</style>
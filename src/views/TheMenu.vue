<template>
  <the-background></the-background>
  <the-sidebar activeElem="menu"></the-sidebar>
  <div class="left-section">
    MODIFICA O AGGIUNGI PRODOTTO
  </div>
  <div class="main-container">
    <menu-header></menu-header>
    <products-grid category="Fritti"></products-grid>
    <menu-nav></menu-nav>
  </div>
</template>

<script>
import MenuHeader from "../components/menu/MenuHeader.vue";
import ProductsGrid from "../components/menu/ProductsGrid.vue";
import MenuNav from "../components/menu/MenuNav.vue";

export default {
  components: {
    MenuHeader,
    ProductsGrid,
    MenuNav,
  },
};
</script>

<style>
</style>
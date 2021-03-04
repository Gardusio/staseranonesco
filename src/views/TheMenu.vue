<template>
  <the-background></the-background>
  <the-sidebar activeElem="menu"></the-sidebar>
  <div class="left-section"></div>
  <div class="main-container">
    <menu-header></menu-header>
    <products-grid></products-grid>
    <menu-nav></menu-nav>
  </div>
</template>

<script>
import TheBackground from "../components/layouts/TheBackground";
import TheSidebar from "../components/nav/TheSidebar.vue";
import MenuHeader from "../components/menu/MenuHeader.vue";
import ProductsGrid from "../components/menu/ProductsGrid.vue";
import MenuNav from "../components/menu/MenuNav.vue";

export default {
  components: {
    TheBackground,
    TheSidebar,
    MenuHeader,
    ProductsGrid,
    MenuNav,
  },
};
</script>

<style>
</style>
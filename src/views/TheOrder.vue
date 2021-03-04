<template>
  <the-background></the-background>
  <the-sidebar activeElem="sala"></the-sidebar>
  <section class="left-section"></section>
  <main class="main-container">ORDINE</main>
</template>

<script>
import TheBackground from "../components/layouts/TheBackground";
import TheSidebar from "../components/nav/TheSidebar.vue";
export default {
  components: {
    TheBackground,
    TheSidebar,
  },
};
</script>

<style scoped>

.main-section {
  margin-top: 2%;
  margin-left: 12%;
  margin-right: 40%;
  width: 52%;
}
</style>
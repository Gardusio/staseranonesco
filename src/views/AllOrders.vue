<template>
  <the-background></the-background>
  <the-sidebar activeElem="orders"></the-sidebar>
  <section class="main">
    <all-orders-header></all-orders-header>
  </section>
</template>

<script>
import AllOrdersHeader from "../components/all/AllOrdersHeader";
export default {
  components: { AllOrdersHeader },
};
</script>

<style scoped>
.main {
  margin-left: 90px;
}
</style>

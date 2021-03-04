<template>
  <div class="grid-container">
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
    <product-item productName="Cipolle"></product-item>
  </div>
</template>


<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
};
</script>

<style scoped>
.grid-container {
  position: absolute;
  height: 50%;
  width: 90%;
  margin-top: 1rem;
  margin-left: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3;
  row-gap: 4rem;
  column-gap: 4rem;
  row-gap: 4rem;
  padding: 1rem;
  overflow-y: scroll;
  grid-auto-flow: dense;
}
</style>
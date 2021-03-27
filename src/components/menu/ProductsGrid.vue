<template>
  <div class="grid-container">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      @product-selected="productSelected"
    />
  </div>
</template>


<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  props: ["category"],
  computed: {
    products() {
      const prods = this.$store.getters["products/getProducts"];
      const categoryProds = prods.filter(
        (p) => p.category === this.category.toLowerCase()
      );
      return categoryProds;
    },
  },
  methods: {
    productSelected(product) {
      this.$emit("select-product", product);
    },
  },
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
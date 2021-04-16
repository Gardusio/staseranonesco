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
  height: 60%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: scroll;
  grid-auto-flow: dense;
  row-gap:2rem;
}
</style>
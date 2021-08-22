<template>
  <div class="grid-container">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      @product-selected="productSelected"
      :category="product.category"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  props: ["category", "subCategory", "search"],
  data() {
    return {
      searchFilter: this.search,
    };
  },
  computed: {
    products() {
      const prods = this.$store.getters["products/getProducts"];
      let returnProds;
      let categoryProds;
      if (!this.subCategory || this.subCategory === "") {
        categoryProds = prods.filter(
          (p) => p.category === this.category.toLowerCase()
        );
      } else {
        categoryProds = prods.filter(
          (p) => p.subCategory === this.subCategory.toLowerCase()
        );
        categoryProds.forEach((element) => {
          console.log(element.subCategory);
        });
      }
      if (this.search !== "") {
        returnProds = prods.filter((p) =>
          p.name.toLowerCase().startsWith(this.search.toLowerCase())
        );
      } else returnProds = categoryProds;

      return returnProds;
    },
  },
  methods: {
    productSelected(product) {
      this.searchFilter = "";
      this.$emit("select-product", product);
    },
  },
  watch: {
    searchFilter(newSearch) {
      this.searchFilter = newSearch;
    },
  },
};
</script>

<style scoped>
.grid-container {
  position: absolute;
  height: 55%;
  width: 90%;
  margin: auto;
  margin-left: 3%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: scroll;
  grid-auto-flow: dense;
  row-gap: 2rem;
}
</style>

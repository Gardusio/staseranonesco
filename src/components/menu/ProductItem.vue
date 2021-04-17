<template>
  <div
    class="item-container"
    @click="productSelected(product)"
    :class="categoryStyle"
  >
    <span class="title" :style="nameScaled">{{ product.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["product", "category"],
  methods: {
    productSelected() {
      this.$emit("product-selected", this.product);
    },
    hasToScale(name) {
      const numWords = (str) => {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(" ").length;
      };
      if (numWords(name) > 4) return true;
      return false;
    },
  },
  computed: {
    nameScaled() {
      if (this.hasToScale(this.product.name)) return "font-size: 16px ";
      return "";
    },
    categoryStyle() {
      if (this.category === "Fritti") return "fritti";
      else if (this.category === "Pizze") return "pizze";
      else if (this.category === "Panini") return "panini";
      return "bere";
    },
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 130px;
  height: 90px;
  
  background-color: whitesmoke;
  padding: 3rem;
  text-overflow: ellipsis;
}
.circle-image {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px #3f2c1c;
  transition: all linear 2ms;
}

.title {
  font-family: "Montserrat";
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: var(--mainbrown);
}

.fritti {
  box-shadow: var(--friedorange) 0px 3px 8px;
}

.panini {
  border-color: var(--friedorange);
  box-shadow: 0 8px 6px -6px var(--friedorange);
}

.pizze {
  border-color: var(--friedorange);
  box-shadow: 0 8px 6px -6px var(--friedorange);
}
</style>

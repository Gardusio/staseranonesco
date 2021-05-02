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
  props: ["product"],
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
      if (this.hasToScale(this.product.name)) return "font-size: 14px ";
      return "";
    },
    categoryStyle() {
      if (this.product.category === "fritti") return "fritti";
      else if (this.product.category === "pizze") return "pizze";
      else if (this.product.category === "panini") return "panini";
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
  width: 120px;
  height: 70px;
  border-radius: 8px;
  background-color: whitesmoke;
  padding: 3rem;
  text-overflow: ellipsis;
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
  box-shadow: var(--secondarybrown) 0px 3px 8px;
}

.pizze {
 box-shadow: var(--pizzered) 0px 3px 8px;
}

.bere {
  box-shadow: var(--bereblue) 0px 3px 8px;
}
</style>

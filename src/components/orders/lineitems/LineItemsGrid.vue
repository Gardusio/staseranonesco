<template>
  <div class="grid-container">
    <line-item
      v-for="lineItem in lineItems"
      :key="lineItem.productId"
      :name="lineItem.productName"
      :qty="lineItem.qty"
      @add="add(lineItem)"
      @remove="remove(lineItem)"
    ></line-item>
  </div>
</template>

<script>
import LineItem from "./LineItem";
export default {
  emits: ["addOne", "removeOne"],
  props: ["lineItems"],
  components: { LineItem },
  methods: {
    add(li) {
      this.$emit("addOne", li);
    },
    remove(li) {
      this.$emit("removeOne", li);
    },
  },
};
</script>

<style scoped>
.grid-container {
  position: absolute;
  height: 100%;
  width: 109%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 7;
  column-gap: 4rem;
  row-gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;
  grid-auto-flow: dense;
}
</style>
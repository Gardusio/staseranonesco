<template>
  <div class="grid-container">
    <line-item
      v-for="lineItem in lineItems"
      :key="lineItem.productId"
      :name="lineItem.productName"
      :qty="lineItem.qty"
      :type="lineItem.productCategory"
      :scale="false"
      @add="add(lineItem)"
      @remove="remove(lineItem)"
    />
  </div>
</template>

<script>
import LineItem from "./LineItem";
export default {
  components: { LineItem },
  emits: ["addOne", "removeOne"],
  props: ["lineItems"],
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
  height: 89%;
  width: 100%;
  margin-left: 45px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 4rem;
  overflow-y: scroll;
  grid-auto-flow: dense;
}
</style>

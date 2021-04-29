<template>
  <line-item
    v-for="lineItem in lineItems"
    :key="lineItem.productId"
    :name="lineItem.productName"
    :qty="lineItem.qty"
    :type="lineItem.productCategory"
    :scale="true"
    @add="add(lineItem)"
    @remove="remove(lineItem)"
  ></line-item>
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
</style>
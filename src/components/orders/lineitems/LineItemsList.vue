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
  />
</template>

<script>
import LineItem from "./LineItem";
export default {
  emits: ["addOne", "removeOne"],
  props: ["lineItems"],
  components: { LineItem },
  updated() {
    console.log("scroll");
    document.getElementById('line-items').scrollTop = document.getElementById('line-items').scrollHeight
  },
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

<style scoped></style>

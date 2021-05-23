<template>
  <line-item
    v-for="lineItem in lineItems"
    :key="lineItem.productId"
    :name="lineItem.productName"
    :qty="lineItem.qty"
    :type="lineItem.productCategory"
    :scale="true"
    @add="$emit('addOne', lineItem)"
    @remove="$emit('removeOne', lineItem)"
  />
</template>

<script>
import LineItem from "./LineItem";
export default {
  emits: ["addOne", "removeOne"],
  props: ["lineItems"],
  components: { LineItem },
  updated() {
    document.getElementById('line-items').scrollTop = document.getElementById('line-items').scrollHeight
  },
};
</script>
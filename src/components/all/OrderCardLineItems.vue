<template>
  <ul class="order-card-line-items">
    <li
      v-for="lineItem in lineItems"
      :key="lineItem.productId"
      class="order-card-line-item"
    >
      <span>{{ lineItem.qty }}x </span>
      <span class="order-card-product">{{ lineItem.productName }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["lineItems"],
};
</script>

<style scoped>
.order-card-line-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 5%;
  height: 72%;
  align-items: center;
  font-family: "Lato", "sans-serif";
  font-weight: 500;
  font-size: 16px;
  color: black;
  overflow-y: scroll;
  row-gap: 8px;
  scrollbar-width: none;
}

.order-card-line-item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 105%;
  margin: auto;
}

::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: var(--mainbrown);
}

.order-card-product {
  flex: 2;
  margin-left: 8px;
}
</style>

<template>
  <ul class="line-items">
    <li
      v-for="lineItem in lineItems"
      :key="lineItem.productId"
      class="line-item"
    >
      <span class="qty">{{ lineItem.qty }}x </span>
      <span class="product">{{ lineItem.productName }}</span>
    </li>
  </ul>
</template>

<script>
export default {
    props: ["lineItems"]
};
</script>

<style scoped>
.line-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 75%;
  height: 45%;
  list-style: none;
  overflow-y: scroll;
}

.line-item {
  display: flex;
  justify-content: space-around;
  color: var(--mainbrown);
}

.qty {
  font-weight: bold;
  font-family: "Lato", sans-serif;
  display: inline-block;
  color: black;
}

.product {
  display: inline-block;
  font-weight: 200;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  margin-left: 0.5rem;
  text-align: justify;
  text-justify: inter-word;
}
</style>

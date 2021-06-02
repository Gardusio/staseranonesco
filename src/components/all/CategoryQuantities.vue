<template>
  <div class="category-quantities-container">
    <div class="category-line">
      <div class="category-quantity"></div>
      <div class="category-name"></div>
    </div>
    <div class="category-line">
      <div class="category-quantity"></div>
      <div class="category-name"></div>
    </div>
    <div class="category-line">
      <div class="category-quantity"></div>
      <div class="category-name"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lower", "upper"],
  data() {
    return {
      lineItems: [],
    };
  },
  created() {
    const takeaways = this.$store.getters["takeaways/getTakeAways"];
    const deliveries = this.$store.getters["deliveries/getDeliveries"];

    let lineItems = [];
     console.log(new Date(this.lower));

    for (let i = 0; i < takeaways.length; i = i + 1) {
      console.log(takeaways[i].hour);
      lineItems = [...lineItems, ...takeaways[i].lineItems];
    }
    for (let j = 0; j < deliveries.length; j = j + 1) {
      console.log(deliveries[j].hour)
      lineItems = [...lineItems, ...deliveries[j].lineItems];
    }
  },
};
</script>

<style scoped></style>

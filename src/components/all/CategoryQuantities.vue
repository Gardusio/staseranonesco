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
    const orders = this.$store.getters["orders/getOrders"];
    const takeaways = this.$store.getters["takeaways/getTakeAways"];
    const deliveries = this.$store.getters["deliveries/getDeliveries"];

    console.log(
      "created: ",
      orders.length,
      takeaways.length,
      deliveries.length
    );

    let lineItems = [];
    for (let k = 0; k < orders.length; k = k + 1) {
      lineItems = [...orders[k].lineItems];
    }
    console.log(lineItems.length);
    for (let i = 0; i < takeaways.length; i = i + 1) {
      lineItems = [...takeaways[i].lineItems];
    }
    console.log(lineItems.length);

    // let allOrders = [...orders, ...takeaways, ...deliveries];
    // console.log(allOrders);
    // // let lineItems = [];
    // for (let i = 0; i < allOrders.length; i++) {
    //   for (let j = 0; allOrders[i].lineItems.length; j++) {
    //     console.log(allOrders[i].lineItems[j]);
    //   }
    // }
    // this.lineItems = lineItems;
    // console.log(this.lineItems);
  },
};
</script>

<style scoped>
</style>
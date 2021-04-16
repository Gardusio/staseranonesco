<template>
  <div class="grid-container">
    <orders-card
      v-for="order in takeaways"
      :key="order.phone"
      :headerTitle="order.name"
      :hour="getOrderHour(order.hour)"
      :alert="getAlert(order.hour)"
      orderType="ta"
      :lineItems="order.lineItems"
    ></orders-card>
  </div>
</template>

<script>
import OrdersCard from "../../components/UI/layouts/OrdersCard";
export default {
  props: ["takeaways"],

  components: {
    OrdersCard,
  },
  methods: {
    getAlert(hour) {
      //first-alert
      const currentTime = Date.now();
      const lastUpdateMillis = new Date(hour).getTime();
      const firstAlertMillis = 15 * 60 * 1000;
      const secondAlertMillis = 30 * 60 * 1000;

      const firstAlertTime = lastUpdateMillis + firstAlertMillis;
      const secondAlertTime = lastUpdateMillis + secondAlertMillis;

      if (secondAlertTime < currentTime) return "alert";
      if (firstAlertTime < currentTime) return "first-alert";
      return "";
    },
    getOrderHour(date) {
      return {
        hours: new Date(date).getHours(),
        minutes: new Date(date).getMinutes(),
      };
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  margin-top: 3rem;
  height: 82%;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  grid-auto-flow: dense;
  overflow-y: scroll;
}
</style>

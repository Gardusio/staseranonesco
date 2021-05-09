<template>
  <div class="order-card-container">
    
    <div class="card-content-container" @click="$emit('goInto')">
      <order-card-header
        :title="headerTitle"
        :hour="hour"
        :orderType="orderType"
        :alertType="alert"
      />
      <order-card-line-items :lineItems="lineItems" />
    </div>

    <card-actions
      @showPrintOrder="$emit('showPrint')"
      @showBill="$emit('showConto')"
    />
  </div>
</template>

<script>
import CardActions from "./CardActions";
import OrderCardHeader from "./OrderCardHeader";
import OrderCardLineItems from "./OrderCardLineItems";

export default {
  props: ["hour", "headerTitle", "lineItems", "orderType", "alert"],
  components: {
    CardActions,
    OrderCardHeader,
    OrderCardLineItems,
  },
};
</script>

<style scoped>
.order-card-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 235px;
  border-radius: 0 0 25px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card-content-container {
  height: 75%;
  width: auto;
}
</style>

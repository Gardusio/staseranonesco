<template>
  <div class="container">
    <div class="header" :class="headerBackground">
      <span class="title">{{ headerTitle }}</span>
      <div class="hour-container" :class="alertType">
        <div class="hour" >{{ hourString }}</div>
      </div>
    </div>
    <ul class="line-items">
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">{{ lineItem.productName }}</span>
      </li>
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">{{ lineItem.productName }}</span>
      </li>
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">{{ lineItem.productName }}</span>
      </li>
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">Funghi salsiccia, stracchino</span>
      </li>
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">Rughetta, bresaola, pachino, bufala</span>
      </li>
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">{{ lineItem.productName }}</span>
      </li>
      <li
        v-for="lineItem in lineItems"
        :key="lineItem.productId"
        class="line-item"
      >
        <span class="qty">{{ lineItem.qty }}x </span>
        <span class="product">{{ lineItem.productName }}</span>
      </li>
    </ul>
    <card-actions></card-actions>
  </div>
</template>

<script>
import CardActions from "./CardActions";
export default {
  props: ["hour", "headerTitle", "lineItems", "orderType", "alert"],
  components: {
    CardActions,
  },
  computed: {
    alertType() {
      if (this.alert === "alert") return "alert";
      if (this.alert === "first-alert") return "first-alert";
      return "";
    },
    headerBackground() {
      if (this.orderType === "ta") return "header-background-ta";
      return "header-background-del";
    },
    hourString() {
      return this.hour.hours + "." + this.hour.minutes;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 225px;
  border-radius: 0 0 25px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  color: white;
}

.header-background-ta {
  background-color: var(--takeawaysgreen);
}

.header-background-del {
  background-color: var(--deliveryorange);
}

.title {
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
  font-size: 1.25rem;
  margin-left: 1rem;
  flex: 2;
}

.hour-container {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
}
.hour {
  font-family: "Lato", "sans-serif";
  font-weight: 500;
  font-size: 1.25rem;
}

.line-items {
  list-style: none;
  margin-top: 0.85rem;
  margin-bottom: 0.85rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin:auto;
  height: 50%;
  justify-content: center;
  align-items: center;
  font-family: "Lato", "sans-serif";
  font-weight: 500;
  font-size: 16px;
  color: black;
  overflow-y: scroll;
  row-gap: 8px;
}

.line-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105%;
  margin:auto;
}

.product {
  flex:2;
  margin-left:8px;
}

.alert {
  background-color: var(--second-alert-red);
}

.first-alert {
  background-color: var(--first-alert-red);
}
</style>

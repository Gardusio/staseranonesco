<template>
  <div class="container">
    <div class="header" :class="headerBackground">
      <span class="title">{{ headerTitle }}</span>
      <div class="hour" :class="alertType">{{ hourString }}</div>
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
  width: 290px;
  height: 275px;
  border-radius: 0 0 25px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25%;
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
  font-size: 1.8rem;
  margin-left: 1rem;
}

.hour {
  font-family: "Lato", "sans-serif";
  font-weight: 500;
  font-size: 1.6rem;
  height: 100%;
  padding: 1.25rem;
}

.line-items {
  list-style: none;
  margin-top: 0.85rem;
  margin-bottom: 0.85rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  font-family: "Lato", "sans-serif";
  font-weight: bold;
  font-size: 1.25rem;
  color: black;
  overflow-y: scroll;
  flex-flow: row;
  row-gap: 4px;
  flex-wrap: wrap;
}

.line-item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
}

.alert {
  background-color: var(--second-alert-red);
}

.first-alert {
  background-color: var(--first-alert-red);
}
</style>
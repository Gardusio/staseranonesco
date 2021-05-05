<template>
  <div class="container">
    <div class="card-container" @click="$emit('goInto')">
      <div class="header" :class="headerBackground">
        <span class="title" :style="titleScaled">{{ headerTitle }}</span>
        <div class="hour-container">
          <div class="hour" :class="alertType">{{ hourString }}</div>
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
      </ul>
    </div>
    <card-actions
      @showPrintOrder="$emit('showPrint')"
      @showBill="$emit('showConto')"
    ></card-actions>
  </div>
</template>

<script>
import CardActions from "./CardActions";
export default {
  props: ["hour", "headerTitle", "lineItems", "orderType", "alert"],
  components: {
    CardActions,
  },
  methods: {
    hasToScale(name) {
      const numWords = (str) => {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(" ").length;
      };
      if (numWords(name) > 4) return true;
      return false;
    },
  },
  computed: {
    titleScaled() {
      if (this.hasToScale(this.headerTitle)) return "font-size: 16px ";
      return "";
    },
    alertType() {
      if (this.alert === "completed") return "completed";
      if (this.alert === "second-alert") return "alert";
      if (this.alert === "first-alert") return "first-alert";
      else {
        if (this.orderType === "ta") return "hour-ta";
        else if (this.orderType === "del") return "hour-del";
        return "hour-table";
      }
    },
    headerBackground() {
      if (this.orderType === "ta") return "header-background-ta";
      else if (this.orderType === "del") return "header-background-del";
      return "header-background-table";
    },
    hourColor() {
      if (this.orderType === "ta") return "color: var(--takeawaysgreen)";
      else if (this.orderType === "del") return "color: var(--deliveryorange)";
      return "color: var(--secondarybrown)";
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
  width: 260px;
  height: 235px;
  border-radius: 0 0 25px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card-container {
  height: 75%;
  width: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28%;
  color: white;
}

.header-background-ta {
  background-color: var(--takeawaysgreen);
}

.header-background-del {
  background-color: var(--deliveryorange);
}

.header-background-table {
  background-color: var(--secondarybrown);
}

.hour-ta {
  color: var(--takeawaysgreen);
}

.hour-del {
  color: var(--deliveryorange);
}

.hour-table {
  color: var(--secondarybrown);
}

.title {
  font-family: "Montserrat", "sans-serif";
  font-weight: 500;
  font-size: 1.25rem;
  margin-left: 1rem;
  flex: 2;
}

.hour-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
  background-color: white;
}
.hour {
  font-family: "Lato", "sans-serif";
  font-weight: bold;
  font-size: 1.25rem;
}

.line-items {
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

.line-item {
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

.product {
  flex: 2;
  margin-left: 8px;
}

.alert {
  color: var(--second-alert-red);
}

.first-alert {
  color: var(--notification-first-alert);
}

.completed {
  color: var(--buttongreen);
}
</style>

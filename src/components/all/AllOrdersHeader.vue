<template>
  <div class="orders-header-container">
    <span class="orders-title">Ordini</span>
    <div class="orders-actions-container">
      <fasce-header
        page="Fascia"
        :upper="upper"
        :lower="lower"
        @increase="(slot) => $emit('increase', slot)"
        @decrease="(slot) => $emit('decrease', slot)"
      />
    </div>
    <date-widget class="orders-date" />
  </div>
  <div class="orders-separator"></div>
</template>

<script>
import FasceHeader from "../UI/layouts/fasce/FasceHeader";
import DateWidget from "../UI/date/DateWidget";
export default {
  emits: ["increase", "decrease"],
  props: ["lower", "upper"],
  components: { FasceHeader, DateWidget },
};
</script>

<style scoped>
.orders-header-container {
  display: flex;
  height: 20%;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
}
.orders-separator {
  border: 0;
  height: 1px;
  width: calc(100% - 10rem);
  margin-left: 4rem;
  background: linear-gradient(gray, white);
}
.orders-actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
  margin-top: -2rem;
}
.orders-date {
  position: unset !important;
}
.orders-title {
  font-family: "Raleway", "sans-serif";
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--mainbrown);
}
</style>

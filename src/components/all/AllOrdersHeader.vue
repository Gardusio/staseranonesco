<template>
  <div class="header-container">
    <span class="title">Ordini</span>
    <div class="actions-container">
      <span class="fascia">Fascia</span>
      <fasce-widget page="orders"></fasce-widget>
    </div>
    <date-widget class="date"></date-widget>
    <div id="border"></div>
  </div>
  <div class="separator"></div>
</template>

<script>
import FasceWidget from "../UI/layouts/FasceWidget";
import DateWidget from "../UI/date/DateWidget";
export default {
  components: { FasceWidget, DateWidget },
};
</script>

<style scoped>
.header-container {
  display: flex;
  height:20%;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding:2rem 4rem;
}
.separator {
  border: 0;
  height: 1px;
  width: calc(100% - 10rem);
  margin-left: 4rem;
  background: linear-gradient(gray, white);
}
.actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
}
.date {
  position: unset !important;
}

.fascia {
  font-family: "Raleway", "sans-serif";
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--mainbrown);
}

.title {
  font-family: "Raleway", "sans-serif";
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--mainbrown);
}

.date {
height: auto;
}
</style>

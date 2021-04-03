<template>
  <div class="date">
    <the-hour></the-hour>
    <the-date></the-date>
  </div>
</template>

<script>
import TheDate from "./TheDate";
import TheHour from "./TheHour";
export default {
  components: {
    TheDate,
    TheHour,
  },
  computed: {},
};
</script>

<style scoped>
.date {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 3rem 2rem;
  height: 20vh;
  width: auto;
}
.day {
  color: var(--secondarybrown);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: right;
}

.hour {
  color: var(--secondarybrown);
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
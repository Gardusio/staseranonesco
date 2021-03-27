<template>
  <p class="day">{{ dayOfWeek }}<br />{{ day }}</p>
</template>

<script>
export default {
  computed: {
    dayOfWeek() {
      return new Date().getDay();
    },
    day() {
      const date = new Date();
      return date.getDate() + " " + date.getMonth();
    },
  },
};
</script>

<style scoped>
.day {
  color: var(--secondarybrown);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-align: right;
}
</style>
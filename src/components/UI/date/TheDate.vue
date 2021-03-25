<template>
  <p class="day">Martedi <br />20 febbraio</p>
</template>

<script>
export default {
  computed: {
    date() {
      return "";
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
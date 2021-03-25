<template>
  <p class="hour">21.40</p>
</template>

<script>
export default {
  computed: {
    hour() {
      return "";
    },
  },
};
</script>

<style scoped>
.hour {
  color: var(--secondarybrown);
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
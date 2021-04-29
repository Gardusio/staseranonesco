<template>
  <p class="hour">{{ hour }}</p>
</template>

<script>
export default {
  computed: {
    hour() {
      const date = new Date();
      return date.getHours() + "." + date.getMinutes();
    },
  },
};
</script>

<style scoped>
.hour {
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>
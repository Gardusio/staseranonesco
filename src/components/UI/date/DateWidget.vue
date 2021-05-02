<template>
  <div class="date">
    <the-hour :key="upload"></the-hour>
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
  data() {
    return {
      upload: 0,
    };
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      this.upload += 1;
      setTimeout(this.update, 60000);
    },
  },
  unmounted() {
    clearTimeout();
  },
};
</script>

<style scoped>
.date {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: auto;
  width: auto;
  color: var(--mainbrown);
}
.day {
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  text-align: right;
}

.hour {
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>

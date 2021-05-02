<template>
  <div class="notif-header-container">
    <span class="title-header">Notifiche</span>
    <the-hour :key="upload" style="color: var(--mainbrown)"></the-hour>
  </div>
</template>

<script>
import TheHour from "../UI/date/TheHour";
export default {
  components: {
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

<style>
.notif-header-container {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.25rem 0rem 1.25rem;
}

.title-header {
  font-family: "Raleway", "sans-serif";
  font-size: 2rem;
  color: var(--mainbrown);
}
</style>

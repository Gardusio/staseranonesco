<template>
  <div class="notif-header-container">
    <span class="title-header">Notifiche</span>
    <the-hour style="color:var(--mainbrown)"></the-hour>
  </div>
</template>

<script>
import TheHour from "../UI/date/TheHour";
export default {
  components: {
    TheHour,
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

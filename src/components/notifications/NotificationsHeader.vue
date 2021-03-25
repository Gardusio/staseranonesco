<template>
  <div class="header-container">
    <span class="title">Notifiche</span>
    <the-hour style="color: var(--mainbrown)"></the-hour>
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
.header-container {
    display: flex;
    justify-content: space-between;
}

.title {
    font-family: "Raleway", "sans-serif";

    font-size: 3rem;
}
</style>
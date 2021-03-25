<template>
  <section class="left-section">
    <notifications-header></notifications-header>
    <ul class="notifs">
      <p>SOME NOTIF1</p>
      <p>SOME NOTIF2</p>
      <p>SOME NOTIF3</p>
      <p>SOME NOTIF4</p>
      <p>SOME NOTIF5</p>
      <p>SOME NOTIF6</p>
      <p>SOME NOTIF7</p>
      <p>SOME NOTIF8</p>
      <p>SOME NOTIF9</p>
      <p>SOME NOTIF10</p>
      <p>SOME NOTIF11</p>
      <p>SOME NOTIF12</p>
      <p>SOME NOTIF13</p>
      <p>SOME NOTIF14</p>
    </ul>
  </section>
  <!-- <notifications-list></notifications-list> -->
</template>

<script>
// import NotificationsList from "./NotificationsList"
import NotificationsHeader from "./NotificationsHeader";
export default {
  components: { NotificationsHeader },
};
</script>

<style scoped>
.notifs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  margin-top: 4rem;
  color: black;
}
</style>
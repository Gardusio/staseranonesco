<template>
  <section class="left-section">
    <notifications-header></notifications-header>
    <notifications-list :key="upload"></notifications-list>
  </section>
</template>

<script>
import NotificationsHeader from "./NotificationsHeader";
import NotificationsList from "./NotificationsList";
export default {
  components: { NotificationsHeader, NotificationsList },
  data() {
    return {
      upload: 1,
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
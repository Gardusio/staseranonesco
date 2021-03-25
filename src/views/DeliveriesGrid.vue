<template>
  <the-background></the-background>
  <the-sidebar activeElem="delivery"></the-sidebar>
  <notifications-section></notifications-section>
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection";
export default {
  components: {
    NotificationsSection,
  },
};
</script>

<style>
</style>
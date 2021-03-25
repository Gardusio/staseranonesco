<template>
  <the-background></the-background>
  <the-sidebar activeElem="ta"></the-sidebar>
  <notifications-section></notifications-section>
</template>

<script>
import NotificationsSection from "../components/notifications/NotificationsSection"
export default {
  components: {
    NotificationsSection
  }
};
</script>


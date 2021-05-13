<template>
  <ul class="notifications-list">
    <notification-item
      v-for="notification in notifications"
      :key="notification.order.id"
      :type="notification.orderType"
      :alert="notification.status"
      :text="notification.text"
      :lineItems="notification.order.lineItems"
      :createdAt="notification.createdAt"
      @view="viewOrder(notification.order, notification.orderType)"
      @delete="deleteNotification(notification.order.id)"
    />
  </ul>
</template>

<script>
import NotificationItem from "./NotificationItem";
export default {
  components: { NotificationItem },
  data() {
    return {
      notifications: [],
    };
  },
  created() {
    this.$store.dispatch("notifications/setNotifications");
    this.notifications = this.$store.getters["notifications/getNotifications"];
  },
  methods: {
    viewOrder(order, orderType) {
      if (orderType === "table")
        this.$router.push(`/table-order/${order.tableNumber}`);
      else if (orderType === "del") this.$router.push(`/delivery/${order.id}`);
      else this.$router.push(`/takeaway/${order.id}`);
    },
    deleteNotification(id) {
      this.$store.dispatch("notifications/deleteNotification", {
        id: id,
      });
      this.notifications = this.$store.getters[
        "notifications/getNotifications"
      ];
    },
  },
};
</script>

<style scoped>
.notifications-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin-top: 2rem;
  height: 100%;
  row-gap: 1.75rem;
  padding-top: 1rem;
}
</style>

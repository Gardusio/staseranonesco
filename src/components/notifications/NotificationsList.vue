<template>
  <ul class="notifs">
    <notification-item
      v-for="notification in notifications"
      :key="notification.order.id"
      :open="false"
      :type="notification.orderType"
      :alert="notification.status"
      :text="notification.text"
      :lineItems="notification.order.lineItems"
      :createdAt="notification.createdAt"
      @view="viewOrder(notification.order, notification.orderType)"
      @delete="deleteNotif(notification.order.id)"
    ></notification-item>
    <notification-item
      v-for="notif in firstNotifications"
      :key="notif.order.id"
      :open="false"
      :type="notif.orderType"
      :alert="notif.status"
      :text="notif.text"
      :lineItems="notif.order.lineItems"
      :createdAt="notif.createdAt"
      @view="viewOrder(notif.order, notif.orderType)"
      @delete="deleteNotif(notif.order.id)"
    ></notification-item>
  </ul>
</template>

<script>
import NotificationItem from "./NotificationItem";
export default {
  components: { NotificationItem },
  data() {
    return {
      notifications: [],
      firstNotifications: [],
    };
  },
  created() {
    this.$store.dispatch("notifications/setNotifications");
    this.notifications = this.$store.getters["notifications/getNotifications"];
    this.firstNotifications = this.$store.getters[
      "notifications/getFirstNotifications"
    ];
  },
  methods: {
    viewOrder(order, orderType) {
      if (orderType === "table")
        this.$router.push("/table-order/" + order.tableNumber);
      else if (orderType === "del") this.$router.push("/delivery/" + order.id);
      else this.$router.push("/takeaway/" + order.id);
    },
    deleteNotif(id) {
      this.$store.dispatch("notifications/deleteNotificationCompleted", {
        id: id,
      });
      this.notifications = this.$store.getters[
        "notifications/getNotifications"
      ];
      this.firstNotifications = this.$store.getters[
        "notifications/getFirstNotifications"
      ];
    },
  },
};
</script>

<style scoped>
.notifs {
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

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
      @view="viewOrder(notification.order, notification.orderType)"
    ></notification-item>
    <notification-item
      v-for="notif in firstNotifications"
      :key="notif.order.id"
      :open="false"
      :type="notif.orderType"
      :alert="notif.status"
      :text="notif.text"
      :lineItems="notif.order.lineItems"
      @view="viewOrder(notif.order, notif.orderType)"
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

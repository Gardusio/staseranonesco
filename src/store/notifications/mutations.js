export default {
  addNotification(state, payload) {
    state.notifications.push(payload);
    state.hasToReload = true;
  },
  addFirstNotification(state,payload) {
    state.firstNotifications.push(payload);
    state.hasToReload = true;
  },
  deleteNotification(state, payload) {
    state.firstNotifications = state.firstNotifications.filter(n => n.order.id !== payload.id);
  },
  deleteNotificationCompleted(state, payload) {
    state.notifications = state.firstNotifications.filter(n => n.order.id !== payload.id);
    state.firstNotifications = state.firstNotifications.filter(n => n.order.id !== payload.id);
  }
};

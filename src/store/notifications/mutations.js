export default {
  addNotification(state, payload) {
    state.notifications.push(payload);
  },
  deleteNotification(state, payload) {
    state.notifications = state.notifications.filter(n => n.order.id !== payload.id);
  }
};

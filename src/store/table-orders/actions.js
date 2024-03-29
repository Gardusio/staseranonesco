export default {
  createOrder(context, payload) {
    context.commit("createOrder", payload);
  },
  deleteOrder(context, payload) {
    context.commit("deleteOrder", payload);
  },
  updateLineItems(context, payload) {
    context.commit("updateLineItems", payload);
  },
  setOrderStatus(context, payload) {
    context.commit("setStatus", payload);
  }
};

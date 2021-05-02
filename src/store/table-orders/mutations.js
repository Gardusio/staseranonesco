export default {
  createOrder(state, order) {
    //http
    order.id = order.tableId;
    state.orders.push(order);
  },
  deleteOrder(state, payload) {
    const id = payload.id;
    state.orders = state.orders.filter((o) => o.tableId !== id);
  },
  updateLineItems(state, payload) {
    const orders = state.orders;
    const order = orders.find((o) => o.tableId == payload.tableId);
    order.lineItems = payload.lineItems;

    let total = 0;
    for (let i = 0; i < order.lineItems.length; i++) {
      total += order.lineItems[i].total;
    }
    order.total = total;
  },
  setStatus(state, payload) {
    console.log(payload.id)
    if (payload.id !== null) {
      const order = state.orders.find((o) => o.id === payload.id);
      order.status = payload.status;
    }
  },
};

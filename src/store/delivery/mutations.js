export default {
  saveNewDel(state, payload) {
    state.deliveries.push(payload.del);
  },
  updateLineItems(state, payload) {
    const orders = state.deliveries;
    const order = orders.find((o) => o.id === payload.id);
    order.lineItems = payload.lineItems;

    let total = 0;
    for (let i = 0; i < order.lineItems.length; i++) {
      total += order.lineItems[i].total;
    }
    order.total = total;
  },
};

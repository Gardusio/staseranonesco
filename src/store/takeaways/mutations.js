export default {
  saveNewTa(state, payload) {
    state.takeaways.push(payload.ta);
  },
  updateLineItems(state, payload) {
    const orders = state.takeaways;
    const order = orders.find((o) => o.id == payload.id);
    order.lineItems = payload.lineItems;

    let total = 0;
    for (let i = 0; i < order.lineItems.length; i++) {
      total += order.lineItems[i].total;
    }
    order.total = total;
  },
  setStatus(state, payload) {
    const orders = state.takeaways;
    const order = orders.find((o) => o.id == payload.id);
    order.completed = payload.status;
  },
  deleteOne(state, payload) {
    state.takeaways = state.takeaways.filter((d) => d.id !== payload.id);
  },
};

export default {
  saveNewTa(state, payload) {
    state.takeaways.push(payload.ta);
    console.log(state.takeaways);
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
};

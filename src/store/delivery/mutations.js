export default {
  saveNewDel(state, payload) {
    state.deliveries.push(payload.del);
  },
  updateLineItems(state, payload) {
    const comparator = function (li1, li2) {
      return li1.productCategory === "fritti" && li2.productCategory !== "fritti"
        ? -1
        : li1.productCategory === "bere" && li2.productCategory !== "bere"
        ? 1
        : li2.productCategory === "fritti"  && li1.productCategory !== "fritti"
        ? 1
        : li2.productCategory === "bere" && li1.productCategory !== "bere"
        ? -1
        : li1.productCategory === "pizze" && li2.productCategory !== "pizze"
        ? -1
        : li2.productCategory === "pizze" && li1.productCategory !== "pizze"
        ? 1
        : 0;
    };
    const orders = state.deliveries;
    const order = orders.find((o) => o.id === payload.id);
    order.lineItems = payload.lineItems;
    order.lineItems.sort(comparator);

    let total = 0;
    for (let i = 0; i < order.lineItems.length; i++) {
      total += order.lineItems[i].total;
    }
    order.total = total;
  },
  setStatus(state, payload) {
    const orders = state.deliveries;
    const order = orders.find((o) => o.id === payload.id);
    order.completed = payload.status;
  },
  deleteOne(state, payload) {
    state.deliveries = state.deliveries.filter((d) => d.id !== payload.id);
  },
};

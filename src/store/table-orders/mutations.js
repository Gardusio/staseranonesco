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
    const comparator = function(li1, li2) {
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
    const orders = state.orders;
    const order = orders.find((o) => o.tableId == payload.tableId);
    order.lineItems = payload.lineItems;
    order.lineItems.sort(comparator);

    let total = 0;
    for (let i = 0; i < order.lineItems.length; i++) {
      total += order.lineItems[i].total;
    }
    order.total = total;
  },
  setStatus(state, payload) {
    console.log(payload.id);
    if (payload.id !== null) {
      console.log(state.orders.find(o => o.id == payload.id))
      let order = state.orders.find((o) => o.id == payload.id);
      order.status = payload.status;
    }
  },
};

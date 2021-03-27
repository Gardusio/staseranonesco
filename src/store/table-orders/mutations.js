export default {
    createOrder(state, order) {
        state.orders.push(order);
    },
    updateLineItems(state, payload) {
        const orders = state.orders;
        const order = orders.find(o => o.tableId == payload.tableId);
        order.lineItems = payload.lineItems;
    },
}
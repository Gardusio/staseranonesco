export default {
    createOrder(state, order) {
        state.orders.push(order);
    },
    updateLineItems(state, payload) {
        const orders = state.orders;
        const order = orders.find(o => o.tableId == payload.tableId);
        order.lineItems = payload.lineItems;

        let total = 0;
        for (let i = 0; i < order.lineItems.length; i++) {
            console.log(order.lineItems[i]);
            total += order.lineItems[i].total;
        }
        order.total = total;
        console.log(order.total)
    },
}
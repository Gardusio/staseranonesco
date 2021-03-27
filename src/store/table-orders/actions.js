export default {
    createOrder(context, payload) {
        context.commit("createOrder", payload);
    },
    updateLineItems(context, payload) {
        context.commit("updateLineItems", payload)
    }
}
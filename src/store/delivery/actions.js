export default {
  saveNewDel(context, payload) {
    const del = {
      ...payload.del,
      id: parseInt(Math.random() * 10), //http id
    };
    console.log(del);
    context.commit("saveNewDel", { del: del });
    return del;
  },
  updateLineItems(context, payload) {
    context.commit("updateLineItems", payload);
  },
  saveDelivery(context, payload) {
    //http save order
    console.log(context, payload.order);
  },
};

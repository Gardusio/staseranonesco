export default {
  saveNewTa(context, payload) {
    const ta = {
      ...payload.ta,
      id: 1, //http id
    };
    context.commit("saveNewTa", { ta: ta });
    return ta;
  },
  updateLineItems(context, payload) {
    context.commit("updateLineItems", payload);
  },
  saveTakeAway(context, payload) {
    //http save order
    console.log(context, payload.order);
  },
};

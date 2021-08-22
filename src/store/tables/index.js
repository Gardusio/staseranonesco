import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      shouldUpdate: true,
      tables: [
        {
          id: 1,
          orderId: null,
          hasOrder: true,
          number: 1,
          seats: 5,
          status: "free",
          reservation: {
            name: "Laurenzi",
            date: "03/08/2021 10:00:00",
          },
          orderCreatedAt: "",
          lastUpdateAt: "",
          createdAt: new Date(),
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};

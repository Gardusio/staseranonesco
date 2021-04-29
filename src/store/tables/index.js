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
          status: "waiting",
          reservation: {
            name: "laurenzi",
            date: "03/08/2021 10:00:00",
          },
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          orderCreatedAt: "03/08/2021 10:00:00",
          lastUpdateAt: "03/08/2021 10:00:00",
          createdAt: new Date()
        },
        {
          id: 2,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: new Date().toISOString(),
          lastUpdateAt: new Date().toISOString(),
          number: 2,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};

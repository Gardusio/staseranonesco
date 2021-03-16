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
          hasOrder: true,
          orderCreatedAt: "03/08/2021 10:00:00",
          number: 1,
          seats: 5,
          status: "waiting",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
        },
        {
          id: 2,
          hasOrder: true,
          orderCreatedAt: new Date().toISOString(),
          number: 2,
          seats: 5,
          status: "completed",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};

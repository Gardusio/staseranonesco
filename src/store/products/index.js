import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      shouldUpdate: true,
      products: [
        {
          id: 1,
          category: "fritti",
          image: "",
          price: 2.5,
          name: "Cipotle",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};

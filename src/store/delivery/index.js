import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      deliveries: [
        /*
        {
          id: 4,
          name: "Laurenzi",
          hour: new Date(new Date().setHours(20,25,0,0)),
          street: "Via Ovidio Cencioso e luridissimo",
          completed: false,
          civic: 15,
          phone: "3894831579",
          lastUpdate: "04/07/2021 12:35:00",
          createdAt: "04/07/2021 12:35:00",
          total: 5,
          lineItems: [
            {
              id: 1,
              productId: 1,
              productName: "Cipotle",
              productPrice: 2.5,
              productCategory: "fritti",
              qty: 2,
              total: 5,
              fullProducts: 1,
              compositions: [
                {
                  isFullProduct: false,
                  numVariations: 2,
                  note: "BEN COTTARELLI",
                  ingredients: [
                    {
                      ingredientId: 1,
                      ingredientName: "ketchup",
                      withIt: false,
                      type: "sauce",
                    },
                  ],
                },
              ],
            },
          ],
        },
        */
      ],
    };
  },
  getters,
  mutations,
  actions,
};

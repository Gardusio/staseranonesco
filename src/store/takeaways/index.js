import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      takeaways: [
        {
          id: 3,
          name: "Laurenzi",
          hour: new Date(new Date().setHours(22, 28, 0, 0)),
          phone: "3894831579",
          lastUpdate: "04/07/2021 12:35:00",
          createdAt: "04/07/2021 12:35:00",
          completed: false,
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
      ],
    };
  },
  getters,
  mutations,
  actions,
};

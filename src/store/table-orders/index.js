import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      shouldUpdate: true,
      orders: [
        /*
             {
               id: 1,
               tableId: 2,
               tableNumber: 2,
               lastUpdate: "03/08/2021 10:00:00",
               createdAt: "03/08/2021 10:00:00",
               total: 23.5,
               lineItems: [
                 {
                   id: 1,
                   productId: 1,
                   productName: "Cipotle",
                   productPrice:2.5,
                   productCategory: "fritti"
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

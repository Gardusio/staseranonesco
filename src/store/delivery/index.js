import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            deliveries: [
                {
                    id: 3,
                    name: "Laurenzi",
                    hour: new Date(),
                    street: "Via Ovidio",
                    civic: 15,
                    phone: "3894831579",
                    lastUpdate: "04/07/2021 12:35:00",
                    createdAt: "04/07/2021 12:35:00",
                    total: 23.5,
                    lineItems: [
                        {
                            id: 1,
                            productId: 1,
                            productName: "Cipotle",
                            qty: 2,
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
                        }
                    ],
                },
            ],
        }
    },
    getters,
    mutations,
    actions,
}
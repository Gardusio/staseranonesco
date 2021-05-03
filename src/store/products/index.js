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
          subCategory: "",
          price: 2.5,
          name: "Cipotle, cipotle, cipotle, cipotle, cipotle",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 1045,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Strips di Pollo",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 1046,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Fiori di zucca",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 102,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Suppli",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 31,
          category: "bere",
          subCategory: "",
          price: 2.5,
          name: "Acqua 0.5L",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 3145,
          category: "bere",
          subCategory: "",
          price: 2.5,
          name: "Coca Cola 0.5L",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 3146,
          category: "bere",
          subCategory: "",
          price: 2.5,
          name: "Coca Cola 33cl",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 41,
          category: "bere",
          subCategory: "",
          price: 2.5,
          name: "Heinekein 66cl",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 11,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Patatine fritte",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 1,
              name: "cipotle",
            },
          ],
        },
        {
          id: 2,
          category: "pizze",
          subCategory: "rosse",
          price: 6,
          name: "Margherita",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 2,
              name: "pomodoro",
            },
            {
              ingredientId: 3,
              name: "mozzarella",
            },
          ],
        },
        {
          id: 3,
          category: "pizze",
          subCategory: "bianche",
          price: 7,
          name: "Zucchine",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 4,
              name: "zucchine",
            },
            {
              ingredientId: 3,
              name: "mozzarella",
            },
          ],
        },
        {
          id: 5,
          category: "panini",
          subCategory: "pollo",
          price: 7,
          name: "Pollo speciale",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 4,
              name: "zucchine",
            },
            {
              ingredientId: 3,
              name: "mozzarella",
            },
          ],
        },
        {
          id: 7,
          category: "panini",
          subCategory: "hamburger",
          price: 7,
          name: "Grande Hamburger",
          available: true,
          number: 0,
          ingredients: [
            {
              ingredientId: 4,
              name: "zucchine",
            },
            {
              ingredientId: 3,
              name: "",
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

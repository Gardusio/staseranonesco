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
          name: "Anelli di cipolla",
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
          name: "Strick di Pollo",
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
          name: "Fiore di zucca",
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
          id: 102341,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Patatine Fritte",
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
          id: 4555,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Crocchetta di patate",
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
          id: 102342,
          category: "fritti",
          subCategory: "",
          price: 2.5,
          name: "Olive Ascolane",
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
          id: 2,
          category: "pizze",
          subCategory: "classiche",
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
          id: 201,
          category: "pizze",
          subCategory: "classiche",
          price: 6,
          name: "Focaccia",
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
          id: 202,
          category: "pizze",
          subCategory: "classiche",
          price: 6,
          name: "Marinara",
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
          id: 203,
          category: "pizze",
          subCategory: "classiche",
          price: 6,
          name: "Napoli",
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
          id: 204,
          category: "pizze",
          subCategory: "classiche",
          price: 6,
          name: "Capricciosa",
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
          id: 205,
          category: "pizze",
          subCategory: "bianche",
          price: 6,
          name: "Crostino",
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
          id: 206,
          category: "pizze",
          subCategory: "bianche",
          price: 6,
          name: "Radicchio, gorgonzola, speck",
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
          id: 207,
          category: "pizze",
          subCategory: "bianche",
          price: 6,
          name: "Rughetta, pachino, bufala",
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
          id: 208,
          category: "pizze",
          subCategory: "rosse",
          price: 6,
          name: "Cipolle e peperoni",
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
          id: 209,
          category: "pizze",
          subCategory: "rosse",
          price: 6,
          name: "Rughetta, salame ungherese, carciofini",
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

import { createStore } from "vuex";
import tablesModule from "./tables/index";
import tableOrdersModule from "./table-orders/index";
import productsModule from "./products/index";
import takeawayModule from "./takeaways/index";

export default createStore({
  modules: {
    tables: tablesModule,
    orders: tableOrdersModule,
    products: productsModule,
    takeaways: takeawayModule,
  },
  state() {
    return {
      takeAwaysSlot: [
        new Date().setHours(18, 30, 0, 0),
        new Date().setHours(22, 30, 0, 0),
      ],
      deliveriesSlot: [
        new Date().setHours(18, 30, 0, 0),
        new Date().setHours(22, 30, 0, 0),
      ],
      ordersSlot: [
        new Date().setHours(18, 30, 0, 0),
        new Date().setHours(22, 30, 0, 0),
      ],
    };
  },
  getters: {
    getTakeAwaySlot(state) {
      return state.takeAwaysSlot;
    },
    getDeliverySlots(state) {
      return state.deliveriesSlot;
    },
    getOrdersSlot(state) {
      return state.ordersSlot;
    },
  },
  mutations: {
    setTakeAwaysSlots(state, payload) {
      state.takeAwaysSlot = payload.slots;
    },
    setDeliveriesSlots(state, payload) {
      state.deliveriesSlot = payload.slots;
    },
    setOrdersSlots(state, payload) {
      state.ordersSlot = payload.slots;
    }
  },
  actions: {
    updateSlots(context, payload) {
      const page = payload.page;
      if (page === "takeAway") context.commit("setTakeAwaysSlots", payload);
      else if (page === "delivery") context.commit("setDeliveriesSlots", payload);
      context.commit("setOrdersSlots", payload);
    },
  },
});

/* TABLEs STORE
Store the list of actual-tables
actions can be performed to CRUD on tables and orders
*/

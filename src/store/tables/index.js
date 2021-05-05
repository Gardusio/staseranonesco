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
          status: "free",
          reservation: {
            name: "laurenzi",
            date: "03/08/2021 10:00:00",
          },
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          orderCreatedAt: "",
          lastUpdateAt: "",
          createdAt: new Date()
        },
        {
          id: 2,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 2,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 3,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 3,
          seats: 4,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 4,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 4,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 5,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 5,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 6,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 6,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 7,
          orderId: null,
          hasOrder: true,
          number: 7,
          seats: 5,
          status: "free",
          reservation: {
            name: "laurenzi",
            date: "03/08/2021 10:00:00",
          },
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          orderCreatedAt: "",
          lastUpdateAt: "",
          createdAt: new Date()
        },
        {
          id: 8,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 8,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 9,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 9,
          seats: 4,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 10,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 10,
          seats: 5,
          status: "free",
          statusChanges: {
            firstAlert: 15,
            secondAlert: 30,
          },
          createdAt: new Date()
        },
        {
          id: 11,
          orderId: null,
          hasOrder: true,
          orderCreatedAt: "",
          lastUpdateAt: "",
          number: 11,
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

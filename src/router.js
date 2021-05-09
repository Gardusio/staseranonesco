import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "./views/TheLogin";
import TheSala from "./views/TheSala.vue";
import TheHome from "./views/TheHome.vue";
import DeliveriesGrid from "./views/DeliveriesGrid.vue";
import TakeAways from "./views/TakeAways.vue";
import AllOrders from "./views/AllOrders.vue";
import TheMenu from "./views/TheMenu.vue";
import EmptyTable from "./views/EmptyTable.vue";
import CreateTableOrder from "./views/CreateTableOrder.vue";
import TableOrder from "./views/TableOrder.vue";
import CreateTakeAway from "./views/CreateTakeAway.vue";
import CreateDelivery from "./views/CreateDelivery";
import TakeAwayOrder from "./views/TakeAwayOrder";
import DeliveryOrder from "./views/DeliveryOrder";

const routes = [
  {
    path: "/",
    name: "login",
    component: TheLogin,
  },
  {
    path: "/home",
    name: "home",
    component: TheHome,
  },
  {
    path: "/sala",
    name: "sala",
    component: TheSala,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: DeliveriesGrid,
  },
  {
    path: "/take-away",
    name: "take-away",
    component: TakeAways,
  },
  {
    path: "/orders",
    name: "orders",
    component: AllOrders,
  },
  {
    path: "/menu",
    name: "menu",
    component: TheMenu,
  },
  {
    path: "/table-order/:id",
    name: "table-order",
    component: TableOrder,
  },
  {
    path: "/empty-table/:id",
    name: "empty-table",
    component: EmptyTable,
  },
  {
    path: "/takeaway/:id",
    name: "take-away-order",
    component: TakeAwayOrder,
  },
  {
    path: "/delivery/:id",
    name: "delivery-order",
    component: DeliveryOrder,
  },
  {
    path: "/create/:id",
    name: "create-table-order",
    component: CreateTableOrder,
  },
  {
    path: "/update-ta/:id",
    name: "update-takeaway-order",
    component: CreateTakeAway,
  },
  {
    path: "/update-del/:id",
    name: "update-delivery-order",
    component: CreateDelivery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

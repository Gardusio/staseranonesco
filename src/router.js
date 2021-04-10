import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "./views/TheLogin";
import TheSala from "./views/TheSala.vue";
import TheHome from "./views/TheHome.vue";
import DeliveriesGrid from "./views/DeliveriesGrid.vue";
import TakeAways from "./views/TakeAways.vue";
import AllOrders from "./views/AllOrders.vue";
import TheMenu from "./views/TheMenu.vue";
import TheIngredients from "./views/TheIngredients.vue";
import EmptyTable from "./views/EmptyTable.vue";
import CreateTableOrder from "./views/CreateTableOrder.vue"
import TableOrder from "./views/TableOrder.vue"

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
    path: "/ingredients",
    name: "ingredients",
    component: TheIngredients,
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
    path: "/create/:id",
    name: "create-table-order",
    component: CreateTableOrder
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

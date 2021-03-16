import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "./views/TheLogin";
import TheSala from "./views/TheSala.vue";
import TheHome from "./views/TheHome.vue";
import TheDelivery from "./views/TheDelivery.vue";
import TheTakeAway from "./views/TheTakeAway.vue";
import TheOrders from "./views/TheOrders.vue";
import TheMenu from "./views/TheMenu.vue";
import TheIngredients from "./views/TheIngredients.vue";
import TheOrder from "./views/TheOrder.vue";
import TheNewOrder from "./views/TheNewOrder.vue";

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
    component: TheDelivery,
  },
  {
    path: "/take-away",
    name: "take-away",
    component: TheTakeAway,
  },
  {
    path: "/orders",
    name: "orders",
    component: TheOrders,
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
    path:"/order/:id",
    name:"order",
    component:TheOrder,
  },
  {
    path:"/new-order/:id",
    name:"new-order",
    component: TheNewOrder,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(() => {
//   document.documentElement.style.width = "100vw";
//   document.documentElement.style.height = "100vh";
//   document.body.style.height = "100%";
//   document.body.style.width = "100%";
//   document.body.style.position = "absolute";
// });

export default router;

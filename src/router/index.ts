import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Pedidos from "../views/Pedidos.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: Pedidos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

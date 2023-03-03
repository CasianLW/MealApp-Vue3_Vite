import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NameView from "../views/NameView.vue";
import CategoryView from "../views/CategoryView.vue";
import ZoneView from "../views/ZoneView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/zone",
      name: "zone",
      component: ZoneView,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/name",
      name: "name",
      component: NameView,
    },
    {
      path: "/random",
      name: "random",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RandomView.vue"),
    },
  ],
});

export default router;

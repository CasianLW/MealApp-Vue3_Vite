import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NameView from "../views/NameView.vue";
import CategoryView from "../views/CategoryView.vue";
import ZoneView from "../views/ZoneView.vue";
import MealView from "../views/MealView.vue";

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
      path: "/meals/:id",
      name: "meal",
      component: MealView,
      props: true,
    },
    {
      path: "/random",
      name: "random",
      component: () => import("../views/RandomView.vue"),
    },
    {
      path: "/ingredient",
      name: "ingredient",
      component: () => import("../views/IngredientView.vue"),
    },
  ],
});

export default router;

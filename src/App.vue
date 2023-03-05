<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NavComponent from "./components/shared/NavComponent.vue";
import { ref, watch } from "vue";

const route = useRoute();
const currentRoute = route.path;

// Use a reactive statement to update the currentRoute variable whenever the route changes
const routePath = ref(route.path);
watch(route, () => {
  routePath.value = route.path;
});
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="MealApp" />
      <NavComponent :page="routePath" />
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

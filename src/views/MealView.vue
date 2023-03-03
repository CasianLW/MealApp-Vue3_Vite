<template>
  <div>
    <h1>{{ meal.title }}</h1>
    <p>{{ meal.instructions }}</p>
    <p>{{ mealId }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Use a computed property to extract the meal ID from the route params
const mealId = computed(() => route.params.id);

// Use a computed property to fetch the meal data based on the ID
const meal = computed(() => {
  // Replace this with your actual code to fetch the meal data based on the ID
  const data = {
    title: "Spaghetti Bolognese",
    instructions: "Cook the spaghetti and the sauce separately...",
  };
  return data;
});
</script>

<script>
export default {
  props: {
    // Pass the meal computed property as a prop to the component
    meal: {
      type: Object,
      required: true,
    },
  },
};
</script>

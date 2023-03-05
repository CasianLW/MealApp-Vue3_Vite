<template>
  <meal-card :mealId="meal.idMeal" v-if="meal" />

  <div v-else>
    <p>Loading meal details...</p>
  </div>
</template>
<script>
import MealCard from "../components/shared/MealComponent.vue";
export default {
  name: "Meal",
  data() {
    return {
      meal: null,
      ingredients: [],
    };
  },
  mounted() {
    this.loadMeal();
  },
  components: {
    name: "MealComponent",
    MealCard,
  },
  methods: {
    async loadMeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`
        );
        const data = await response.json();
        this.meal = data.meals[0];
        this.ingredients = this.getIngredients(this.meal);
      } catch (error) {
        console.error(error);
      }
    },
    getIngredients(meal) {
      const ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredients.push(`${ingredient} - ${measure}`);
        }
      }
      return ingredients;
    },
  },
};
</script>

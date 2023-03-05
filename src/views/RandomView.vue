<template>
  <div>
    <h1>Plat Aléatoire</h1>
    <button @click="getRandomMeal">Afficher un plat aléatoire</button>
    <div v-if="meal">{{ meal.idMeal }}</div>
    <meal-card :mealId="meal.idMeal" v-if="meal" />
  </div>
</template>

<script>
import MealCard from "../components/shared/MealComponent.vue";

export default {
  data() {
    return {
      meal: null,
      ingredients: [],
    };
  },
  components: {
    name: "MealComponent",
    MealCard,
  },
  methods: {
    getRandomMeal() {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
          this.meal = data.meals[0];
          this.ingredients = this.getIngredients(this.meal);
        })
        .catch((error) => console.log(error));
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
  // watch: {
  //   "meal.idMeal": function () {
  //     this.$nextTick(() => {
  //       // Update the data in the meal-card component
  //       this.$refs.mealCard.refreshData();
  //     });
  //   },
  // },
};
</script>

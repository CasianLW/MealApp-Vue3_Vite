<template>
  <div class="meal-card" v-if="meal">
    <div>
      <h1>{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    </div>
    <div v-if="meal.strTags.length > 2">
      <span
        class="tag-item"
        v-for="tag in meal.strTags.split(',')"
        :key="tag"
        >{{ tag }}</span
      >
    </div>
    <div class="meal-tags">
      <p><strong>Catégorie:</strong> {{ meal.strCategory }}</p>
      <p><strong>Origine:</strong> {{ meal.strArea }}</p>
    </div>
    <div>
      <h4>Details:</h4>
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div>
      <h4>Ingrédients:</h4>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div v-if="meal.strYoutube.length > 5">
      <a target="_blank" :href="meal.strYoutube">See how to on Youtube</a>
    </div>
    <div v-if="meal.strSource.length > 5">
      <a target="_blank" :href="meal.strSource">->recipe credit</a>
    </div>
  </div>
  <div v-else>
    <p>Loading meal details...</p>
  </div>
</template>
<script>
export default {
  name: "MealDetails",
  data() {
    return {
      meal: null,
      ingredients: [],
    };
  },
  mounted() {
    this.loadMeal();
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

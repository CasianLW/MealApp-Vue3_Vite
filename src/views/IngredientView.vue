<template>
  <div>
    <h1>Recherche de plats par ingrédient</h1>
    <label for="ingredient">Ingrédient:</label>
    <select
      class="zone-select"
      id="ingredient"
      v-model="selectedIngredient"
      @change="searchMeal"
    >
      <option value="">Sélectionnez un ingrédient</option>
      <option v-for="ingredient in ingredients" :value="ingredient">
        {{ ingredient }}
      </option>
    </select>
    <div class="category-meal-list" v-if="meals && meals.length">
      <h2>
        {{ meals.length }} {{ meals.length > 1 ? "résultats" : "résultat" }} :
      </h2>
      <ul>
        <li v-for="meal in meals" :key="meal.idMeal">
          <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }"
            ><img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <h3>
              {{ meal.strMeal }}
            </h3></router-link
          >
        </li>
      </ul>
    </div>
    <div v-else-if="selectedIngredient === ''"></div>
    <div v-else>
      <p>Pas de plats avec cet ingredient {{ "\u{1F625}" }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchMealByIngredient",
  data() {
    return {
      selectedIngredient: "",
      ingredients: [],
      meals: [],
    };
  },
  methods: {
    searchMeal() {
      if (this.selectedIngredient === "") {
        this.meals = [];
        return;
      }

      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.selectedIngredient}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.meals = data.meals;
        })
        .catch((error) => console.log(error));
    },
    fetchIngredients() {
      fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        .then((response) => response.json())
        .then((data) => {
          this.ingredients = data.meals.map((meal) => meal.strIngredient);
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.fetchIngredients();
  },
};
</script>

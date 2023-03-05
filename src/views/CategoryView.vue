<template>
  <div>
    <h1>Recherche de plats par catégorie</h1>
    <!-- <label for="category">Catégories:</label> -->
    <div class="category-list">
      <div
        class="category-btns"
        v-for="category in categories"
        :key="category.strCategory"
      >
        <input
          type="radio"
          :id="category.strCategory"
          :value="category.strCategory"
          v-model="selectedCategory"
          @change="searchMealByCategory"
        />
        <label :for="category.strCategory">{{ category.strCategory }}</label>
      </div>
    </div>

    <div v-if="meals && meals.length === 0">
      Veuillez selectionner une catégorie
    </div>
    <div v-if="!meals">Aucun plat dans cette catégorie {{ "\u{1F625}" }}</div>
    <div class="category-meal-list" v-if="meals && meals.length">
      <h2>
        {{ meals.length }} {{ meals.length > 1 ? "résultats" : "résultat" }} :
      </h2>
      <ul>
        <li v-for="meal in meals" :key="meal.idMeal">
          <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <h3>{{ meal.strMeal }}</h3></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMealByCategory",
  data() {
    return {
      selectedCategory: "",
      categories: [],
      meals: [],
    };
  },
  methods: {
    searchCategories() {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data.categories;
        })
        .catch((error) => console.log(error));
    },
    searchMealByCategory() {
      if (this.selectedCategory) {
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.selectedCategory}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.meals = data.meals;
          })
          .catch((error) => console.log(error));
      } else {
        this.meals = [];
      }
    },
  },
  mounted() {
    this.searchCategories();
  },
};
</script>

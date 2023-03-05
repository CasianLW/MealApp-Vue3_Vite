<template>
  <div>
    <h1>Recherche de plats par catégorie</h1>
    <label for="category">Catégories:</label>
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
    <!-- <select
      id="category"
      v-model="selectedCategory"
      @change="searchMealByCategory"
    >
      <option value="">Sélectionner une catégorie</option>
      <option v-for="category in categories" :key="category.strCategory">
        {{ category.strCategory }}
      </option>
    </select> -->

    <div v-if="!meals">Aucun plat dans cette catégorie</div>
    <div v-if="meals && meals.length">
      <h2>
        {{ meals.length }} {{ meals.length > 1 ? "résultats" : "résultat" }} :
      </h2>
      <ul>
        <li v-for="meal in meals" :key="meal.idMeal">
          <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }">{{
            meal.strMeal
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

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
      // axios
      //   .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      //   .then((response) => {
      //     this.categories = response.data.categories;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data.categories;
        })
        .catch((error) => console.log(error));
    },
    searchMealByCategory() {
      if (this.selectedCategory) {
        // axios
        //   .get(
        //     `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.selectedCategory}`
        //   )
        //   .then((response) => {
        //     this.meals = response.data.meals;
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
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

<template>
  <div>
    <h1>Recherche de plats par nom</h1>
    <div>
      <label for="search">Rechercher un plat:</label>
      <input
        class="zone-select"
        id="search"
        type="text"
        placeholder="burger..."
        v-model="searchTerm"
        @input="searchMeal"
      />
    </div>
    <div class="category-meal-list" v-if="meals && meals.length">
      <h2>
        {{ meals.length }} {{ meals.length > 1 ? "résultats" : "résultat" }} :
      </h2>
      <ul>
        <li v-for="meal in meals" :key="meal.idMeal">
          <router-link :to="{ name: 'meal', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <h3>
              {{ meal.strMeal }}
            </h3></router-link
          >
        </li>
      </ul>
    </div>
    <div v-else-if="searchTerm === ''">
      <p>Veuillez saisir un nom</p>
    </div>
    <div v-else>
      <p>Aucun résultat pour cette recherche {{ "\u{1F625}" }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMeal",
  data() {
    return {
      searchTerm: "",
      meals: [],
    };
  },
  methods: {
    searchMeal() {
      if (this.searchTerm === "") {
        return (this.meals = []);
      }

      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.meals = data.meals;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<template>
  <div>
    <h1>Recherche de plats par zone</h1>
    <label for="zone">Zone:</label>
    <select
      class="zone-select"
      id="zone"
      v-model="selectedZone"
      @change="searchMeal"
    >
      <option value="">Sélectionnez une zone</option>
      <option v-for="zone in zones" :value="zone">{{ zone }}</option>
    </select>
    <div v-if="!meals">
      Aucun plat enregistré dans cette zone {{ "\u{1F625}" }}
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
            </h3>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMealByZone",
  data() {
    return {
      selectedZone: "",
      zones: [],
      meals: [],
    };
  },
  mounted() {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data) => {
        this.zones = data.meals.map(({ strArea }) => strArea);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    searchMeal() {
      if (this.selectedZone === "") {
        this.meals = [];
        return;
      }

      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.selectedZone}`
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

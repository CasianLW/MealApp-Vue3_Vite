<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [],
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <img :src="img" :alt="title" />
  </div>
  <div class="meal-info">
    <p>{{ category }}</p>
    <p>{{ area }}</p>
  </div>
  <div>
    <p>{{ instructions }}</p>
  </div>
  <div>
    <p v-for="(ingredient, index) in ingredients" :key="index">
      {{ ingredient }}
    </p>
  </div>
</template>

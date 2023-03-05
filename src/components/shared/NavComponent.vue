<script setup>
defineProps({
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="nav">
    <!-- <a class="green">{{ page }}</a> <br /> -->
    <router-link to="/">Home</router-link>
    <router-link to="/random">Random</router-link>
    <router-link to="/name">Search by Name</router-link>
    <router-link to="/category">Search by Category</router-link>
    <router-link to="/zone">Search by Zone</router-link>
  </nav>
</template>

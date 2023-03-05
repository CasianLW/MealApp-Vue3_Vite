<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <img
      alt="Vue logo"
      class="logo"
      src="https://static.vecteezy.com/system/resources/previews/007/742/645/original/cooking-book-cartoon-book-icon-with-orange-color-free-vector.jpg"
      width="125"
      height="125"
    />
    <p class="green">{{ msg }}</p>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  align-items: center;
}
p {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings p,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings p,
  .greetings h3 {
    text-align: left;
  }
}
</style>

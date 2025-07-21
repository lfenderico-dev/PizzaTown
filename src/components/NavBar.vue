<template>
  <header class="text-white bg-eerieBlack h-20 flex gap-5 px-3">
    <p class="text-[16px] flex justify-start h-full items-center gap-2 sm:text-2xl"><img class="w-8 sm:w-12" src="/src/assets/icons/pizzaIcon.png" alt="Pizza image">PizzaTown</p>
    <nav class="text-white flex justify-end gap-3 h-full items-center w-full text-[13px] pr-1 sm:text-lg">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <button @click="toAbout">About</button>
      <button @click="toContact">Contact</button>
    </nav>
  </header>
</template>

<script setup lang="ts">
const toAbout = () => {
  document.getElementById('AboutSection')?.scrollIntoView()
}

const toContact = () => {
  document.getElementById('Footer')?.scrollIntoView()
}

</script>

<style scoped>
</style>

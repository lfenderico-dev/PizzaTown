<template>
  <header class=" bg-eerieBlack h-20 flex justify-start gap-10 px-3 py-1">
    <p id="logo" class="flex justify-start h-full items-center gap-1"><img class="w-8" src="/src/assets/icons/pizzaIcon.png" alt="Pizza image">PizzaTown</p>
    <nav class="text-white flex justify-end gap-3 h-full items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <button>About</button>
      <button>Contact</button>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header{
  font-size: 15px;
  color: white;
}
#logo {
  font-size: 18px;
}


</style>

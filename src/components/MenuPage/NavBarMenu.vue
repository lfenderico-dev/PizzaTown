<template>
  <div class="flex flex-col mt-10" id="navbarMenu">
    <nav class="flex flex-row gap-8 justify-center text-xl mt-3 mx-3 text-white font-bold">
      <router-link class="rounded-3xl border-2 border-black p-2 hover:bg-red-900 shadow-md shadow-white"
        active-class="bg-red-900" to="/pizza">Pizza</router-link>
      <router-link class="rounded-3xl border-3 border-black p-2 hover:bg-red-900 shadow-md shadow-white"
        active-class="bg-red-900" to="/other">Other</router-link>
      <router-link active-class="bg-red-900" class="rounded-3xl border-3 border-black p-2 hover:bg-red-900 shadow-md shadow-white"
        to="/drink">Drinks</router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

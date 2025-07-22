<template>
  <div class="flex flex-col lg:grid lg:grid-cols-2" id="drinkPage">
    <div data-aos="flip-down" data-aos-offset="250" data-aos-duration="1200"  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/water.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold text-white">Water</h1>
    </div>

    <div data-aos="flip-down" data-aos-offset="250" data-aos-duration="1200"  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/beer.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold">Beer</h1>
    </div>

    <div data-aos="flip-down" data-aos-offset="250" data-aos-duration="1200"  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/CocaCola.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold">CocaCola</h1>
    </div>

    <div data-aos="flip-down" data-aos-offset="250" data-aos-duration="1200"  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/CocaColaZero.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold ">CocaColaZero</h1>
    </div>

    <div data-aos="flip-down" data-aos-offset="250" data-aos-duration="1200"  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Fanta.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold ">Fanta</h1>
    </div>

    <div data-aos="flip-down" data-aos-offset="250" data-aos-duration="1200"  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Sprite.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold ">Sprite</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#drinkPage div {
  background-image: url(/src/assets/photo/blackBg.png);
  background-size: cover;
}
</style>

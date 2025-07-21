<template>
  <div class="flex flex-col lg:grid lg:grid-cols-2" id="pizzaPage">
    <div  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Margherita.png">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Margherita</h1>
      <p class="text-center text-[12px] sm:text-[16px]">tomato, mozzarella cheese, basil, salt and oil</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Marinara.png">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Marinara</h1>
      <p class="text-center text-[12px] sm:text-[16px]">tomato, garlic, oregano and oil</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Diavola.png">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Diavola</h1>
      <p class="text-center text-[12px] sm:text-[16px]">tomato, mozzarella cheese and pepperoni.</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Pulcinella.png">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Pulcinella</h1>
      <p class="text-center text-[12px] sm:text-[16px]">tomato, mozzarella cheese, sausage and broccoli rabe</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Wrustel&Patatine.png">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Wrustel</h1>
      <p class="text-center text-[12px] sm:text-[16px]">wrustel, french fries</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img loading="lazy" class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/Fritta.png">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Fritta</h1>
      <p class="text-center text-[12px] sm:text-[16px]">provola cheese, tomato sauce, meat, vegetables</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

#pizzaPage div {
  background-image: url(/src/assets/photo/blackBg.png);
  background-size: cover;
}
</style>

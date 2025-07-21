<template>
  <div class="flex flex-col" id="otherPage">
    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/arancino.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold ">Arancino</h1>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/frittatina.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold">Frittatina</h1>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl hover:border-4 hover:border-white p-5 shadow-2xl shadow-red-700">
      <img class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/panzarotto.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold text-white">Panzarotto</h1>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img class="w-[90%] sm:w-[60%] mx-auto" src="/src/assets/photo/menu/patatine.png">
      <h1 class="text-center text-2xl sm:text-3xl font-bold">Patatine</h1>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
p{
  font-size: 12px;
}

#otherPage div {
  background-image: url(/src/assets/photo/blackBg.png);
  background-size: cover;
}
</style>

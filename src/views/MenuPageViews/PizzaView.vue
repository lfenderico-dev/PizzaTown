<template>
  <div class="flex flex-col" id="pizzaPage">
    <div  class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img src="/src/assets/photo/menu/Margherita.png">
      <h1 class="text-center text-2xl font-bold text-white">Margherita</h1>
      <p class="text-center">tomato, mozzarella cheese, basil, salt and oil</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img src="/src/assets/photo/menu/Marinara.png">
      <h1 class="text-center text-2xl font-bold text-white">Marinara</h1>
      <p class="text-center">tomato, garlic, oregano and oil</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img src="/src/assets/photo/menu/Diavola.png">
      <h1 class="text-center text-2xl font-bold text-white">Diavola</h1>
      <p class="text-center">tomato, mozzarella cheese and pepperoni.</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img src="/src/assets/photo/menu/Pulcinella.png">
      <h1 class="text-center text-2xl font-bold text-white">Pulcinella</h1>
      <p class="text-center">tomato, mozzarella cheese, sausage and broccoli rabe</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img src="/src/assets/photo/menu/Wrustel&Patatine.png">
      <h1 class="text-center text-2xl font-bold text-white">Wrustel</h1>
      <p class="text-center">wrustel, french fries</p>
    </div>

    <div class="flex flex-col m-15 gap-3 rounded-2xl text-white hover:border-4 p-5 shadow-2xl shadow-red-700">
      <img src="/src/assets/photo/menu/Fritta.png">
      <h1 class="text-center text-2xl font-bold text-white">Fritta</h1>
      <p class="text-center">provola cheese, tomato sauce, meat, vegetables</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
p{
  font-size: 12px;
}

#pizzaPage div {
  background-image: url(/src/assets/photo/blackBg.png);
  background-size: cover;
}
</style>

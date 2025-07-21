<template>
  <div class="flex flex-col gap-10" id="Footer">
    <div class="flex flex-col gap-5">
      <h1 class="text-red-700 text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-10">Opening hours</h1>
      <div class="flex flex-col gap-3 text-md sm:text-lg lg:text-xl xl:text-2xl">
        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Monday....</h1>
          <p class="text-white">19:00 - 22:00</p>
        </div>

        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Tuesday....</h1>
          <p class="text-white">19:00 - 22:00</p>
        </div>

        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Wednesday....</h1>
          <p class="text-white">19:00 - 22:00</p>
        </div>

        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Thursday....</h1>
          <p class="text-white">19:00 - 22:00</p>
        </div>

        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Friday....</h1>
          <p class="text-white">19:00 - 23:00</p>
        </div>

        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Saturday....</h1>
          <p class="text-white">19:00 - 23:00</p>
        </div>

        <div class="flex flex-row gap-1 justify-center">
          <h1 class="text-amber-500 font-bold">Sunday....</h1>
          <p class="text-white">19:00 - 23:00</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <h1 class="text-red-700 text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-10">Contact informations</h1>
      <address class="flex flex-col gap-3 text-md sm:text-lg lg:text-xl xl:text-2xl">
        <div class="flex flex-row text-md text-white gap-3 w-full justify-center">
          <i class="fa-solid fa-phone-volume text-amber-500"></i>
          <h1 class="text-amber-500 font-bold">Phone number |</h1>
          <p>+39 4593058997</p>
        </div>
        <div class="flex flex-row text-md text-white gap-3 w-full justify-center">
          <i class="fa-solid fa-envelope text-amber-500"></i>
          <h1 class="font-bold text-amber-500">Email |</h1>
          <p>helloexample@gmail.com</p>
        </div>
      </address>
    </div>

    <div class="flex flex-row gap-3 mx-5 justify-center mt-10 mb-15">
      <i class="fa-solid fa-copyright text-white lg:text-2xl"></i>
      <p class="text-white text-sm lg:text-lg">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#Footer{
  background-image: url('/src/assets/photo/blackBg.png');
  height: fit-content;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

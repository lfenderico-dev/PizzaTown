<template>
  <div class="flex flex-col gap-10" id="Footer">
    <div class="flex flex-col gap-5">
      <h1 class="text-red-700 text-center text-3xl font-bold mt-10">Opening hours</h1>
      <div class="flex flex-col gap-3 text-md ">
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
      <h1 class="text-red-700 text-center text-3xl font-bold mt-10">Contact informations</h1>
      <address class="flex flex-col gap-3">
        <div class="flex flex-row text-md text-white mx-5 gap-3">
          <i class="fa-solid fa-phone-volume text-amber-500"></i>
          <h1 class="text-amber-500 font-bold">Phone number |</h1>
          <p>+39 4593058997</p>
        </div>
        <div class="flex flex-row text-md text-white mx-5 gap-3">
          <i class="fa-solid fa-envelope text-amber-500"></i>
          <h1 class="font-bold text-amber-500">Email |</h1>
          <p>helloexample@gmail.com</p>
        </div>
      </address>
    </div>

    <div class="flex flex-row gap-3 mx-5 justify-center mt-10">
      <i class="fa-solid fa-copyright text-white"></i>
      <p class="text-white text-sm">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#Footer{
  background-image: url('/src/assets/photo/blackBg.png');
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<template>
  <div class="flex flex-col pb-15 h-fit lg:flex-row " id="AboutSection">
    <img data-aos="flip-down" data-aos-offset="300" data-aos-duration="1200" loading="lazy"  class="p-10 rounded-full w-[100%] object-cover mx-auto sm:w-[75%] lg:w-[150%] m-auto"
         src="/src/assets/photo/chef.jpg"
         alt="Chef photo">
    <div class="flex flex-col m-auto">
      <h1 data-aos="fade-right" data-aos-offset="250" data-aos-duration="800"  class="text-red-700 font-bold text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">About Us:</h1>
      <p data-aos="fade-left" data-aos-offset="200" data-aos-duration="800"  class="my-2 text-center mx-5 text-md sm:text-lg text-white lg:text-xl xl:text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quo quam ab placeat vero fuga, explicabo optio, incidunt sit repudiandae amet aspernatur excepturi tempora maiores repellat corporis nihil dolor rem.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#AboutSection{
  background-image: url('/src/assets/photo/blackBg.png');
  height: fit-content;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

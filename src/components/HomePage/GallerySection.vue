<template>
  <div id="gallerySection" class="flex flex-col gap-10">
    <h1 class="text-center text-3xl sm:text-4xl text-white mt-8 font-bold">Gallery</h1>
    <div class="mx-5 h-fit flex items-center">
      <div class="flex flex-row overflow-x-auto w-full h-55 rounded-2xl">
        <img src="/src/assets/photo/gallery-photos/image1.jpg" />
        <img src="/src/assets/photo/gallery-photos/image2.jpg" />
        <img src="/src/assets/photo/gallery-photos/image3.jpg" />
        <img src="/src/assets/photo/gallery-photos/image4.jpg" />
        <img src="/src/assets/photo/gallery-photos/image5.jpg" />
        <img src="/src/assets/photo/gallery-photos/image6.jpg" />
        <img src="/src/assets/photo/gallery-photos/image7.jpg" />
        <img src="/src/assets/photo/gallery-photos/image8.jpg" />
        <img src="/src/assets/photo/gallery-photos/image9.jpg" />
        <img src="/src/assets/photo/gallery-photos/image10.jpg" />
        <img src="/src/assets/photo/gallery-photos/image11.jpg" />
        <img src="/src/assets/photo/gallery-photos/image12.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#gallerySection {
  background-image: url('/src/assets/photo/blackBg.png');
  height: 60vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

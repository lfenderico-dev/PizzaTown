<template>
  <div id="gallerySection" class="flex flex-col">
    <h1 class="text-center text-2xl text-white pt-5 font-bold">Gallery</h1>
    <div class="mx-5 h-full flex items-center">
      <div class="flex overflow-x-auto w-full h-60">
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
  height: 50vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

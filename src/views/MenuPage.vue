<template>
  <div class="flex flex-col" id="menuPage">
    <header>
      <NavBarMenu/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBarMenu from '@/components/MenuPage/NavBarMenu.vue';

</script>

<style scoped>
#menuPage {
  background-image: url('/src/assets/photo/blackBg.png');
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

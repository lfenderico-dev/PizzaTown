<template>
  <div class="flex flex-col bg-black" id="menuPage">
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
  min-height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

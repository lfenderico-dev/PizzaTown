<template>
  <div>
    <main>
      <IntroSection />
      <AboutUs />
      <ServicesPage />
      <GallerySection />
      <ReviewsHighlight />
      <YourReview />
    </main>

    <footer>
      <FooterSection />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AboutUs from '@/components/HomePage/AboutUs.vue';
import FooterSection from '@/components/HomePage/FooterSection.vue';
import GallerySection from '@/components/HomePage/GallerySection.vue';
import IntroSection from '@/components/HomePage/IntroSection.vue';
import ReviewsHighlight from '@/components/HomePage/ReviewsHighlight.vue';
import ServicesPage from '@/components/HomePage/ServicesPage.vue';
import YourReview from '@/components/HomePage/YourReview.vue';

</script>

<style scoped>

</style>

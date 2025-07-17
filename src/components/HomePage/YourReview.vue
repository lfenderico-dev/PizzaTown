<template>
  <div class="h-100 bg-red-900 flex flex-col">
    <h1 class="text-center font-bold text-2xl text-amber-500 pt-8">Your review</h1>
    <p class="text-center mx-5 text-white pt-1">Your review is also important, leave it below!</p>

    <div class="flex flex-col mt-10 gap-3">
      <div class="flex justify-center">
        <input v-model="review" type="text" placeholder="Type here..." class="text-white text-center w-70 text-xl bg-amber-400/60 rounded-xl h-15 focus:outline-none font-bold hover:shadow-2xl">
      </div>
      <div class="flex flex-row justify-center text-3xl text-white">
        <i :key="starIndex" v-for="starIndex in 5" @mouseenter="starHovered = starIndex" @mouseleave="starHovered = null" :class="(starHovered &&starIndex <= starHovered) || (rating && starIndex <= rating) ? 'text-amber-400':'text-white'"  class="fa-solid fa-star " @click="clickStar(starIndex)"></i>

      </div>
      <div class="flex justify-center">
        <button @click="submitRating" type="submit" class="text-amber-400 font-bold p-5 text-xl mt-3 w-fit bg-red-800/80 rounded-xl hover:shadow-2xl transition active:scale-120">Send review</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const review = ref<string>('')
const currentReview = ref<string | null>(null)

const starHovered = ref<number | null>(null)
const rating = ref<number | null>(null)
const currentRating = ref<number | null>(null)

const clickStar = (starIndex: number)=>{
  rating.value = starIndex
}
const submitRating = ()=>{
  currentRating.value = rating.value
  rating.value = null
  currentReview.value = review.value
  review.value = ''
  return {currentRating, currentReview}
}
</script>

<style scoped>

</style>

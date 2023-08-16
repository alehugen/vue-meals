<script setup lang="ts">
import YoutubeButton from './YoutubeButton.vue'
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <h3 class="p-3 font-semibold text-center">{{ meal.strMeal }}</h3>
    <div class="p-3 flex">
      <YoutubeButton :link="meal.strYoutube" />
    </div>
  </div>
</template>

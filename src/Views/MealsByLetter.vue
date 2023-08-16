<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute()

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<template>
  <section class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-5 gap-3 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </section>
</template>

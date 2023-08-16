<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue'

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
  <section class="flex gap-2 justify-center mt-5 mb-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </section>

  <Meals :meals="meals" />
</template>

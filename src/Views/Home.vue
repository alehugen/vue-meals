<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '../services/api'
import Meals from '../components/Meals.vue'
import randomLetters from '../utils/randomLetters'

const meals = ref([])

onMounted(async () => {
  const { data } = await api.get(`/search.php?s=${randomLetters()}`)
  meals.value = data.meals
})
</script>

<template>
  <header class="flex flex-col p-4"></header>
  <Meals :meals="meals" />
</template>

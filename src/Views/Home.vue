<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '../services/api'

const ingredients = ref([])

onMounted(async () => {
  const response = await api.get('/list.php?i=list')
  ingredients.value = response.data.meals
})
</script>

<template>
  <header class="flex flex-col p-8"></header>
</template>

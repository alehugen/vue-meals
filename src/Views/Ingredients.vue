<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { api } from '../services/api'

const ingredients = ref([])
const keyword = ref('')
const filteredIngredients = computed(() => {
  if (!filteredIngredients) return ingredients
  return ingredients.value.filter(
    i =>
      i.strDescription?.toLowerCase().includes(keyword.value.toLowerCase()) ||
      i.strIngredient?.toLowerCase().includes(keyword.value.toLowerCase())
  )
})
onMounted(async () => {
  const { data } = await api.get('list.php?i=list')
  ingredients.value = data.meals
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredientes</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full mb-3"
      placeholder="Pesquise pelo Ingrediente"
    />
    <router-link
      :to="{ name: 'byIngredients', params: { ingredients: i.strIngredient } }"
      v-for="i of filteredIngredients"
      :key="i"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ i.strIngredient }}</h3>
      <p class="text-justify">{{ i.strDescription }}</p>
    </router-link>
  </div>
</template>

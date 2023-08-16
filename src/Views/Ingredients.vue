<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import MealItem from '../components/MealItem.vue'
import { api } from '../services/api'

const ingredients = ref([])

onMounted(async () => {
  const { data } = await api.get('list.php?i=list')
  ingredients.value = data.meals
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredientes</h1>
    <router-link
      :to="{ name: 'byIngredients', params: { ingredients: i.strIngredient } }"
      v-for="i of ingredients"
      :key="i"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ i.strIngredient }}</h3>
      <p class="text-justify">{{ i.strDescription }}</p>
    </router-link>
  </div>
</template>

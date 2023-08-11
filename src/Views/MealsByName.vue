<script setup lang="ts">
import { ref, computed } from 'vue'
import store from '../store'

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}
</script>

<template>
  <section class="p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Busque receitas"
      v-model="keyword"
      @change="searchMeals"
    />
  </section>
  <section class="grid grid-cols-1 md:grid-cols-5 gap-3 p-8">
    <div v-for="meal of meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      <h3>{{ meal.strMeal }}</h3>
      <div>
        <a href="">Youtube</a>
        <router-link to="/"> Ver Receita </router-link>
      </div>
    </div>
  </section>
</template>

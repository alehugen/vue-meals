<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name as string
  if (keyword.value) searchMeals()
})
</script>

<template>
  <section class="p-8 pb-0">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Busque receitas"
      v-model="keyword"
      @change="searchMeals"
    />
  </section>

  <section class="grid grid-cols-1 md:grid-cols-5 gap-3 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </section>
</template>

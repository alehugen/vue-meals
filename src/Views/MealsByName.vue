<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchMeals', [])
  }
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
      class="rounded border-2 border-gray-200 w-full focus:ring-orange-500 focus:border-orange-500"
      placeholder="Busque receitas"
      v-model="keyword"
      @change="searchMeals"
    />
  </section>

  <Meals :meals="meals" />
</template>

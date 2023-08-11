<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import YT_LOGO from '../assets/yt-logo.png'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
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
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <h3 class="p-3 font-semibold text-center">{{ meal.strMeal }}</h3>
      <div class="p-3 flex">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="w-24 flex justify-center"
        >
          <img :src="YT_LOGO" alt="logo youtube" />
        </a>
      </div>
    </div>
  </section>
</template>

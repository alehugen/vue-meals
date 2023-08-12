<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../services/api'
import YoutubeButton from '../components/YoutubeButton.vue'

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  const { data } = await api.get(`lookup.php?i=${route.params.id}`)
  meal.value = data.meals[0] || {}
})
</script>

<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="text-3xl font-bold my-5">{{ meal.strMeal }}</h1>
    <img
      :src="meal?.strMealThumb"
      :alt="meal?.strMeal"
      class="rounded-lg shadow w-full"
    />
    <div class="flex justify-evenly py-5">
      <p><strong>Categoria </strong> : {{ meal.strCategory }}</p>
      <p><strong>Origem </strong> : {{ meal.strArea }}</p>
      <YoutubeButton :link="meal.strYoutube" />
    </div>

    <div class="w-full bg-slate-800 mt-3 mb-10 h-[3px] rounded-md"></div>

    <div class="flex justify-between">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredientes</h2>
        <ul>
          <template v-for="(e, i) in meal">
            <li v-if="i.includes('strIngredient')">
              <i>{{ e }}</i>
            </li>
          </template>
        </ul>
      </div>
      <div class="text-base text-justify flex align-middle">
        {{ meal.strInstructions }}
      </div>
    </div>
  </div>
</template>

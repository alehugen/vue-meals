<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../services/api'

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  const { data } = await api.get(`lookup.php?i=${route.params.id}`)
  meal.value = data.meals[0] || {}
})
</script>

<template>
  <div class="w-[800px] mx-auto">
    <h1 class="text-3xl font-bold my-5">{{ meal.strMeal }}</h1>
    <img
      :src="meal?.strMealThumb"
      :alt="meal?.strMeal"
      class="rounded-lg shadow w-full"
    />
    <div class="flex justify-evenly py-5">
      <p><strong>Categoria </strong> : {{ meal.strCategory }}</p>
      <p><strong>Origem </strong> : {{ meal.strArea }}</p>
    </div>

    <div class="flex justify-evenly">
      <h2 class="text-2xl font-semibold mb-3">Ingredientes</h2>
      <ul>
        <template v-for="(e, i) in meal">
          <li v-if="i.includes('strIngredient')">
            <i>{{ e }}</i>
          </li>
        </template>
      </ul>
    </div>

    <div class="text-xl text-justify py-10 w-auto">
      {{ meal.strInstructions }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '../services/api'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])

onMounted(async () => {
  const response = await api.get('/list.php?i=list')
  ingredients.value = response.data.meals
})
</script>

<template>
  <header class="flex flex-col p-8">
    <section class="flex gap-2 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </section>
  </header>
</template>

<script setup lang="ts">
const { meals } = defineProps({
  meals: { required: true, type: Object }
})
</script>

<template>
  <section v-if="!meals" class="flex justify-center text-gray-600">
    Nenhuma receita encontrada.
  </section>
  <section v-else class="grid grid-cols-1 md:grid-cols-5 gap-3 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </section>
</template>

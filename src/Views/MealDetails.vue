<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '../services/api'

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  const { data } = await api.get(`lookup.php?i=${route.params.id}`)
  meal.value = data
})
</script>

<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

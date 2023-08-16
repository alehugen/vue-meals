<script setup lang="ts">
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>

<template>
  <section class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </section>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="max-w-[1200px] mx-auto">
    <router-view />
  </main>
</template>

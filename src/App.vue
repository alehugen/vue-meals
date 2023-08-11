<script setup lang="ts"></script>

<template>
  <div class="bg-gray-100 h-full">
    <header
      class="bg-white shadow-md h-16 flex justify-between items-stretch px-5"
    >
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full"
      >
        Home
      </router-link>
      <nav class="flex items-center gap-1">
        <router-link
          to="/"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-400"
          >Pesquisar Receitas</router-link
        >
        <router-link
          to="/"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-400"
          >Receitas por Letras</router-link
        >
        <router-link
          to="/"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-400"
          >Receitas por Ingredientes</router-link
        >
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>

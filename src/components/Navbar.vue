<template>
  <header
    class="bg-white shadow-md h-16 flex justify-between items-stretch px-5"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full transition-colors hover:bg-orange-400 px-2"
    >
      Home
    </router-link>
    <nav class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-400"
        >Pesquisar Receitas</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-400"
        >Receitas por Letras</router-link
      >
      <router-link
        :to="{ name: 'byIngredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-400"
        >Receitas por Ingredientes</router-link
      >
    </nav>
  </header>
</template>

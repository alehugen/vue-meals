<template>
  <header
    class="bg-white shadow-md h-16 flex justify-between items-stretch px-5"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full transition-colors hover:bg-orange-500 px-2 hover:text-white"
    >
      Página Inicial
    </router-link>
    <nav class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >Pesquisar Receitas</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >Receitas por Letras</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >Receitas por Ingredientes</router-link
      >
    </nav>
  </header>
</template>

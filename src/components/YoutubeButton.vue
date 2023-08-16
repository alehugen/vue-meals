<script lang="ts" setup>
import YT_LOGO from '../assets/yt-logo.png'

const { link } = defineProps({
  link: String
})
</script>

<template>
  <a :href="link" target="_blank" class="w-24 flex justify-center">
    <img :src="YT_LOGO" alt="logo youtube" />
  </a>
</template>

<script setup lang="ts">
import { setCDN } from 'shiki'

setCDN('/node_modules/shiki/')

useHead({
  title: 'Nuxt 3 Starter Template',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

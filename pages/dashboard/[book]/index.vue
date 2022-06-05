<script setup lang="ts">
useProgressDone()

definePageMeta({
  layout: 'app',
})
</script>

<template>
  <div>
    <p>{{ $route.params.book }}</p>
  </div>
</template>

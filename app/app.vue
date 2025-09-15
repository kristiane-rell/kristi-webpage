<template>
  <div class="app">
    <AppHeader />
    <NuxtPage />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
</script>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
}
</style>
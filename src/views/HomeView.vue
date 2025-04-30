<script setup lang="ts">
/**
 * @component HomeView
 * @description The original home page view for the Vue application.
 * It renders the TheWelcome component which displays information about supporting Vue.
 * Note: In the current application structure, this component is not actively used
 * as the root path now maps to PostListView instead.
 */
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

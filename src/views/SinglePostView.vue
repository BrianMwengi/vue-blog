<template>
  <div class="single-post">
    <h1>Single Post View</h1>
    <p>This is the single post view that will display details for post ID: {{ $route.params.id }}</p>
    <p>Placeholder content - this will be replaced with actual post content.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.single-post {
  padding: 1rem 0;
}
</style>
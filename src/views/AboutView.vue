<script setup lang="ts">
/**
 * @component AboutView
 * @description A simple About page for the Vue Blog application that provides information
 * about the blog, its purpose, and potentially the team behind it. This page is accessible
 * from the main navigation.
 */
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

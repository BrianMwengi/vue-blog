<script setup lang="ts">
/**
 * @component TheWelcome
 * @description A component that displays a welcome message with information about supporting Vue.js.
 * Uses the WelcomeItem component to provide a consistent layout for the welcome content and
 * incorporates the SupportIcon for visual representation.
 */
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>

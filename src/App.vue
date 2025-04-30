<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <div class="content-container">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
@import './assets/main.css';

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
}

.main-content {
  flex: 1;
  width: 100%;
  padding: 3rem 0;
}

.content-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>



<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.svg" width="32" height="32" />
        <span>Vue Blog</span>
      </div>
      <div class="nav-links">
        <RouterLink to="/">Posts</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
/**
 * @component Navbar
 * @description Main navigation component for the Vue Blog application. Provides links to the
 * main sections of the site including Posts, About, and Contact pages.
 * The component displays the site logo and navigation links with active state styling.
 */
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.15rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 3px solid #41b883;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2c3e50;
}

.logo img {
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #41b883;
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #41b883;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: #41b883;
  font-weight: 700;
}

.nav-links a.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
}
</style>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="copyright">
          &copy; {{ currentYear }} Vue Blog. All rights reserved.
        </div>
        <div class="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * @component Footer
 * @description Footer component for the Vue Blog application that appears at the bottom of every page.
 * Features copyright information with the current year, and links to important pages like
 * Terms of Service, Privacy Policy, and Contact. The component automatically updates the copyright
 * year to the current year.
 */
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid #e0e0e0;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.copyright {
  font-size: 0.9rem;
  color: #666;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  text-decoration: none;
  color: #666;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #41b883;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
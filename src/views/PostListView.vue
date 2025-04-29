<template>
  <div class="post-list">
    <h1>Blog Posts</h1>
    
    <div class="post-cards">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2 class="post-title">
          <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        </h2>
        <p class="post-meta">By {{ post.author }} • {{ post.date }}</p>
        <p class="post-snippet">{{ post.snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { posts } from '@/data/mockPosts';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.post-list {
  padding: 1rem 0;
}

.post-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.post-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.post-title {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.post-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-title a:hover {
  color: #41b883;
}

.post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-snippet {
  color: #333;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .post-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .post-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
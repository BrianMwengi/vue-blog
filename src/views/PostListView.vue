<template>
  <div class="post-list">
    <h1 class="page-title">Blog Posts</h1>
    
    <div class="post-cards">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2 class="post-title">
          <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        </h2>
        <p class="post-meta">By {{ post.author }} • {{ post.date }}</p>
        <p class="post-snippet">{{ post.snippet }}</p>
        <div class="read-more">
          <RouterLink :to="`/post/${post.id}`" class="read-more-link">Read More →</RouterLink>
        </div>
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

.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  position: relative;
  padding-bottom: 0.5rem;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: #41b883;
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
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #41b883;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.post-title {
  margin-bottom: 0.75rem;
  font-size: 1.6rem;
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
  display: flex;
  align-items: center;
}

.post-meta::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #41b883;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.post-snippet {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more {
  text-align: right;
}

.read-more-link {
  color: #41b883;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.read-more-link:hover {
  color: #34495e;
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
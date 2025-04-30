<template>
  <div class="single-post">
    <div v-if="post" class="post-content">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-meta">
        <p>By {{ post.author }} • Published on {{ post.date }}</p>
      </div>
      <div class="content">
        <p v-for="(paragraph, index) in contentParagraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="back-link">
        <RouterLink to="/">← Back to all posts</RouterLink>
      </div>
    </div>
    <div v-else class="not-found">
      <h2>Post Not Found</h2>
      <p>Sorry, the post you're looking for doesn't exist or has been removed.</p>
      <RouterLink to="/" class="back-home">Back to Posts</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { posts, type Post } from '@/data/mockPosts'

const route = useRoute()
const postId = parseInt(route.params.id as string, 10)

// Find the post with the matching ID
const post = computed<Post | undefined>(() => {
  return posts.find(p => p.id === postId)
})

// Split post content into paragraphs for better display
const contentParagraphs = computed(() => {
  if (!post.value) return []
  return post.value.content.split('\n\n')
})
</script>

<style scoped>
.single-post {
  padding: 1rem 0;
  max-width: 800px;
  margin: 0 auto;
}

.post-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.post-meta {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;
}

.content p {
  margin-bottom: 1.5rem;
}

.back-link {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.back-link a {
  color: #41b883;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-link a:hover {
  color: #34495e;
}

.not-found {
  text-align: center;
  padding: 3rem 1rem;
}

.not-found h2 {
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 1rem;
}

.not-found p {
  color: #666;
  margin-bottom: 2rem;
}

.back-home {
  display: inline-block;
  background-color: #41b883;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.back-home:hover {
  background-color: #34495e;
}
</style>
<template>
  <div class="single-post">
    <div v-if="post" class="post-content">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-meta">
        <span class="post-author">By {{ post.author }}</span>
        <span class="post-date">Published on {{ post.date }}</span>
      </div>
      <div class="content">
        <p v-for="(paragraph, index) in contentParagraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="back-link">
        <RouterLink to="/" class="back-button">← Back to all posts</RouterLink>
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
/**
 * @component SinglePostView
 * @description Displays a single blog post's complete content based on the route parameter ID.
 * Retrieves the post from the mock data using the ID from the URL, and displays the title,
 * author, publishing date, and full content split into paragraphs. If no matching post is found,
 * displays a "Post Not Found" message with a link back to the posts list.
 * 
 * The component demonstrates dynamic routing with parameters and conditional rendering
 * based on data availability.
 */
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

.post-content {
  position: relative;
}

.post-title {
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  line-height: 1.2;
  position: relative;
  padding-bottom: 0.8rem;
}

.post-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background-color: #41b883;
}

.post-meta {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.post-author {
  font-weight: 500;
  margin-right: 1.5rem;
}

.post-date {
  position: relative;
  padding-left: 1.5rem;
}

.post-date::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  background-color: #41b883;
  border-radius: 50%;
}

.content {
  line-height: 1.9;
  font-size: 1.15rem;
  color: #333;
}

.content p {
  margin-bottom: 2rem;
  text-align: justify;
}

.content p:first-of-type::first-letter {
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 0.8;
  float: left;
  margin-right: 0.5rem;
  color: #41b883;
}

.back-link {
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.back-button {
  display: inline-flex;
  align-items: center;
  color: #41b883;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border: 1px solid #41b883;
  border-radius: 4px;
}

.back-button:hover {
  background-color: #41b883;
  color: white;
}

.not-found {
  text-align: center;
  padding: 4rem 1rem;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.not-found h2 {
  font-size: 2.5rem;
  color: #34495e;
  margin-bottom: 1.5rem;
}

.not-found p {
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.back-home {
  display: inline-block;
  background-color: #41b883;
  color: white;
  padding: 0.85rem 1.75rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 6px rgba(65, 184, 131, 0.3);
}

.back-home:hover {
  background-color: #34495e;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 2rem;
  }
  
  .content {
    font-size: 1.05rem;
  }
}
</style>
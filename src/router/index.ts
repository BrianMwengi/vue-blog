import { createRouter, createWebHistory } from 'vue-router'
import PostListView from '../views/PostListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'post-list',
      component: PostListView,
    },
    {
      path: '/post/:id',
      name: 'single-post',
      component: () => import('../views/SinglePostView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

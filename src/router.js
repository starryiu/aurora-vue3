import { createRouter, createWebHashHistory } from 'vue-router'
import Home from'./views/Home'
import Post from'./views/Post'
import Archive from'./views/Archive'
import Category from'./views/Category'
import Tag from'./views/Tag'
import Inspiration from'./views/Inspiration'
import Song from'./views/Song'
import Friend from'./views/Friend'
import About from'./views/About'

const routes =[
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/post/:number',
    name: 'post',
    component: Post,
  },
  {
    path: '/archive',
    name: 'archive',
    component: Archive,
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag,
  },
  {
    path: '/inspiration',
    name: 'inspiration',
    component: Inspiration,
  },
  {
    path: '/song',
    name: 'song',
    component: Song,
  },
  {
    path: '/friend',
    name: 'friend',
    component: Friend,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

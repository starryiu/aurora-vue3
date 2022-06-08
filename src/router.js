import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('./views/Home')
const Post = () => import('./views/Post')
const Archive = () => import('./views/Archive')
const Category = () => import('./views/Category')
const Tag = () => import('./views/Tag')
const Inspiration = () => import('./views/Inspiration')
const Song = () => import('./views/Song')
const Friend = () => import('./views/Friend')
const About = () => import('./views/About')

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

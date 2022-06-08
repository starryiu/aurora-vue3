import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import(/* webpackChunkName: "Body-Home" */ './views/Home')
const Post = () => import(/* webpackChunkName: "Body-Post" */ './views/Post')
const Archive = () => import(/* webpackChunkName: "Body-Archive" */ './views/Archive')
const Category = () => import(/* webpackChunkName: "Body-Category" */ './views/Category')
const Tag = () => import(/* webpackChunkName: "Body-Tag" */ './views/Tag')
const Inspiration = () => import(/* webpackChunkName: "Body-Inspiration" */ './views/Inspiration')
const Song = () => import(/* webpackChunkName: "Body-Song" */ './views/Song')
const Friend = () => import(/* webpackChunkName: "Body-Friend" */ './views/Friend')
const About = () => import(/* webpackChunkName: "Body-About" */ './views/About')

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

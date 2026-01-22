import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import TaskDetailsView from '../views/TaskDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/tasks', name: 'tasks', component: TasksView },
  { path: '/task/:id', name: 'task', props: true, component: TaskDetailsView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

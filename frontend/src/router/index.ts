import { createRouter, createWebHistory } from 'vue-router'

import CarSelectView from '../views/CarSelectView.vue'
import DashboardView from '../views/DashboardView.vue'
import EntryView from '../views/EntryView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cars',
      component: CarSelectView,
    },
    { 
      path: '/dashboard/:carId', 
      name: 'dashboard', 
      component: DashboardView 
    },
    { 
      path: '/entry/:carId', 
      name: 'entry', 
      component: EntryView 
    },
    { 
      path: '/settings/:carId', 
      name: 'settings', 
      component: SettingsView 
    },
  ],
})

export default router

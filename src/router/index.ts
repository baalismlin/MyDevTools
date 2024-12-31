import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ManPageView from '@/views/ManPageView.vue'
import CanIUseView from '@/views/CanIUseView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/manpages', name: 'Man Pages', component: ManPageView },
    { path: '/caniuse', name: 'Can I Use', component: CanIUseView },
  ],
})
export default router

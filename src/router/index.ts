import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ManPageView from '@/views/ManPageView.vue'
import ClipboardView from '@/views/ClipboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/manpages', name: 'Man Pages', component: ManPageView },
    { path: '/clipboard', name: 'Clipboard', component: ClipboardView },
  ],
})
export default router

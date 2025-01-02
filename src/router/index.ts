import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/UtilView.vue'
import ManPageView from '@/views/ManPageView.vue'
import ClipboardView from '@/views/ClipboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Utils', component: HomeView },
    { path: '/manpage', name: 'Man Page', component: ManPageView },
    { path: '/clipboard', name: 'Clipboard', component: ClipboardView },
  ],
})
export default router

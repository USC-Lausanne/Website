// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SurfskateView from '@/views/SurfskateView.vue'
import WinchView from '@/views/WinchView.vue'
import PumpView from '@/views/PumpView.vue'
import EventsView from '@/views/EventsView.vue'
import Join from '@/views/Join.vue'
import HistoryView from '@/views/HistoryPage.vue'
import ContactView from '@/views/ContactPage.vue'
import DocumentView from '@/views/DocumentPage.vue'
import TeamView from '@/views/TeamPage.vue'
import GalleryPage from '@/views/GalleryPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/surfskate', name: 'Surfskate', component: SurfskateView },
  { path: '/winch', name: 'Winch', component: WinchView },
  { path: '/pump', name: 'Pump', component: PumpView },
  { path: '/join', name: 'Join', component: Join },
  { path: '/events', name: 'Events', component: EventsView },
  { path: '/history', name: 'History', component: HistoryView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/document', name: 'Document', component: DocumentView },
  { path: '/team', name: 'Team', component: TeamView },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
]

const router = createRouter({
  history: createWebHashHistory('/Website/'),
  routes,
})

export default router
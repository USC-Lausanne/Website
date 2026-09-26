// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
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
import LegalPage from '@/views/LegalPage.vue'

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
  { path: '/mentions', name: 'Mentions', component: LegalPage, meta: { legalPage: 'mentions' } },
  { path: '/privacy', name: 'Privacy', component: LegalPage, meta: { legalPage: 'privacy' } },
  { path: '/cookies', name: 'Cookies', component: LegalPage, meta: { legalPage: 'cookies' } },
  { path: '/terms', name: 'Terms', component: LegalPage, meta: { legalPage: 'terms' } },
  { path: '/cgv', name: 'Cgv', component: LegalPage, meta: { legalPage: 'cgv' } },
]

const router = createRouter({
  history: createWebHashHistory('/Website/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
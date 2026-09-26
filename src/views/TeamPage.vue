<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section>
        <h1 class="page-title">{{ $t('team.title') }}</h1>
        <p class="page-lead mt-4">{{ $t('team.subtitle') }}</p>
      </section>

      <img
        :src="teamPhoto"
        :alt="$t('team.title')"
        class="photo h-auto w-full"
        loading="lazy"
        decoding="async"
      />

      <section v-for="section in teamSections" :key="section.id" :aria-labelledby="`team-${section.id}`">
        <h2 :id="`team-${section.id}`" class="section-title">{{ $t(section.title) }}</h2>
        <ul class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li
            v-for="member in section.members"
            :key="member.name"
            class="card flex flex-row items-center gap-4"
          >
            <User class="h-10 w-10 shrink-0 text-gray-300 dark:text-gray-600" aria-hidden="true" />
            <div>
              <p class="font-semibold dark:text-gray-200">{{ member.name }}</p>
              <p class="meta-text">{{ member.role }}</p>
            </div>
          </li>
        </ul>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { User } from 'lucide-vue-next'
import teamPhoto from '@/assets/team.jpeg'

const teamSections = [
  {
    id: 'board',
    title: 'team.board',
    members: [
      { name: 'Yona F.', role: 'VP. Sport' },
      { name: 'Anthony V.', role: 'Respo Pump Foil' },
      { name: 'Kilian P.', role: 'Respo Sponsoring' },
    ],
  },
  {
    id: 'sports',
    title: 'team.sports',
    members: [
      { name: 'Madeleine SANGLÉ', role: 'Respo Surf-Skate' },
      { name: 'Timea CABA', role: 'Respo Surf-Skate' },
      { name: 'Marc IVERSENC', role: 'Respo Pump Foil' },
      { name: 'Lina SAJID', role: 'Respo Winch' },
      { name: 'Noemie PIGEON', role: 'Respo Winch' },
    ],
  },
  {
    id: 'communication',
    title: 'team.communication',
    members: [
      { name: 'Aurel DROUART', role: 'Respo PHOTO/VIDÉO' },
      { name: 'Lina SAGDAL', role: 'Respo PHOTO/VIDÉO' },
      { name: 'Shanon SWEENEY', role: 'Respo PHOTO/VIDÉO' },
    ],
  },
  {
    id: 'association',
    title: 'team.association',
    members: [
      { name: 'Victor P.', role: 'Respo IT' },
      { name: 'Nouchine B.', role: 'Respo Design' },
    ],
  },
  {
    id: 'community',
    title: 'team.community',
    members: [
      { name: 'Manon AGBALÉ', role: 'Community manager' },
      { name: 'Jo VOLKERT', role: 'Community manager' },
    ],
  },
]
</script>

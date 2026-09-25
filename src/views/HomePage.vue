<template>
  <HeaderPage />

  <main class="bg-[#f4f0e8] text-[#143044] dark:bg-gray-900 dark:text-gray-100">
    <section class="grid lg:min-h-[calc(100svh-6.5rem)] lg:grid-cols-2" aria-labelledby="home-title">
      <div class="order-2 flex items-center px-6 py-12 sm:px-10 lg:order-1 lg:px-14 lg:py-16">
        <div class="max-w-xl">
          <p class="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#0e6175] uppercase dark:text-cyan-300">
            <span class="waterline" aria-hidden="true"></span>
            {{ t('home.kicker') }}
          </p>
          <h1 id="home-title" class="mt-4 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl">
            {{ t('welcome') }}
          </h1>
          <p class="mt-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {{ t('intro') }}
          </p>
          <p class="mt-4 text-lg text-[#0e6175] italic dark:text-cyan-200">
            {{ t('join') }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full bg-[#143044] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1c4660] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6175] dark:bg-cyan-800 dark:hover:bg-cyan-700"
              @click="scrollToPractices"
            >
              {{ t('home.scrollPractices') }}
            </button>
            <router-link
              to="/join"
              class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-[#143044]/25 hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6175] dark:ring-white/25 dark:hover:bg-white/5"
            >
              {{ t('becomeMember.title') }}
            </router-link>
          </div>
        </div>
      </div>

      <div class="relative order-1 min-h-72 overflow-hidden sm:min-h-96 lg:order-2 lg:min-h-full">
        <img
          :src="heroPhoto"
          :alt="t('home.heroAlt')"
          class="hero-drift absolute inset-0 h-full w-full object-cover"
          fetchpriority="high"
        />
        <Shoreline />
      </div>
    </section>

    <section class="px-6 py-16 sm:px-10 lg:px-14 lg:py-20" aria-labelledby="what-title">
      <div class="mx-auto max-w-6xl">
        <h2 id="what-title" class="text-3xl font-semibold tracking-tight">
          {{ t('home.whatTitle') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {{ t('home.whatLead') }}
        </p>
        <ol class="mt-12 grid gap-8 md:grid-cols-3">
          <li
            v-for="(fact, i) in facts"
            :key="fact.title"
            class="border-t border-[#143044]/15 pt-4 dark:border-white/15"
          >
            <p class="text-sm font-semibold tracking-[0.14em] text-[#0e6175] dark:text-cyan-300">
              {{ String(i + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-2 text-lg font-semibold">{{ t(fact.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {{ t(fact.text) }}
            </p>
          </li>
        </ol>
      </div>
    </section>

    <section id="practices" class="scroll-mt-8 px-6 py-16 sm:px-10 lg:px-14 lg:py-20" aria-labelledby="practices-title">
      <div class="mx-auto max-w-6xl">
        <h2 id="practices-title" class="text-3xl font-semibold tracking-tight">
          {{ t('activities') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {{ t('home.practicesLead') }}
        </p>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <PracticeCard
            v-for="(practice, i) in practices"
            :key="practice.to"
            :index="i + 1"
            :title="t(practice.title)"
            :description="t(practice.desc)"
            :gloss="t(practice.gloss)"
            :where="t(practice.where)"
            :image="practice.image"
            :to="practice.to"
            :learn-label="t('home.learnMore')"
            :delay="practice.delay"
            :duration="practice.duration"
          />
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-16 sm:px-10 lg:px-14 lg:py-20 dark:bg-gray-900" aria-labelledby="start-title">
      <div class="mx-auto max-w-6xl">
        <h2 id="start-title" class="text-3xl font-semibold tracking-tight">
          {{ t('home.startTitle') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {{ t('home.startLead') }}
        </p>
        <ol class="mt-10 grid gap-8 md:grid-cols-3">
          <li v-for="(step, i) in steps" :key="step.title">
            <p class="text-3xl font-semibold tracking-tight text-[#0e6175] dark:text-cyan-300" aria-hidden="true">
              {{ i + 1 }}
            </p>
            <h3 class="mt-3 text-lg font-semibold">{{ t(step.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {{ t(step.text) }}
            </p>
          </li>
        </ol>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <router-link
            to="/join"
            class="inline-flex items-center justify-center rounded-full bg-[#143044] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1c4660] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6175] dark:bg-cyan-800 dark:hover:bg-cyan-700"
          >
            {{ t('becomeMember.title') }}
          </router-link>
          <a
            href="https://www.instagram.com/usc_lausanne/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#0e6175] underline decoration-[#0e6175]/30 underline-offset-4 hover:decoration-[#0e6175] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6175] dark:text-cyan-300 dark:decoration-cyan-300/40"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 1.5a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm5.25-2.25a1.125 1.125 0 1 1-1.125 1.125A1.125 1.125 0 0 1 17.25 6.75z" />
            </svg>
            {{ t('home.followUsOnInstagram') }}
          </a>
        </div>
      </div>
    </section>
  </main>

  <FooterPage />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import Shoreline from '@/components/home/Shoreline.vue'
import PracticeCard from '@/components/home/PracticeCard.vue'
import heroPhoto from '@/assets/home_photo.jpeg'
import photo1 from '@/assets/photo_index_1.jpeg'
import photo2 from '@/assets/photo_index_2.jpeg'
import photo3 from '@/assets/photo_index_3.jpeg'
import photo4 from '@/assets/photo_index_4.jpeg'

const { t } = useI18n()

const facts = [
  { title: 'home.point1Title', text: 'home.point1Text' },
  { title: 'home.point2Title', text: 'home.point2Text' },
  { title: 'home.point3Title', text: 'home.point3Text' },
]

const practices = [
  { title: 'winch.title', desc: 'winch.desc', gloss: 'home.winchGloss', where: 'home.winchWhere', image: photo1, to: '/winch', delay: '0s', duration: '18s' },
  { title: 'pump.title', desc: 'pump.desc', gloss: 'home.pumpGloss', where: 'home.pumpWhere', image: photo2, to: '/pump', delay: '-6s', duration: '22s' },
  { title: 'skate.title', desc: 'skate.desc', gloss: 'home.skateGloss', where: 'home.skateWhere', image: photo3, to: '/surfskate', delay: '-11s', duration: '16s' },
  { title: 'events.title', desc: 'events.desc', gloss: 'home.eventsGloss', where: 'home.eventsWhere', image: photo4, to: '/events', delay: '-4s', duration: '20s' },
]

const steps = [
  { title: 'home.step1Title', text: 'home.step1Text' },
  { title: 'home.step2Title', text: 'home.step2Text' },
  { title: 'home.step3Title', text: 'home.step3Text' },
]

function scrollToPractices() {
  const target = document.getElementById('practices')
  if (!target) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
</script>

<style scoped>
.waterline {
  display: inline-block;
  width: 2.75rem;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #0e6175, #b7e4ea, transparent);
  background-size: 200% 100%;
  animation: waterline 5.5s ease-in-out infinite;
}

.hero-drift {
  transform: scale(1.08);
  animation: hero-drift 16s ease-in-out infinite alternate;
}

@keyframes waterline {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes hero-drift {
  from {
    transform: scale(1.08) translate3d(0, 0, 0);
  }
  to {
    transform: scale(1.14) translate3d(-3%, -1.5%, 0);
  }
}

:global(html.dark) .waterline,
:global(.dark) .waterline {
  background: linear-gradient(90deg, transparent, #67e8f9, transparent);
  background-size: 200% 100%;
}

@media (prefers-reduced-motion: reduce) {
  .waterline,
  .hero-drift {
    animation: none;
  }
}
</style>

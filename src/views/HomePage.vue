<template>
  <div class="flex min-h-screen flex-col dark:bg-gray-900 dark:text-gray-200">
    <HeaderPage />

    <main class="mx-auto mb-20 flex w-full max-w-6xl flex-1 flex-col items-center space-y-18 p-4">
      <section class="flex w-full flex-col items-center gap-8 md:flex-row" aria-labelledby="home-title">
        <div class="flex-1 space-y-4">
          <h1 id="home-title" class="text-3xl font-bold dark:text-gray-200">{{ t('welcome') }}</h1>
          <p class="text-gray-700 dark:text-gray-400">{{ t('home.kicker') }}</p>
          <p class="text-gray-700 dark:text-gray-400">{{ t('intro') }}</p>
          <p class="font-medium text-gray-700 dark:text-gray-400">{{ t('join') }}</p>
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <button type="button" class="text-left font-semibold underline" @click="scrollToPractices">
              {{ t('home.scrollPractices') }}
            </button>
            <router-link to="/join" class="font-semibold underline">
              {{ t('becomeMember.title') }}
            </router-link>
          </div>
        </div>
        <div class="w-full overflow-hidden rounded md:w-1/2">
          <img
            :src="heroPhoto"
            :alt="t('home.heroAlt')"
            class="hero-drift h-72 w-full object-cover md:h-80"
            fetchpriority="high"
          />
        </div>
      </section>

      <section class="w-full" aria-labelledby="what-title">
        <h2 id="what-title" class="mb-4 text-2xl font-semibold dark:text-gray-200">{{ t('home.whatTitle') }}</h2>
        <p class="mb-4 text-gray-700 dark:text-gray-400">{{ t('home.whatLead') }}</p>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="(fact, i) in facts"
            :key="fact.title"
            class="flex flex-col items-center rounded border border-black p-4 text-center dark:border-gray-700 dark:bg-gray-800"
          >
            <component :is="fact.icon" class="mb-3 h-6 w-6" />
            <p class="text-xl font-bold dark:text-gray-200">{{ i + 1 }}.</p>
            <p class="font-semibold dark:text-gray-200">{{ t(fact.title) }}</p>
            <p class="text-gray-700 dark:text-gray-400">{{ t(fact.text) }}</p>
          </div>
        </div>
      </section>

      <section id="practices" class="w-full scroll-mt-8" aria-labelledby="practices-title">
        <h2 id="practices-title" class="mb-4 text-2xl font-semibold dark:text-gray-200">{{ t('activities') }}</h2>
        <p class="mb-4 text-gray-700 dark:text-gray-400">{{ t('home.practicesLead') }}</p>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          />
        </div>
      </section>

      <section class="w-full" aria-labelledby="start-title">
        <h2 id="start-title" class="mb-4 text-2xl font-semibold dark:text-gray-200">{{ t('home.startTitle') }}</h2>
        <p class="mb-4 text-gray-700 dark:text-gray-400">{{ t('home.startLead') }}</p>
        <div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="flex flex-col items-center rounded border border-black p-4 dark:border-gray-700 dark:bg-gray-800"
          >
            <p class="text-xl font-bold dark:text-gray-200">{{ i + 1 }}.</p>
            <p class="font-semibold dark:text-gray-200">{{ t(step.title) }}</p>
            <p class="text-gray-700 dark:text-gray-400">{{ t(step.text) }}</p>
          </div>
        </div>
        <div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <router-link to="/join" class="font-semibold underline">
            {{ t('becomeMember.title') }}
          </router-link>
          <a
            href="https://www.instagram.com/usc_lausanne/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold underline"
          >
            {{ t('home.followUsOnInstagram') }}
          </a>
        </div>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Users, Waves, UserRound } from 'lucide-vue-next'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import PracticeCard from '@/components/home/PracticeCard.vue'
import heroPhoto from '@/assets/home_photo.jpeg'
import photo1 from '@/assets/photo_index_1.jpeg'
import photo2 from '@/assets/photo_index_2.jpeg'
import photo3 from '@/assets/photo_index_3.jpeg'
import photo4 from '@/assets/photo_index_4.jpeg'

const { t } = useI18n()

const facts = [
  { title: 'home.point1Title', text: 'home.point1Text', icon: Users },
  { title: 'home.point2Title', text: 'home.point2Text', icon: Waves },
  { title: 'home.point3Title', text: 'home.point3Text', icon: UserRound },
]

const practices = [
  { title: 'winch.title', desc: 'winch.desc', gloss: 'home.winchGloss', where: 'home.winchWhere', image: photo1, to: '/winch' },
  { title: 'pump.title', desc: 'pump.desc', gloss: 'home.pumpGloss', where: 'home.pumpWhere', image: photo2, to: '/pump' },
  { title: 'skate.title', desc: 'skate.desc', gloss: 'home.skateGloss', where: 'home.skateWhere', image: photo3, to: '/surfskate' },
  { title: 'events.title', desc: 'events.desc', gloss: 'home.eventsGloss', where: 'home.eventsWhere', image: photo4, to: '/events' },
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
.hero-drift {
  animation: hero-drift 22s ease-in-out infinite alternate;
}

@keyframes hero-drift {
  from {
    transform: scale(1.03) translate3d(0, 0, 0);
  }
  to {
    transform: scale(1.06) translate3d(-1.5%, -0.8%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-drift {
    animation: none;
    transform: none;
  }
}
</style>

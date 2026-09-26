<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-gray-900 dark:text-gray-200">
    <HeaderPage />

    <main class="mx-auto flex w-full max-w-6xl flex-1 flex-col space-y-18 p-6 pb-24">
      <!-- Ouverture -->
      <section class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14" aria-labelledby="home-title">
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('home.kicker') }}</p>

          <h1
            id="home-title"
            class="mt-3 text-3xl leading-tight font-bold text-balance md:text-4xl dark:text-gray-200"
          >
            {{ t('welcome') }}
          </h1>

          <p class="mt-5 leading-relaxed text-gray-700 dark:text-gray-400">{{ t('intro') }}</p>

          <p class="mt-4 text-lg text-sky-700 italic dark:text-sky-400">{{ t('join') }}</p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <router-link to="/join" :class="primaryButton">{{ t('home.primaryCta') }}</router-link>
            <button type="button" :class="secondaryButton" @click="scrollToPractices">
              {{ t('home.secondaryCta') }}
            </button>
          </div>
        </div>

        <figure>
          <img
            :src="heroPhoto"
            :alt="t('home.heroAlt')"
            class="h-auto w-full rounded-md shadow"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption class="mt-3 text-sm text-gray-500 italic dark:text-gray-400">
            {{ t('home.heroCaption') }}
          </figcaption>
        </figure>
      </section>

      <!-- Repères -->
      <section
        class="rounded-md bg-gray-50 p-6 sm:p-8 dark:bg-gray-800/50"
        :aria-label="t('home.whatTitle')"
      >
        <dl class="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label">
            <dt class="text-2xl font-bold text-sky-700 dark:text-sky-400">{{ t(stat.value) }}</dt>
            <dd class="mt-1 text-sm leading-snug text-gray-700 dark:text-gray-400">
              {{ t(stat.label) }}
            </dd>
          </div>
        </dl>
      </section>

      <!-- Ce qu'est le club -->
      <section aria-labelledby="what-title">
        <h2 id="what-title" class="text-2xl font-bold dark:text-gray-200">
          {{ t('home.whatTitle') }}
        </h2>
        <p class="mt-3 max-w-2xl text-gray-700 dark:text-gray-400">{{ t('home.whatLead') }}</p>

        <div class="mt-10 grid gap-10 md:grid-cols-3">
          <div v-for="fact in facts" :key="fact.title">
            <component
              :is="fact.icon"
              class="h-6 w-6 text-sky-700 dark:text-sky-400"
              aria-hidden="true"
            />
            <h3 class="mt-3 font-semibold dark:text-gray-200">{{ t(fact.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {{ t(fact.text) }}
            </p>
          </div>
        </div>
      </section>

      <!-- Nos activités -->
      <section id="practices" class="scroll-mt-6" aria-labelledby="practices-title">
        <h2 id="practices-title" class="text-2xl font-bold dark:text-gray-200">
          {{ t('activities') }}
        </h2>
        <p class="mt-3 max-w-2xl text-gray-700 dark:text-gray-400">{{ t('home.practicesLead') }}</p>

        <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <PracticeCard
            v-for="practice in practices"
            :key="practice.to"
            :title="t(practice.title)"
            :gloss="t(practice.gloss)"
            :where="t(practice.where)"
            :image="practice.image"
            :to="practice.to"
            :learn-label="t('home.learnMore')"
          />
        </div>
      </section>

      <!-- Comment commencer -->
      <section class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14" aria-labelledby="start-title">
        <div class="lg:col-span-7">
          <h2 id="start-title" class="text-2xl font-bold dark:text-gray-200">
            {{ t('home.startTitle') }}
          </h2>
          <p class="mt-3 text-gray-700 dark:text-gray-400">{{ t('home.startLead') }}</p>

          <ol class="mt-8 space-y-6">
            <li v-for="(step, i) in steps" :key="step.title" class="flex gap-4">
              <span
                class="shrink-0 text-2xl leading-none font-bold text-sky-700 dark:text-sky-400"
                aria-hidden="true"
              >
                {{ i + 1 }}.
              </span>
              <div>
                <h3 class="font-semibold dark:text-gray-200">{{ t(step.title) }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
                  {{ t(step.text) }}
                </p>
              </div>
            </li>
          </ol>
        </div>

        <img
          :src="startPhoto"
          :alt="t('home.startPhotoAlt')"
          class="h-auto w-full rounded-md object-cover shadow lg:col-span-5 lg:aspect-square"
          loading="lazy"
          decoding="async"
        />
      </section>

      <!-- Appel final -->
      <section
        class="flex flex-col items-start gap-6 rounded-md bg-gray-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between dark:bg-gray-800/50"
        aria-labelledby="cta-title"
      >
        <div>
          <h2 id="cta-title" class="text-xl font-bold dark:text-gray-200">{{ t('home.ctaTitle') }}</h2>
          <p class="mt-1 text-gray-700 dark:text-gray-400">{{ t('home.ctaText') }}</p>
        </div>

        <div class="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <router-link to="/join" :class="primaryButton">{{ t('home.primaryCta') }}</router-link>
          <InstagramButton />
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
import InstagramButton from '@/components/InstagramButton.vue'
import PracticeCard from '@/components/home/PracticeCard.vue'
import heroPhoto from '@/assets/home_photo.jpeg'
import startPhoto from '@/assets/photo9.jpeg'
import photo1 from '@/assets/photo_index_1.jpeg'
import photo2 from '@/assets/photo_index_2.jpeg'
import photo3 from '@/assets/photo_index_3.jpeg'
import photo4 from '@/assets/photo_index_4.jpeg'

const { t } = useI18n()

const primaryButton =
  'inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500'

const secondaryButton =
  'inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'

const stats = [0, 1, 2, 3].map((i) => ({
  value: `home.stats[${i}].value`,
  label: `home.stats[${i}].label`,
}))

const facts = [
  { title: 'home.point1Title', text: 'home.point1Text', icon: Users },
  { title: 'home.point2Title', text: 'home.point2Text', icon: Waves },
  { title: 'home.point3Title', text: 'home.point3Text', icon: UserRound },
]

const practices = [
  { title: 'winch.title', gloss: 'home.winchGloss', where: 'home.winchWhere', image: photo1, to: '/winch' },
  { title: 'pump.title', gloss: 'home.pumpGloss', where: 'home.pumpWhere', image: photo2, to: '/pump' },
  { title: 'skate.title', gloss: 'home.skateGloss', where: 'home.skateWhere', image: photo3, to: '/surfskate' },
  { title: 'events.title', gloss: 'home.eventsGloss', where: 'home.eventsWhere', image: photo4, to: '/events' },
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

<template>
  <div class="flex min-h-screen flex-col dark:bg-gray-900 dark:text-gray-200">
    <HeaderPage />

    <main class="flex-1">
      <!-- Ouverture -->
      <section
        class="mx-auto w-full max-w-6xl px-4 pt-4 pb-14 sm:px-6 lg:pt-10 lg:pb-20"
        aria-labelledby="home-title"
      >
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-6">
            <p
              class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400"
            >
              {{ t('home.kicker') }}
            </p>

            <h1
              id="home-title"
              class="mt-4 text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl dark:text-gray-200"
            >
              {{ t('welcome') }}
            </h1>

            <p class="mt-5 max-w-prose leading-relaxed text-gray-700 dark:text-gray-400">
              {{ t('intro') }}
            </p>

            <p class="mt-5 font-medium text-sky-700 dark:text-sky-400">
              {{ t('join') }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <router-link to="/join" :class="primaryButton">
                {{ t('home.primaryCta') }}
              </router-link>
              <button type="button" :class="secondaryButton" @click="scrollToPractices">
                {{ t('home.secondaryCta') }}
              </button>
            </div>
          </div>

          <figure class="lg:col-span-6">
            <div class="overflow-hidden rounded border border-black dark:border-gray-700">
              <img
                :src="heroPhoto"
                :alt="t('home.heroAlt')"
                class="aspect-[4/3] w-full object-cover lg:aspect-[3/2]"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            <figcaption class="mt-3 text-xs text-gray-500 dark:text-gray-400">
              {{ t('home.heroCaption') }}
            </figcaption>
          </figure>
        </div>
      </section>

      <!-- Repères -->
      <section class="border-y border-black/15 dark:border-white/15" :aria-label="t('home.whatTitle')">
        <dl class="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="md:border-l md:border-black/15 md:pl-6 md:first:border-l-0 md:first:pl-0 md:dark:border-white/15"
          >
            <dt class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-200">
              {{ t(stat.value) }}
            </dt>
            <dd class="mt-1 text-sm leading-snug text-gray-700 dark:text-gray-400">
              {{ t(stat.label) }}
            </dd>
          </div>
        </dl>
      </section>

      <!-- Le club -->
      <section class="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="what-title">
        <SectionHeading
          id="what-title"
          :eyebrow="t('home.clubEyebrow')"
          :title="t('home.whatTitle')"
          :lead="t('home.whatLead')"
        />

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div
            v-for="fact in facts"
            :key="fact.title"
            class="rounded border border-black p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <component :is="fact.icon" class="h-6 w-6 text-sky-700 dark:text-sky-400" aria-hidden="true" />
            <h3 class="mt-4 font-semibold dark:text-gray-200">{{ t(fact.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {{ t(fact.text) }}
            </p>
          </div>
        </div>
      </section>

      <!-- Les pratiques -->
      <section
        id="practices"
        class="scroll-mt-4 bg-gray-50 py-16 lg:py-20 dark:bg-gray-800/30"
        aria-labelledby="practices-title"
      >
        <div class="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            id="practices-title"
            :eyebrow="t('home.practicesEyebrow')"
            :title="t('activities')"
            :lead="t('home.practicesLead')"
          />

          <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      <!-- Commencer -->
      <section class="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="start-title">
        <SectionHeading
          id="start-title"
          :eyebrow="t('home.startEyebrow')"
          :title="t('home.startTitle')"
          :lead="t('home.startLead')"
        />

        <ol class="mt-10 grid gap-6 md:grid-cols-3">
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="rounded border border-black p-5 dark:border-gray-700 dark:bg-gray-800"
          >
            <p
              class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-3 font-semibold dark:text-gray-200">{{ t(step.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {{ t(step.text) }}
            </p>
          </li>
        </ol>

        <div
          class="mt-10 flex flex-col items-start gap-5 rounded border border-black p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-gray-700 dark:bg-gray-800"
        >
          <div>
            <p class="text-lg font-semibold dark:text-gray-200">{{ t('home.ctaTitle') }}</p>
            <p class="mt-1 text-sm text-gray-700 dark:text-gray-400">{{ t('home.ctaText') }}</p>
          </div>
          <div class="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <router-link to="/join" :class="primaryButton">
              {{ t('home.primaryCta') }}
            </router-link>
            <a
              href="https://www.instagram.com/usc_lausanne/"
              target="_blank"
              rel="noopener noreferrer"
              :class="secondaryButton"
            >
              <Instagram class="mr-2 h-4 w-4" aria-hidden="true" />
              {{ t('home.followUsOnInstagram') }}
            </a>
          </div>
        </div>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Users, Waves, UserRound, Instagram } from 'lucide-vue-next'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import PracticeCard from '@/components/home/PracticeCard.vue'
import SectionHeading from '@/components/home/SectionHeading.vue'
import heroPhoto from '@/assets/home_photo.jpeg'
import photo1 from '@/assets/photo_index_1.jpeg'
import photo2 from '@/assets/photo_index_2.jpeg'
import photo3 from '@/assets/photo_index_3.jpeg'
import photo4 from '@/assets/photo_index_4.jpeg'

const { t } = useI18n()

const primaryButton =
  'inline-flex items-center justify-center rounded border border-black bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-gray-200 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white dark:focus-visible:outline-gray-200'

const secondaryButton =
  'inline-flex items-center justify-center rounded border border-black px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:outline-gray-200'

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

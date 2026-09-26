<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section>
        <h1 class="page-title">{{ $t('history.title') }}</h1>
        <p class="page-lead mt-4">{{ $t('history.paragraph1') }}</p>
        <p class="page-lead mt-4">{{ $t('history.paragraph2') }}</p>
      </section>

      <section class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14" aria-labelledby="year-title">
        <div class="lg:col-span-6">
          <h2 id="year-title" class="section-title">{{ $t('history.year2024_title') }}</h2>
          <p class="body-text mt-3 italic">{{ $t('history.year2024_members') }}</p>
        </div>
        <img
          :src="committeePhoto"
          alt="Comité 2024"
          class="photo h-auto w-full lg:col-span-6"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section aria-labelledby="events-title">
        <h2 id="events-title" class="section-title">{{ $t('history.history_events_title') }}</h2>
        <p class="section-lead mt-3">{{ $t('history.history_events_intro') }}</p>

        <ul class="mt-8 space-y-4">
          <li v-for="event in historyEvents" :key="event.date" class="card">
            <p class="meta-text">{{ event.date }}</p>
            <h3 class="mt-1 font-semibold dark:text-gray-200">{{ event.title }}</h3>
            <p class="body-text mt-2 text-sm">{{ event.desc }}</p>
          </li>
        </ul>

        <p v-if="!historyEvents.length" class="body-text mt-8 text-center italic">
          {{ $t('history.noEvents') }}
        </p>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { i18n } from '@/i18n'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import committeePhoto from '@/assets/home_photo.jpeg'

const { locale } = useI18n({ useScope: 'global' })

const historyEvents = computed(() => {
  const currentMessages = i18n.global.getLocaleMessage(locale.value)
  return currentMessages.history?.events || []
})
</script>

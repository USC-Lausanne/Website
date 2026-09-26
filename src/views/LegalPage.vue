<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-200">
    <HeaderPage />

    <main class="grow w-full max-w-3xl mx-auto px-6 py-12 space-y-8">
      <header class="space-y-3">
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-gray-100">{{ t(`${base}.title`) }}</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">{{ t(`${base}.intro`) }}</p>
      </header>

      <aside
        v-if="gaps.length"
        class="rounded-xl border border-amber-500 bg-amber-50 p-5 space-y-3 dark:border-amber-400 dark:bg-gray-800"
      >
        <h2 class="text-lg font-semibold text-amber-950 dark:text-amber-200">{{ t(`${base}.gapsTitle`) }}</h2>
        <ul class="list-disc pl-5 space-y-1 text-amber-950 dark:text-amber-100">
          <li v-for="(gap, index) in gaps" :key="index" class="font-medium">{{ gap }}</li>
        </ul>
        <p v-if="gapsNote" class="text-sm text-amber-950/90 dark:text-amber-100/90">{{ gapsNote }}</p>
      </aside>

      <section
        v-for="(section, index) in sections"
        :key="index"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-3"
      >
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ section.title }}</h2>
        <p
          v-for="(paragraph, paragraphIndex) in section.paragraphs"
          :key="paragraphIndex"
          class="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          {{ paragraph }}
        </p>
        <ul v-if="section.links.length" class="space-y-2 pt-1">
          <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <router-link
              v-if="link.to"
              :to="link.to"
              class="text-sky-700 dark:text-sky-400 underline underline-offset-2 hover:text-sky-800 dark:hover:text-sky-300"
            >
              {{ link.label }}
            </router-link>
            <a
              v-else
              :href="link.href"
              class="text-sky-700 dark:text-sky-400 underline underline-offset-2 hover:text-sky-800 dark:hover:text-sky-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

const route = useRoute()
const { t, tm, rt, locale } = useI18n()

const base = computed(() => `legal.${route.meta.legalPage}`)

function asList(value) {
  return Array.isArray(value) ? value : []
}

function textOf(value) {
  if (typeof value === 'string') return value
  if (value && typeof value === 'object') return rt(value)
  return ''
}

const gaps = computed(() => {
  locale.value
  return asList(tm(`${base.value}.gaps`)).map(textOf).filter(Boolean)
})

const gapsNote = computed(() => {
  locale.value
  const note = t(`${base.value}.gapsNote`)
  if (!note || note === `${base.value}.gapsNote`) return ''
  return note
})

const sections = computed(() => {
  locale.value
  return asList(tm(`${base.value}.sections`)).map((section) => ({
    title: textOf(section?.title),
    paragraphs: asList(section?.paragraphs).map(textOf).filter(Boolean),
    links: asList(section?.links)
      .map((link) => ({
        label: textOf(link?.label),
        to: textOf(link?.to),
        href: textOf(link?.href),
      }))
      .filter((link) => link.label && (link.to || link.href)),
  }))
})
</script>

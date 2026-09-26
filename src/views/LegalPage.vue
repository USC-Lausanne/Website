<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main max-w-3xl space-y-10">
      <header>
        <h1 class="page-title">{{ t(`${base}.title`) }}</h1>
        <p class="page-lead mt-4">{{ t(`${base}.intro`) }}</p>
      </header>

      <aside
        v-if="gaps.length"
        class="rounded-lg border border-amber-300 bg-amber-50 p-5 dark:border-amber-500/40 dark:bg-amber-500/10"
      >
        <h2 class="font-semibold text-amber-900 dark:text-amber-200">{{ t(`${base}.gapsTitle`) }}</h2>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-900 dark:text-amber-100">
          <li v-for="(gap, index) in gaps" :key="index">{{ gap }}</li>
        </ul>
        <p v-if="gapsNote" class="mt-3 text-sm text-amber-900/90 dark:text-amber-100/90">{{ gapsNote }}</p>
      </aside>

      <section v-for="(section, index) in sections" :key="index">
        <h2 class="section-title">{{ section.title }}</h2>
        <p
          v-for="(paragraph, paragraphIndex) in section.paragraphs"
          :key="paragraphIndex"
          class="body-text mt-3"
        >
          {{ paragraph }}
        </p>
        <ul v-if="section.links.length" class="mt-4 space-y-2">
          <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
            <router-link v-if="link.to" :to="link.to" class="link-accent underline underline-offset-2">
              {{ link.label }}
            </router-link>
            <a
              v-else
              :href="link.href"
              class="link-accent underline underline-offset-2"
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

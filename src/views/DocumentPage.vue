<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section>
        <h1 class="page-title">{{ t('documents.title') }}</h1>
        <p class="page-lead mt-4">{{ t('documents.subtitle') }}</p>
      </section>

      <section :aria-label="t('documents.title')">
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <li v-for="doc in documents" :key="doc.file" class="card flex flex-col">
            <FileDown class="h-6 w-6 text-gray-400" aria-hidden="true" />
            <h2 class="mt-3 font-semibold dark:text-gray-200">{{ t(doc.title) }}</h2>
            <a :href="`./${doc.file}`" :download="doc.file" class="btn btn-secondary mt-6 self-start">
              {{ t('documents.download') }}
            </a>
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
import { FileDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const documents = [
  { title: 'documents.status', file: 'Status.pdf' },
  { title: 'documents.disclaimer', file: 'USCLausanneDecharge.pdf' },
]
</script>

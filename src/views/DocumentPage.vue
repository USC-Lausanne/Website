<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-200">
    <!-- Header -->
    <HeaderPage />

    <!-- Main content -->
    <main class="grow flex flex-col items-center py-16 px-6 max-w-5xl mx-auto w-full space-y-20 dark:bg-gray-900">
      <div class="text-center space-y-3">
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-gray-200">{{ t('documents.title') }}</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">{{ t('documents.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800 hover:shadow-xl transition-shadow p-6 flex flex-col">
          <div class="flex items-center space-x-4 mb-4">
            <FileDown class="w-10 h-10 text-sky-600" />
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-200">{{ t('documents.status') }}</h2>
          </div>
          <a
            href="/Website/src/documents/Status.pdf"
            download="Status.pdf"
            class="mt-6 inline-flex items-center justify-center rounded-md bg-sky-600 dark:bg-sky-700 px-5 py-3 text-white font-medium hover:bg-sky-700 dark:hover:bg-sky-800 transition"
            aria-label="Download Status PDF"
          >
            Download
          </a>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800 hover:shadow-xl transition-shadow p-6 flex flex-col">
          <div class="flex items-center space-x-4 mb-4">
            <FileDown class="w-10 h-10 text-sky-600" />
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-200">{{ t('documents.disclaimer') }}</h2>
          </div>
          <a
            href="/Website/src/documents/USCLausanneDecharge.pdf"
            download="USCLausanneDecharge.pdf"
            class="mt-6 inline-flex items-center justify-center rounded-md bg-sky-600 dark:bg-sky-700 px-5 py-3 text-white font-medium hover:bg-sky-700 dark:hover:bg-sky-800 transition"
            aria-label="Download Disclaimer PDF"
          >
            Download
          </a>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { FileDown } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
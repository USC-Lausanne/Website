<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <HeaderPage />

    <!-- Main content -->
    <main class="flex-grow flex flex-col items-center py-16 px-4 space-y-10">

      <div class="text-center space-y-2">
        <h1 class="text-4xl font-bold">{{ $t('documents.title') }}</h1>
        <p class="text-gray-600">{{ $t('documents.subtitle') }}</p>
      </div>

      <div class="w-full max-w-md flex flex-col gap-6">
        <!-- Status document -->
        <a
          href="/src/documents/Status.pdf"
          download="Status.pdf"
          class="flex items-center justify-between p-4 bg-white rounded-lg border shadow hover:shadow-lg transition"
        >
          <div class="flex items-center gap-4">
            <FileDown class="w-8 h-8 text-sky-500" />
            <span class="font-medium text-gray-800">{{ $t('documents.status') }}</span>
          </div>
          <span class="text-sky-500 font-semibold">Download</span>
        </a>

        <!-- Décharge document -->
        <a
          href="/src/documents/USCLausanneDecharge.pdf"
          download="USCLausanneDecharge.pdf"
          class="flex items-center justify-between p-4 bg-white rounded-lg border shadow hover:shadow-lg transition"
        >
          <div class="flex items-center gap-4">
            <FileDown class="w-8 h-8 text-sky-500" />
            <span class="font-medium text-gray-800">{{ $t('documents.disclaimer') }}</span>
          </div>
          <span class="text-sky-500 font-semibold">Download</span>
        </a>
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
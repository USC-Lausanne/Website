<template>
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <HeaderPage />
  
      <main class="flex-grow flex flex-col items-center py-12 px-4 space-y-6">
  
        <div class="max-w-4xl w-full flex flex-col space-y-2">
          <h1 class="text-3xl font-bold">{{ $t('documents.title') }}</h1>
          <p class="text-gray-700">{{ $t('documents.subtitle') }}</p>
        </div>
  
        <div class="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="doc in docs"
            :key="doc.name"
            class="flex items-center p-4 bg-white rounded-lg border shadow hover:shadow-lg transition cursor-pointer"
          >
            <FileDown class="w-10 h-10 mr-4" ></FileDown>
            <a
              :href="doc.url"
              :download="doc.name"
              class="text-gray-800 font-medium hover:text-sky-600 transition"
            >
              {{ doc.displayName }}
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
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { FileDown } from 'lucide-vue-next';
  
  // i18n
  const { t } = useI18n()
  
  // Ici tu peux remplir la liste des documents manuellement ou via un fetch depuis le serveur
  const docs = ref([
    { name: 'Status', displayName: 'Status', url: '/src/documents/Status.pdf' },
    { name: 'USC Lausanne Decharge (FR/EN)', displayName: 'Decharge (FR/EN)', url: '/src/documents/USC Lausanne Decharge (FR/EN).pdf' },
  ])
  </script>
  
  <style scoped>
  /* Hover effect similaire à ton .box_select */
  a:hover {
    opacity: 1;
  }
  </style>
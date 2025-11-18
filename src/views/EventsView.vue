<template>
    <div class="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-200">
      <HeaderPage />
  
      <main class="flex-1 flex flex-col items-center p-4 space-y-8 dark:bg-gray-900">
        <!-- Title & Description -->
        <div class="flex flex-col md:flex-row items-center md:space-x-8">
          <div class="flex flex-col gap-4">
            <h1 class="text-3xl md:text-4xl font-bold dark:text-gray-200">{{ $t('eventsPage.title') }}</h1>
            <p class="max-w-xl text-gray-700 dark:text-gray-400">
              {{ $t('eventsPage.intro') }}
            </p>
          </div>
        </div>
      </main>
  
      <FooterPage />
    </div>
  </template>
  
  <script setup>
  import HeaderPage from "@/components/Header.vue";
  import FooterPage from "@/components/Footer.vue";
  import { useI18n } from "vue-i18n";
  
  const { t } = useI18n();
  </script>
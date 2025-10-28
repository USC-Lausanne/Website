<template>
    <div class="min-h-screen flex flex-col bg-white">
      <HeaderPage />
  
      <main class="flex flex-col items-center p-6 space-y-18">
        <div class="max-w-4xl flex flex-col items-start space-y-4">
          <h1 class="text-3xl font-bold">{{ $t('history.title') }}</h1>
          <p class="text-gray-700">{{ $t('history.paragraph1') }}</p>
          <p class="text-gray-700">{{ $t('history.paragraph2') }}</p>
        </div>
  
        <div class="flex flex-col md:flex-row items-start gap-6 max-w-4xl">
          <div class="flex flex-col space-y-2">
            <h2 class="text-2xl font-semibold">{{ $t('history.year2024_title') }}</h2>
            <p class="text-gray-700 italic">{{ $t('history.year2024_members') }}</p>
          </div>
          <img src="/src/assets/home_photo.jpeg" alt="Comite 2024" class="rounded-md w-80 h-auto shadow" />
        </div>
  
        <section class="max-w-4xl">
          <h2 class="text-2xl font-bold mb-4">{{ $t('history.history_events_title') }}</h2>
          <p class="text-gray-700 mb-6">{{ $t('history.history_events_intro') }}</p>

          <!-- ✅ Affichage des événements -->
          <ul class="space-y-4">
            <li v-for="event in historyEvents" :key="event.date" class="border border-gray-300 p-4 rounded">
              <h3 class="font-semibold">{{ event.title }}</h3>
              <p class="text-sm text-gray-500">{{ event.date }}</p>
              <p class="mt-2">{{ event.desc }}</p>
            </li>
          </ul>

          <!-- ✅ Message si aucun événement -->
          <p v-if="!historyEvents.length" class="text-gray-400 italic text-center mt-8">
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
  import { i18n } from '@/i18n' // importer ton i18n
  import HeaderPage from '@/components/Header.vue'
  import FooterPage from '@/components/Footer.vue'

  const { locale } = useI18n({ useScope: 'global' })

  // ✅ Accès direct aux messages via l’instance i18n
  const historyEvents = computed(() => {
    const currentMessages = i18n.global.getLocaleMessage(locale.value)
    console.log("locale actuelle:", locale.value)
    console.log("history raw:", currentMessages.history?.events)
    return currentMessages.history?.events || []
  })
</script>
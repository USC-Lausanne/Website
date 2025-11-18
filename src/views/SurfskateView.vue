<template>
    <div class="min-h-screen bg-white flex flex-col dark:bg-gray-900 dark:text-gray-200">
      <HeaderPage />
  
      <div class="flex flex-col m-12 gap-8 items-center">

        <div class="max-w-5xl space-y-8">
    
          <h1 class="text-3xl md:text-4xl font-bold w-full dark:text-gray-200">Surf-Skate</h1>
    
          <p class="max-w-3xl text-gray-700 text-lg leading-relaxed dark:text-gray-400">
              {{ $t('surfskate.paragraph1') }}
          </p>
    
          <div class="flex flex-col md:flex-row items-center gap-8">
              <p class="text-gray-700 text-lg max-w-xl leading-relaxed dark:text-gray-400">
                  {{ $t('surfskate.paragraph2') }}
              </p>
            <img src="/src/assets/photo14.jpeg" alt="Surfskate" class="w-80 rounded-xl shadow-lg dark:shadow-gray-800" />
          </div>
        </div>
      </div>
  
      <FooterPage />
    </div>
</template>
  
<script setup>
    import HeaderPage from "@/components/Header.vue";
    import FooterPage from '@/components/Footer.vue'
    import { useI18n } from 'vue-i18n'
    
    const { locale } = useI18n()
    
    function switchLanguage() {
        locale.value = locale.value === 'fr' ? 'en' : 'fr'
    }
</script>
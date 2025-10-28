<template>
    <HeaderPage />

    <div class="flex flex-col items-center p-6 space-y-8 h-screen">
  
      <a href="https://www.instagram.com/usc_lausanne" target="_blank">
        <button
          class="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors"
        >
          {{ $t('instagram.join') }}
        </button>
      </a>
    </div>

    <FooterPage />
</template>
  
<script setup>
    import HeaderPage from "@/components/Header.vue";
    import FooterPage from "@/components/Footer.vue";
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>
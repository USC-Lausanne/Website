<template>
  <footer class="bg-white mt-8 py-6">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 px-6">
      
      <!-- Logo -->
      <a href="https://victor-pcll.github.io/Studio-Bernoulli/#" class="flex-shrink-0">
        <img src="/src/assets/logo_light.png" alt="logo Studio" class="w-32 hover:opacity-80 transition-opacity" />
      </a>

      <!-- Colonnes de liens -->
      <div class="flex flex-wrap gap-8">
        <div class="flex flex-col gap-2">
          <a class="menu_title text-gray-800 hover:text-sky-600 transition-colors"
             href="/contact">{{ $t('footer.contact') }}</a>
          <a class="menu_title text-gray-800 hover:text-sky-600 transition-colors"
             href="/network">{{ $t('footer.networks') }}</a>
        </div>
        <div class="flex flex-col gap-2">
          <a class="menu_title text-gray-800 hover:text-sky-600 transition-colors"
             href="/team">{{ $t('footer.team') }}</a>
          <a class="menu_title text-gray-800 hover:text-sky-600 transition-colors"
             href="/document">{{ $t('footer.documents') }}</a>
        </div>
        <div class="flex flex-col gap-2">
          <a class="menu_title text-gray-800 hover:text-sky-600 transition-colors"
             href="/phototeque">{{ $t('footer.phototheque') }}</a>
          <a class="menu_title text-gray-800 hover:text-sky-600 transition-colors"
             href="/">{{ $t('footer.history') }}</a>
        </div>
      </div>

      <!-- Bouton de changement de langue -->
      <button
        @click="toggleLanguage"
        class="mb-4 bg-sky-500 text-white px-4 py-2 rounded-full shadow hover:bg-sky-600 transition"
      >
        {{ currentLang === 'fr' ? 'Français' : 'English' }}
      </button>

    </div>
  </footer>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()
  const { t } = useI18n();

  // Pour que le bouton bascule la langue sur tout le site
  const currentLang = locale

  function toggleLanguage() {
    locale.value = locale.value === 'fr' ? 'en' : 'fr'
  }
</script>
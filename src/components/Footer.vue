<template>
  <footer class="bg-white mt-16 py-6">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 px-6">
      
      <!-- Logo -->
      <a
        href="https://victor-pcll.github.io/Studio-Bernoulli/#"
        class="flex-shrink-0"
      >
        <img
          src="/src/assets/logo_light.png"
          alt="logo Studio"
          class="w-32 hover:opacity-80 transition-opacity"
        />
      </a>

      <!-- Bouton de changement de langue -->
      <button
        @click="toggleLanguage"
        class="mb-4 bg-sky-500 text-white px-4 py-2 rounded-full shadow hover:bg-sky-600 transition"
      >
        {{ currentLabel }}
      </button>

    </div>
  </footer>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

// On force l’accès au scope global pour que locale soit réactive
const { locale } = useI18n({ useScope: 'global' })

// 🔹 Charger la langue sauvegardée au démarrage
const savedLang = localStorage.getItem('locale')
if (savedLang) locale.value = savedLang

// 🔹 Texte du bouton (réactif)
const currentLabel = computed(() => {
  // ici on peut aussi utiliser des traductions si tu veux : $t('footer.languageButton')
  return locale.value === 'fr' ? 'Français' : 'English'
})

// 🔹 Basculer la langue et sauvegarder
function toggleLanguage() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('locale', locale.value)
}

// 🔹 Synchronisation automatique (utile si d’autres composants changent la langue)
watchEffect(() => {
  localStorage.setItem('locale', locale.value)
})
</script>
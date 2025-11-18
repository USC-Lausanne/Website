<template>
  <footer class="bg-white dark:bg-gray-900 py-6">
    <div class="max-w mx-auto flex flex-wrap justify-between gap-8 px-10 items-center">
      
      <!-- Logo and copyright -->
      <a href="https://victor-pcll.github.io/Studio-Bernoulli/#" class="shrink-0 flex flex-col items-start">
        <img
          v-if="isDarkTheme"
          :src="logoDark"
          alt="logo Studio"
          class="w-32 hover:opacity-80 transition-opacity"
        />
        <img
          v-else
          :src="logoLight"
          alt="logo Studio"
          class="w-32 hover:opacity-80 transition-opacity"
        />
      </a>

      <span class="mt-2 text-gray-700 dark:text-gray-300 text-sm">Copyright © 2025 USC Lausanne</span>

    </div>
  </footer>
</template>

<script setup>
import { computed, ref, watchEffect, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import logoLight from '/src/assets/logo_light.png'
import logoDark from '/src/assets/logo_dark.png'
import { Languages } from 'lucide-vue-next'

// On force l’accès au scope global pour que locale soit réactive
const { locale } = useI18n({ useScope: 'global' })

// 🔹 Charger la langue sauvegardée au démarrage
const savedLang = localStorage.getItem('locale')
if (savedLang) locale.value = savedLang

// 🔹 Basculer la langue et sauvegarder
function toggleLanguage() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('locale', locale.value)
}

// 🔹 Synchronisation automatique (utile si d’autres composants changent la langue)
watchEffect(() => {
  localStorage.setItem('locale', locale.value)
})

// 🔹 Reactive dark theme detection using MutationObserver
const isDarkTheme = ref(false)

let observer = null
onMounted(() => {
  // Initialize isDarkTheme based on current class list on <html>
  isDarkTheme.value = document.documentElement.classList.contains('dark')

  // Observe changes to the class attribute on <html>
  observer = new MutationObserver(() => {
    isDarkTheme.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>
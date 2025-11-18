<template>
  <header class="bg-white dark:bg-gray-900">
    <div class="flex justify-between items-center px-8 py-4">
      <!-- Logo -->
      <router-link to="/" class="shrink-0">
        <img :src="logo" alt="logo USC Lausanne" class="h-20 w-auto hover:opacity-80 transition-opacity" />
      </router-link>

      <!-- Hamburger Button (Mobile) -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none" aria-label="Toggle menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Menu (Desktop) -->
      <nav class="hidden md:flex gap-8 items-center">
        <router-link
          v-for="item in menuItems"
          :key="item.href"
          :to="item.href"
          class="font-semibold text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          :data-fr="item.fr"
          :data-en="item.en"
        >
          {{ item.en }}
        </router-link>
        <!-- Dark Mode and Language Toggle Buttons Group -->
        <div class="ml-4 flex rounded-xl bg-gray-200 dark:bg-gray-700">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-l-xl text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-colors"
            :aria-pressed="isDarkMode.toString()"
            aria-label="Toggle dark mode"
          >
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.485-9h1M3.515 12h1m12.02 5.364l.707.707M6.343 6.343l.707.707m12.02 0l-.707.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
            </svg>
          </button>
          <button
            @click="toggleLanguage"
            class="p-2 rounded-r-xl text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-colors flex items-center"
            aria-label="Toggle language"
          >
            <Languages class="h-6 w-6" />
          </button>
        </div>
      </nav>
    </div>

    <!-- Menu (Mobile) -->
    <nav v-if="isMenuOpen" class="md:hidden px-8 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-900">
      <router-link
        v-for="item in menuItems"
        :key="item.href"
        :to="item.href"
        class="font-semibold text-gray-800 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        :data-fr="item.fr"
        :data-en="item.en"
        @click="isMenuOpen = false"
      >
        {{ item.en }}
      </router-link>
      <!-- Dark Mode and Language Toggle Buttons Group (Mobile) -->
      <div class="mt-2 flex rounded-xl bg-gray-200 dark:bg-gray-700 justify-center w-fit">
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-l-xl text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-colors"
          :aria-pressed="isDarkMode.toString()"
          aria-label="Toggle dark mode"
        >
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.485-9h1M3.515 12h1m12.02 5.364l.707.707M6.343 6.343l.707.707m12.02 0l-.707.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
          </svg>
        </button>
        <button
          @click="toggleLanguage"
          class="p-2 rounded-r-xl text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition-colors flex items-center"
          aria-label="Toggle language"
        >
          <Languages class="h-6 w-6" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next'
import logo from '@/assets/logo.png'

export default {
  name: "Header",
  components: {
    Languages,
  },
  setup() {
    const isMenuOpen = ref(false)
    const isDarkMode = ref(false)

    const menuItems = [
      { href: "/team", fr: "équipe", en: "team" },
      { href: "/history", fr: "histoire", en: "history" },
      { href: "/gallery", fr: "photothèque", en: "gallery" },
      { href: "/document", fr: "documents", en: "documents" },
      { href: "/contact", fr: "contact", en: "contact" },
      { href: "/join", fr: "join", en: "join" },
    ]

    const { locale } = useI18n()

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
    }

    const toggleLanguage = () => {
      locale.value = locale.value === 'en' ? 'fr' : 'en'
    }

    onMounted(() => {
      const saved = localStorage.getItem('darkMode')
      if (saved === 'true') {
        isDarkMode.value = true
        document.documentElement.classList.add('dark')
      } else {
        isDarkMode.value = false
        document.documentElement.classList.remove('dark')
      }
    })

    return {
      logo,
      isMenuOpen,
      menuItems,
      isDarkMode,
      toggleDarkMode,
      toggleLanguage,
      locale,
    }
  },
}
</script>
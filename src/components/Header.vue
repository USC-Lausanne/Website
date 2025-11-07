<template>
  <header class="bg-white mb-8">
    <div class="flex justify-between items-center px-8 py-4">
      <!-- Logo -->
      <router-link to="/" class="shrink-0">
        <img :src="logo" alt="logo USC Lausanne" class="h-20 w-auto hover:opacity-80 transition-opacity" />
      </router-link>

      <!-- Hamburger Button (Mobile) -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none" aria-label="Toggle menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Menu (Desktop) -->
      <nav class="hidden md:flex gap-8">
        <router-link
          v-for="item in menuItems"
          :key="item.href"
          :to="item.href"
          class="font-semibold text-gray-800 hover:text-sky-600 transition-colors"
          :data-fr="item.fr"
          :data-en="item.en"
        >
          {{ item.en }}
        </router-link>
      </nav>
    </div>

    <!-- Menu (Mobile) -->
    <nav v-if="isMenuOpen" class="md:hidden px-8 pb-4 flex flex-col gap-4 bg-white">
      <router-link
        v-for="item in menuItems"
        :key="item.href"
        :to="item.href"
        class="font-semibold text-gray-800 hover:text-sky-600 transition-colors"
        :data-fr="item.fr"
        :data-en="item.en"
        @click="isMenuOpen = false"
      >
        {{ item.en }}
      </router-link>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue'
import logo from '@/assets/logo.jpeg'

export default {
  name: "Header",
  setup() {
    const isMenuOpen = ref(false)

    const menuItems = [
      { href: "/team", fr: "équipe", en: "team" },
      { href: "/history", fr: "histoire", en: "history" },
      { href: "/gallery", fr: "photothèque", en: "gallery" },
      { href: "/document", fr: "documents", en: "documents" },
      { href: "/contact", fr: "contact", en: "contact" },
      { href: "/join", fr: "join", en: "join" },
    ]

    return {
      logo,
      isMenuOpen,
      menuItems,
    }
  },
}
</script>
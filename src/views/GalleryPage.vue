<template>
  <div class="flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-200">
    <!-- Header -->
    <HeaderPage />

    <!-- Hero Gallery -->
    <section class="py-16 px-4 max-w-6xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">{{ $t('gallery.title') }}</h1>
      <p class="text-gray-600 mb-12 dark:text-gray-400">
        {{ $t('gallery.subtitle') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 dark:bg-gray-900">
        <img
          v-for="(photo, idx) in featuredPhotos"
          :key="idx"
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform dark:shadow-gray-800"
        />
      </div>

      <div class="flex justify-center gap-6">
        <a
          v-for="(link, idx) in lightroomLinks"
          :key="idx"
          :href="link.url"
          target="_blank"
          class="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition dark:bg-sky-700 dark:hover:bg-sky-800 dark:text-white"
        >
          {{ link.label }}
        </a>
      </div>
    </section>

    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

// Photos en mise en avant
import photo1 from '@/assets/phototeque/slide1.jpeg'
import photo2 from '@/assets/phototeque/slide2.jpeg'
import photo3 from '@/assets/phototeque/slide3.jpeg'

import { useI18n } from "vue-i18n";
const { t } = useI18n();

// Tableau des photos mises en avant
const featuredPhotos = [
  { src: photo1, alt: "Photo 1" },
  { src: photo2, alt: "Photo 2" },
  { src: photo3, alt: "Photo 3" },
]

// Liens vers les dossiers Lightroom
const lightroomLinks = [
  { label: "Dossier Hiver 2024", url: "https://adobe.ly/4868YUd" },
  { label: "Dossier Printemps 2024", url: "https://adobe.ly/47Lbwaa" },
]
</script>

<style scoped>
/* On garde un effet subtil au hover */
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
</style>
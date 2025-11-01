<template>
  <div class="flex flex-col min-h-screen">
    <!-- HeaderPage -->
    <HeaderPage />

    <!-- Galerie d'images -->
    <section class="py-12 px-4 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">
        {{ $t('gallery.title') }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img
          v-for="(image, idx) in images"
          :key="idx"
          :src="image"
          alt="Gallery"
          class="w-full h-64 object-cover rounded-lg shadow-md gallery-img"
        />
      </div>
    </section>

    <!-- Semesters Section -->
    <section class="py-12 px-4 max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4 text-gray-700">
            {{ $t('gallery.winterSemester2024') }}
          </h3>
          <p class="text-gray-600 text-center">
            <!-- Ajoutez ici la description du semestre d'hiver -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4 text-gray-700">
            {{ $t('gallery.springSemester2024') }}
          </h3>
          <p class="text-gray-600 text-center">
            <!-- Ajoutez ici la description du semestre de printemps -->
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </div>
      </div>
    </section>

    <!-- FooterPage -->
    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

// Importez vos images statiques
import photo1 from '@/assets/phototeque/slide1.jpg'
import photo2 from '@/assets/phototeque/slide2.jpg'
import photo3 from '@/assets/phototeque/slide3.jpg'
import photo4 from '@/assets/phototeque/slide4.jpg'

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
]
</script>

<style scoped>
.gallery-img {
  transition: transform 0.2s;
}
.gallery-img:hover {
  transform: scale(1.03);
}
</style>
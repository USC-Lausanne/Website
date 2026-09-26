<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section>
        <h1 class="page-title">{{ $t('gallery.title') }}</h1>
        <p class="page-lead mt-4">{{ $t('gallery.subtitle') }}</p>
      </section>

      <section :aria-label="$t('gallery.title')">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <img
            v-for="(photo, idx) in featuredPhotos"
            :key="idx"
            :src="photo.src"
            :alt="photo.alt"
            class="photo h-80 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            v-for="(link, idx) in lightroomLinks"
            :key="idx"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
          >
            {{ link.label }}
          </a>
        </div>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import photo1 from '@/assets/phototeque/slide1.jpeg'
import photo2 from '@/assets/phototeque/slide2.jpeg'
import photo3 from '@/assets/phototeque/slide3.jpeg'

const featuredPhotos = [
  { src: photo1, alt: 'USC Lausanne' },
  { src: photo2, alt: 'USC Lausanne' },
  { src: photo3, alt: 'USC Lausanne' },
]

const lightroomLinks = [
  { label: 'Dossier Hiver 2024', url: 'https://adobe.ly/4868YUd' },
  { label: 'Dossier Printemps 2024', url: 'https://adobe.ly/47Lbwaa' },
]
</script>

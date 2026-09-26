<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section>
        <h1 class="page-title">Surf-Skate</h1>
        <p class="page-lead mt-6">{{ $t('surfskate.paragraph1') }}</p>
      </section>

      <section class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <p class="body-text lg:col-span-7">{{ $t('surfskate.paragraph2') }}</p>
        <img
          :src="photo"
          alt="Surf-Skate"
          class="photo h-auto w-full object-cover lg:col-span-5 lg:aspect-square"
          loading="lazy"
          decoding="async"
        />
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import photo from '@/assets/photo14.jpeg'
</script>

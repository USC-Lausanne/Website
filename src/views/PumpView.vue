<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-7">
          <h1 class="page-title">Pump Foil</h1>
          <p class="body-text mt-6">{{ $t('pumpFoil') }}</p>
        </div>
        <img
          :src="photo"
          alt="Pump Foil"
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
import photo from '@/assets/photo9.jpeg'
</script>

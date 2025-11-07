<template>
  <HeaderPage />

  <main class="flex flex-col items-center py-14 gap-8">
    <section class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
      <div class="flex-1 space-y-4">
        <h1 class="text-3xl md:text-4xl font-bold">{{ t('welcome') }}</h1>
        <p class="text-gray-700 text-justify">{{ t('intro') }}</p>
        <p class="text-sky-700 font-medium text-lg italic">{{ t('join') }}</p>
      </div>
      <img
        src="/src/assets/home_photo.jpeg"
        alt="USC Poster"
        class="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
        loading="lazy"
      />
    </section>

    <div class="h-16"></div>

    <section class="px-6 max-w-6xl">
      <h2 class="text-3xl font-bold mb-8">{{ t('activities') }}</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <ActivityCard
          v-for="(activity, i) in activities"
          :key="i"
          :title="t(activity.title)"
          :description="t(activity.desc)"
          :image="activity.image"
          :to="activity.to"
        />
      </div>
    </section>

    <div class="h-16"></div>

    <div class="flex justify-center my-20">
      <InstagramButton />
    </div>

  </main>

  <FooterPage />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ActivityCard from '@/components/ActivityCard.vue'
import InstagramButton from '@/components/InstagramButton.vue'
import HeaderPage from "@/components/Header.vue";
import FooterPage from '@/components/Footer.vue'

const { t } = useI18n()

const activities = [
  { title: 'winch.title', desc: 'winch.desc', image: '/Website/assets/photo_index_1.jpeg', to: "/winch" },
  { title: 'pump.title', desc: 'pump.desc', image: '/Website/assets/photo_index_2.jpeg', to: "/pump" },
  { title: 'skate.title', desc: 'skate.desc', image: '/Website/assets/photo_index_3.jpeg', to: "/surfskate" },
  { title: 'events.title', desc: 'events.desc', image: '/Website/assets/photo_index_4.jpeg', to: "/events" }
]
</script>
<template>
  <router-link
    :to="to"
    class="group flex h-full flex-col rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 dark:focus-visible:outline-gray-200"
  >
    <div class="photo overflow-hidden">
      <img
        :src="image"
        alt=""
        loading="lazy"
        decoding="async"
        class="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
      />
    </div>

    <p class="meta-text mt-4 italic">{{ where }}</p>

    <h3 class="mt-1 text-xl font-semibold dark:text-gray-200">{{ title }}</h3>

    <p class="body-text mt-2 text-sm">{{ gloss }}</p>

    <p class="link-accent mt-auto flex items-center gap-1.5 pt-4 text-sm">
      {{ learnLabel }}
      <ArrowRight
        class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
        aria-hidden="true"
      />
    </p>
  </router-link>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  gloss: { type: String, required: true },
  where: { type: String, required: true },
  image: { type: String, required: true },
  to: { type: String, required: true },
  learnLabel: { type: String, required: true },
})
</script>

<template>
  <router-link
    :to="to"
    class="group flex h-full flex-col rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700 dark:focus-visible:outline-sky-400"
  >
    <div class="overflow-hidden rounded-md shadow">
      <img
        :src="image"
        alt=""
        loading="lazy"
        decoding="async"
        class="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
      />
    </div>

    <p class="mt-4 text-sm text-sky-700 italic dark:text-sky-400">{{ where }}</p>

    <h3
      class="mt-1 text-xl font-semibold transition-colors group-hover:text-sky-700 dark:text-gray-200 dark:group-hover:text-sky-400"
    >
      {{ title }}
    </h3>

    <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
      {{ gloss }}
    </p>

    <p class="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-sky-700 dark:text-sky-400">
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

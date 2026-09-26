<template>
  <router-link
    :to="to"
    class="group flex h-full flex-col overflow-hidden rounded border border-black bg-white transition-colors duration-200 hover:border-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-sky-400 dark:focus-visible:outline-sky-400"
  >
    <div class="overflow-hidden">
      <img
        :src="image"
        alt=""
        loading="lazy"
        decoding="async"
        class="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
      />
    </div>

    <div class="flex flex-1 flex-col p-4">
      <p class="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-gray-400">
        {{ where }}
      </p>
      <h3 class="mt-2 text-lg font-semibold dark:text-gray-200">{{ title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
        {{ gloss }}
      </p>
      <p
        class="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-sky-700 dark:text-sky-400"
      >
        {{ learnLabel }}
        <ArrowRight
          class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </p>
    </div>
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

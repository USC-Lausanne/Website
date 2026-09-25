<template>
  <router-link
    :to="to"
    class="flex h-full flex-col items-center rounded border border-black p-4 text-center dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="mb-3 w-full overflow-hidden rounded">
      <img :src="image" :alt="title" class="h-44 w-full object-cover" loading="lazy" />
    </div>
    <p class="text-xl font-bold dark:text-gray-200">{{ indexLabel }}</p>
    <p class="font-semibold dark:text-gray-200">{{ title }}</p>
    <p class="text-gray-700 dark:text-gray-400">{{ where }}</p>
    <p class="mt-2 text-gray-700 dark:text-gray-400">{{ description }}</p>
    <p class="mt-2 text-gray-700 dark:text-gray-400">{{ gloss }}</p>
    <p class="mt-3 font-semibold dark:text-gray-200">{{ learnLabel }}</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  index: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  gloss: { type: String, required: true },
  where: { type: String, required: true },
  image: { type: String, required: true },
  to: { type: String, required: true },
  learnLabel: { type: String, required: true },
})

const indexLabel = computed(() => `${props.index}.`)
</script>

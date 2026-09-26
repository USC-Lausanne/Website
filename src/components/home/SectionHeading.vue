<template>
  <header class="border-t border-black/15 pt-6 dark:border-white/15">
    <p
      v-if="eyebrow"
      class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400"
    >
      {{ eyebrow }}
    </p>
    <h2
      :id="id"
      class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl dark:text-gray-200"
    >
      {{ title }}
    </h2>
    <p v-if="lead" class="mt-3 max-w-2xl text-gray-700 dark:text-gray-400">
      {{ lead }}
    </p>
  </header>
</template>

<script setup>
defineProps({
  id: { type: String, default: undefined },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

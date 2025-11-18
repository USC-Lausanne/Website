<template>
  <RouterLink
    :to="to"
    class="flex flex-col items-center group cursor-pointer transform transition hover:-translate-y-1 dark:hover:-translate-y-1 duration-300 dark:bg-gray-900"
  >
    <div class="relative overflow-hidden rounded-2xl dark:shadow-gray-800 w-full">
      <img
        :src="image"
        :alt="title"
        class="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h3 class="text-2xl font-semibold mt-4 dark:text-gray-200">{{ title }}</h3>
    <p class="text-gray-700 text-sm mt-2 text-justify px-2 dark:text-gray-400">{{ description }}</p>
  </RouterLink>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  to: {
    type: String,
    default: '/', // valeur par défaut, utilisée si `:to` n'est pas passé
  },
})
</script>
<!-- src/components/Header.vue -->
<template>
  <header class="bg-white mb-8">
    <div class="flex justify-between items-center px-8 py-4">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0">
        <img src="/src/assets/logo.jpeg" alt="logo USC Lausanne" class="h-20 w-auto hover:opacity-80 transition-opacity" />
      </a>

      <!-- Menu -->
      <nav class="hidden md:flex gap-8">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="font-semibold text-gray-800 hover:text-sky-600 transition-colors"
          :data-fr="item.fr"
          :data-en="item.en"
        >
          {{ item.en }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuItems: [
        { href: "/team", fr: "équipe", en: "team" },
        { href: "/history", fr: "histoire", en: "history" },
        { href: "/gallery", fr: "photothèque", en: "gallery" },
        { href: "/document", fr: "documents", en: "documents" },
        { href: "/contact", fr: "contact", en: "contact" },
        { href: "/join", fr: "join", en: "join" },
      ],
    };
  },
};
</script>
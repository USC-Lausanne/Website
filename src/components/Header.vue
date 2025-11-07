<!-- src/components/Header.vue -->
<template>
  <header class="bg-white mb-8">
    <div class="flex justify-between items-center px-8 py-4">
      <!-- Logo -->
      <router-link to="/" class="shrink-0">
        <img :src="logo" alt="logo USC Lausanne" class="h-20 w-auto hover:opacity-80 transition-opacity" />
      </router-link>
      
      <!-- Menu -->
      <nav class="hidden md:flex gap-8">
        <router-link
          v-for="item in menuItems"
          :key="item.href"
          :to="item.href"
          class="font-semibold text-gray-800 hover:text-sky-600 transition-colors"
          :data-fr="item.fr"
          :data-en="item.en"
        >
          {{ item.en }}
        </router-link>
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
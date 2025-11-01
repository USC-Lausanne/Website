<template>
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <HeaderPage />
  
      <main class="flex-grow flex flex-col items-center px-6 py-12 space-y-8">
        <!-- Titre de la page -->
        <div class="space-y-2 max-w-5xl w-full">
          <h1 class="text-4xl font-bold">{{ $t('team.title') }}</h1>
          <p class="text-gray-700 text-lg">{{ $t('team.subtitle') }}</p>
        </div>
  
        <!-- Photo d'équipe -->
        <img src="/src/assets/team.jpeg" alt="team photo" class="rounded-xl shadow-lg w-full max-w-5xl" />
  
        <!-- Sections -->
        <div v-for="section in teamSections" :key="section.id" class="w-full max-w-5xl">
          <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t(section.title) }}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              v-for="member in section.members"
              :key="member.name"
              class="flex flex-row items-center bg-white p-4 rounded-lg shadow hover:shadow-lg border transition gap-4"
            >
              <User class="w-16 h-16 text-gray-400" />
              <div class="flex flex-col ">
                <p class="font-semibold w-full">{{ member.name }}</p>
                <p class="text-gray-700 text-sm w-full">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
  
      </main>
  
      <!-- Footer -->
      <FooterPage />
    </div>
</template>
  
<script setup>
  import HeaderPage from "@/components/Header.vue"
  import FooterPage from "@/components/Footer.vue"
  import { useI18n } from "vue-i18n"
  import { User } from 'lucide-vue-next';
  
  // i18n
  const { t } = useI18n()
  
  // Définition des sections et membres
  const teamSections = [
    {
      id: "board",
      title: "team.board",
      members: [
        { name: "Yona F.", role: "VP. Sport"},
        { name: "Anthony V.", role: "Respo Pump Foil" },
        { name: "Kilian P.", role: "Respo Sponsoring" },
      ],
    },
    {
      id: "sports",
      title: "team.sports",
      members: [
        { name: "Madeleine SANGLÉ", role: "Respo Surf-Skate" },
        { name: "Timea CABA", role: "Respo Surf-Skate" },
        { name: "Marc IVERSENC", role: "Respo Pump Foil" },
        { name: "Lina SAJID", role: "Respo Winch" },
        { name: "Noemie PIGEON", role: "Respo Winch" },
      ],
    },
    {
      id: "communication",
      title: "team.communication",
      members: [
        { name: "Aurel DROUART", role: "Respo PHOTO/VIDÉO" },
        { name: "Lina SAGDAL", role: "Respo PHOTO/VIDÉO" },
        { name: "Shanon SWEENEY", role: "Respo PHOTO/VIDÉO" },
      ],
    },
    {
      id: "association",
      title: "team.association",
      members: [
        { name: "Victor P.", role: "Respo IT" },
        { name: "Nouchine B.", role: "Respo Design" },
      ],
    },
    {
      id: "community",
      title: "team.community",
      members: [
        { name: "Manon AGBALÉ", role: "Community manager" },
        { name: "Jo VOLKERT", role: "Community manager" },
      ],
    },
  ]
</script>
  
<style scoped>
  /* Ajustements d'opacité hover comme dans l'ancien CSS */
  img:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
</style>
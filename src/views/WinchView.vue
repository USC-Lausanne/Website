<template>
    <div class="min-h-screen flex flex-col">
      <HeaderPage />
  
      <main class="flex-1 flex flex-col items-center p-4 space-y-8">
        <div class="flex flex-col md:flex-row items-center gap-8 ">
            <div class="flex flex-col gap-8">
                <h1 class="text-3xl md:text-4xl font-bold ">Winch-Surf</h1>
                <p class="max-w-xl text-gray-800">
                    {{ $t('winchSurf') }}
                </p>
            </div>
            <img src="@/assets/photo6.jpg" alt="Photo" class="w-80 rounded-xl shadow-lg" />
        </div>
      </main>
  
      <FooterPage />
    </div>
</template>
  
<script setup>
    import HeaderPage from "@/components/Header.vue";
    import FooterPage from '@/components/Footer.vue'
    import { useI18n } from "vue-i18n"

    const { t } = useI18n()
</script>
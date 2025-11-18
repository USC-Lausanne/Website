<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-200">
    <HeaderPage />

    <!-- Body -->
    <main class="flex-1 flex flex-col items-center p-4 space-y-18 max-w-6xl mx-auto mb-20">
      <!-- Main Title -->
      <div class="flex flex-col space-y-4">
        <h1 class="text-3xl font-bold dark:text-gray-200">{{ $t('becomeMember.title') }}</h1>
        <p class="text-gray-700 dark:text-gray-400">{{ $t('becomeMember.description') }}</p>
      </div>

      <!-- Membership Benefits -->
      <section class="w-full">
        <h2 class="text-2xl font-semibold mb-4 dark:text-gray-200">{{ $t('becomeMember.benefitsTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <Users class="h-6 w-6 mb-3" />
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.benefits[0].title') }}</p>
            <p class=" text-gray-700 dark:text-gray-400">{{ $t('becomeMember.benefits[0].desc') }}</p>
          </div>
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <Calendar class="h-6 w-6 mb-3" />
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.benefits[1].title') }}</p>
            <p class=" text-gray-700 dark:text-gray-400">{{ $t('becomeMember.benefits[1].desc') }}</p>
          </div>
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <Camera class="h-6 w-6 mb-3" />
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.benefits[2].title') }}</p>
            <p class=" text-gray-700 dark:text-gray-400">{{ $t('becomeMember.benefits[2].desc') }}</p>
          </div>
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <Share2 class="h-6 w-6 mb-3" />
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.benefits[3].title') }}</p>
            <p class="text-gray-700 dark:text-gray-400">{{ $t('becomeMember.benefits[3].desc') }}</p>
          </div>
        </div>
      </section>


      <!-- Membership Fees -->
      <section class="w-full mt-8">
        <h2 class="text-2xl font-semibold mb-4 dark:text-gray-200">{{ $t('becomeMember.feesTitle') }}</h2>
        <div class="flex justify-between mb-2 border-b border-gray-300 pb-1">
          <p class="dark:text-gray-400">{{ $t('becomeMember.fees.fullYear.label') }}</p>
          <p class="dark:text-gray-400">{{ $t('becomeMember.fees.fullYear.price') }}</p>
        </div>
        <div class="flex justify-between border-b border-gray-300 pb-1">
          <p class="dark:text-gray-400">{{ $t('becomeMember.fees.halfYear.label') }}</p>
          <p class="dark:text-gray-400">{{ $t('becomeMember.fees.halfYear.price') }}</p>
        </div>
      </section>

      <!-- Steps to Join -->
      <section class="w-full mt-8">
        <h2 class="text-2xl font-semibold mb-4 dark:text-gray-200">{{ $t('becomeMember.stepsTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <p class="text-xl font-bold dark:text-gray-200">1.</p>
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.steps[0].title') }}</p>
            <p class="text-gray-700 dark:text-gray-400" v-html="$t('becomeMember.steps[0].desc')"></p>
          </div>
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <p class="text-xl font-bold dark:text-gray-200">2.</p>
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.steps[1].title') }}</p>
            <p class="text-gray-700 dark:text-gray-400" v-html="$t('becomeMember.steps[1].desc')"></p>
          </div>
          <div class="flex flex-col items-center border border-black p-4 rounded dark:border-gray-700 dark:bg-gray-800">
            <p class="text-xl font-bold dark:text-gray-200">3.</p>
            <p class="font-semibold dark:text-gray-200">{{ $t('becomeMember.steps[2].title') }}</p>
            <p class="text-gray-700 dark:text-gray-400">{{ $t('becomeMember.steps[2].desc') }}</p>
          </div>
        </div>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from "@/components/Header.vue";
import FooterPage from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";
import { Users, Calendar, Camera, Share2 } from "lucide-vue-next";

const { t } = useI18n();
</script>
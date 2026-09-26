<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main">
      <section>
        <h1 class="page-title">{{ $t('becomeMember.title') }}</h1>
        <p class="page-lead mt-4">{{ $t('becomeMember.description') }}</p>
      </section>

      <!-- Avantages -->
      <section aria-labelledby="benefits-title">
        <h2 id="benefits-title" class="section-title">{{ $t('becomeMember.benefitsTitle') }}</h2>
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(benefit, i) in benefits" :key="benefit.icon.name ?? i" class="card">
            <component :is="benefit.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
            <p class="mt-3 font-semibold dark:text-gray-200">
              {{ $t(`becomeMember.benefits[${i}].title`) }}
            </p>
            <p class="body-text mt-2 text-sm">{{ $t(`becomeMember.benefits[${i}].desc`) }}</p>
          </div>
        </div>
      </section>

      <!-- Cotisations -->
      <section aria-labelledby="fees-title">
        <h2 id="fees-title" class="section-title">{{ $t('becomeMember.feesTitle') }}</h2>
        <dl class="mt-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div class="flex flex-wrap justify-between gap-2 py-3">
            <dt class="body-text">{{ $t('becomeMember.fees.fullYear.label') }}</dt>
            <dd class="font-medium dark:text-gray-200">{{ $t('becomeMember.fees.fullYear.price') }}</dd>
          </div>
          <div class="flex flex-wrap justify-between gap-2 py-3">
            <dt class="body-text">{{ $t('becomeMember.fees.halfYear.label') }}</dt>
            <dd class="font-medium dark:text-gray-200">{{ $t('becomeMember.fees.halfYear.price') }}</dd>
          </div>
        </dl>
      </section>

      <!-- Étapes -->
      <section aria-labelledby="steps-title">
        <h2 id="steps-title" class="section-title">{{ $t('becomeMember.stepsTitle') }}</h2>
        <ol class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <li v-for="i in 3" :key="i" class="card">
            <p class="text-2xl leading-none font-bold text-gray-300 dark:text-gray-600" aria-hidden="true">
              {{ i }}.
            </p>
            <p class="mt-3 font-semibold dark:text-gray-200">
              {{ $t(`becomeMember.steps[${i - 1}].title`) }}
            </p>
            <p class="body-text step-desc mt-2 text-sm" v-html="$t(`becomeMember.steps[${i - 1}].desc`)"></p>
          </li>
        </ol>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { Users, Calendar, Camera, Share2 } from 'lucide-vue-next'

const benefits = [{ icon: Users }, { icon: Calendar }, { icon: Camera }, { icon: Share2 }]
</script>

<style scoped>
/* Les descriptions d'étapes portent des <a> écrits dans les traductions. */
.step-desc :deep(a) {
  font-weight: 600;
  text-decoration: underline;
}
</style>

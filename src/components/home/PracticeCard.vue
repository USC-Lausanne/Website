<template>
  <router-link
    :to="to"
    class="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/85 ring-1 ring-[#143044]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e6175] dark:bg-gray-800/90 dark:ring-white/10"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="card-drift h-full w-full object-cover"
        :style="{ '--drift-delay': delay, '--drift-duration': duration }"
        loading="lazy"
      />
    </div>
    <div class="flex flex-1 flex-col gap-3 p-5">
      <p class="text-xs font-semibold tracking-[0.16em] text-[#0e6175] uppercase dark:text-cyan-300">
        {{ indexLabel }} · {{ where }}
      </p>
      <h3 class="text-xl font-semibold text-[#143044] dark:text-gray-100">{{ title }}</h3>
      <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{{ description }}</p>
      <p class="border-l-2 border-[#0e6175]/35 pl-3 text-sm leading-relaxed text-[#143044] dark:border-cyan-700 dark:text-gray-200">
        {{ gloss }}
      </p>
      <span class="mt-auto pt-3 text-sm font-semibold text-[#0e6175] dark:text-cyan-300">
        {{ learnLabel }}
      </span>
    </div>
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
  delay: { type: String, default: '0s' },
  duration: { type: String, default: '18s' },
})

const indexLabel = computed(() => String(props.index).padStart(2, '0'))
</script>

<style scoped>
.card-drift {
  transform: scale(1.08);
  animation: card-drift var(--drift-duration, 18s) ease-in-out infinite alternate;
  animation-delay: var(--drift-delay, 0s);
}

@keyframes card-drift {
  from {
    transform: scale(1.08) translate3d(0, 0, 0);
  }
  to {
    transform: scale(1.14) translate3d(-3%, -2%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-drift {
    animation: none;
  }
}
</style>

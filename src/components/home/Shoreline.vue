<template>
  <div
    class="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden text-[#f4f0e8] md:h-28 dark:text-gray-900"
    aria-hidden="true"
  >
    <div class="shoreline-bob absolute inset-x-0 bottom-0">
      <div class="shoreline-track flex w-[200%]">
        <svg
          v-for="copy in 2"
          :key="copy"
          class="h-20 w-1/2 md:h-28"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C150,64 150,22 300,22 C450,22 450,64 600,64 C750,64 750,102 900,102 C1050,102 1050,64 1200,64 L1200,120 L0,120 Z"
          />
        </svg>
      </div>
    </div>
    <div class="shoreline-ripple absolute bottom-5 left-0 flex w-[200%] text-cyan-100/90 dark:text-cyan-200/70">
      <svg
        v-for="copy in 2"
        :key="`ripple-${copy}`"
        class="h-12 w-1/2"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          d="M0,48 C150,48 150,16 300,16 C450,16 450,48 600,48 C750,48 750,72 900,72 C1050,72 1050,48 1200,48"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.shoreline-bob {
  animation: shoreline-bob 8s ease-in-out infinite;
}

.shoreline-track {
  animation: shoreline-slide 18s linear infinite;
}

.shoreline-ripple {
  animation: shoreline-slide 12s linear infinite;
}

@keyframes shoreline-bob {
  0%,
  100% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-7px);
  }
}

@keyframes shoreline-slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shoreline-bob,
  .shoreline-track,
  .shoreline-ripple {
    animation: none;
  }
}
</style>

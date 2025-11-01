<template>
    <a
      href="https://www.instagram.com/usc_lausanne/"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative inline-flex items-center justify-center gap-3 px-6 py-3 
             rounded-full text-white font-semibold transition-all duration-500 ease-out 
             bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
             shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
    >
      <!-- Effet lumineux animé -->
      <span
        class="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 
               opacity-0 group-hover:opacity-100 animate-gradient-move"
      ></span>
  
      <!-- Icône Instagram -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.5zm0 1.5a3.25 3.25 0 1 0 3.25 3.25A3.25 3.25 0 0 0 12 9zm5.75-.75a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25z"
        />
      </svg>
  
      <!-- Texte traduit -->
      <span class="z-10">
        {{ $t('home.followUsOnInstagram') }}
      </span>
    </a>
  </template>
  
  <style scoped>
  @keyframes gradient-move {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-gradient-move {
    animation: gradient-move 2s linear infinite;
  }
  </style>
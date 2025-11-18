<template>
  <div :class="{ dark: isDark }">
    <RouterView />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const isDark = ref(localStorage.theme === 'dark' || false)

watchEffect(() => {
  if (isDark.value) {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  }
})
</script>

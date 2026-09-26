<template>
  <div class="page-shell">
    <HeaderPage />

    <main class="page-main max-w-xl">
      <section>
        <h1 class="page-title">{{ $t('contact.title') }}</h1>

        <form class="mt-8 space-y-5" @submit.prevent="handleSubmit">
          <div class="relative">
            <label class="sr-only" for="name">{{ $t('contact.name') }}</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              :placeholder="$t('contact.name')"
              :class="field"
            />
            <User class="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
          </div>

          <div class="relative">
            <label class="sr-only" for="email">{{ $t('contact.email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :placeholder="$t('contact.email')"
              :class="field"
            />
            <Mail class="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
          </div>

          <div class="relative">
            <label class="sr-only" for="message">{{ $t('contact.message') }}</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              :placeholder="$t('contact.message')"
              :class="[field, 'resize-none']"
            ></textarea>
            <MessageCircle class="pointer-events-none absolute top-3 left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>

          <button type="submit" class="btn btn-primary w-full">{{ $t('contact.send') }}</button>
        </form>

        <!--
          Aucun service d'envoi n'est branché : le formulaire annonce l'échec
          plutôt que de simuler un succès. Voir 64d5a05.
        -->
        <p
          v-if="error"
          class="mt-4 text-center font-medium text-red-700 dark:text-red-400"
          role="alert"
        >
          {{ $t('contact.error') }}
        </p>
      </section>
    </main>

    <FooterPage />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { User, Mail, MessageCircle } from 'lucide-vue-next'

const field =
  'w-full rounded-lg border border-gray-300 py-2.5 pr-4 pl-10 focus:border-gray-900 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-gray-200'

const form = reactive({ name: '', email: '', message: '' })
const error = ref(false)

function handleSubmit() {
  error.value = true
}
</script>

<template>
  <div class="min-h-screen flex flex-col ">
    <!-- Header -->
    <HeaderPage />

    <!-- Formulaire -->
    <main class="flex-grow flex justify-center items-start py-12 px-4">
      <div class="w-full max-w-xl bg-white p-8">
        <h2 class="text-3xl font-bold mb-6">{{ $t('contact.title') }}</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">

          <!-- Name -->
          <div class="relative flex flex-col">
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              placeholder="John Doe"
              class="pl-10 px-4 py-2 border rounded focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
            <User class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <!-- Email -->
          <div class="relative flex flex-col">
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder="john@example.com"
              class="pl-10 px-4 py-2 border rounded focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
            <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <!-- Message -->
          <div class="relative flex flex-col">
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              placeholder="Your message..."
              class="pl-10 px-4 py-2 border rounded focus:ring-2 focus:ring-sky-400 focus:outline-none resize-none"
            ></textarea>
            <MessageCircle class="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          </div>

          <button
            type="submit"
            class="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition"
          >
            {{ $t('contact.send') }}
          </button>

        </form>

        <!-- Message de succès -->
        <p v-if="success" class="mt-4 text-green-600 font-medium text-center">{{ $t('contact.success') }}</p>
      </div>
    </main>

    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'

// Import des icônes Lucide
import { User, Mail, MessageCircle } from 'lucide-vue-next'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)

function handleSubmit() {
  console.log('Form submitted', form)
  success.value = true
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
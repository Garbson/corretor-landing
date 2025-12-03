<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const changeLanguage = (lang: string) => {
  locale.value = lang
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-900/5 fixed w-full top-0 z-50 border-b border-gray-100">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="text-xl lg:text-2xl font-bold">
            <span class="bg-gradient-to-r from-primary-700 to-primary-950 bg-clip-text text-transparent">Guitierry</span>
            <span class="text-gray-800"> Mariano</span>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          <button @click="scrollToSection('hero')" class="px-4 py-2 text-gray-700 hover:text-primary-950 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50">
            {{ t('nav.home') }}
          </button>
          <button @click="scrollToSection('about')" class="px-4 py-2 text-gray-700 hover:text-primary-950 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50">
            {{ t('nav.about') }}
          </button>
          <button @click="scrollToSection('services')" class="px-4 py-2 text-gray-700 hover:text-primary-950 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50">
            {{ t('nav.services') }}
          </button>
          <button @click="scrollToSection('testimonials')" class="px-4 py-2 text-gray-700 hover:text-primary-950 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50">
            {{ t('nav.testimonials') }}
          </button>
          <button @click="scrollToSection('faq')" class="px-4 py-2 text-gray-700 hover:text-primary-950 transition-all duration-300 font-medium rounded-lg hover:bg-primary-50">
            FAQ
          </button>
          <button @click="scrollToSection('contact')" class="ml-4 bg-gradient-to-r from-accent-600 to-accent-950 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 font-semibold hover:scale-105">
            {{ t('nav.contact') }}
          </button>
        </div>

        <!-- Language Selector & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Language Selector -->
          <div class="relative">
            <select
              v-model="locale"
              @change="changeLanguage(locale)"
              class="bg-white/50 backdrop-blur-md border border-gray-200 rounded-lg px-3 pr-8 py-2 text-sm font-medium focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition-all cursor-pointer hover:bg-white"
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" class="md:hidden text-gray-700 hover:text-primary-950 p-2 rounded-lg hover:bg-primary-50 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 animate-fade-in">
        <div class="px-4 pt-4 pb-6 space-y-2">
          <button @click="scrollToSection('hero')" class="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-950 rounded-lg hover:bg-primary-50 transition-all font-medium">
            {{ t('nav.home') }}
          </button>
          <button @click="scrollToSection('about')" class="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-950 rounded-lg hover:bg-primary-50 transition-all font-medium">
            {{ t('nav.about') }}
          </button>
          <button @click="scrollToSection('services')" class="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-950 rounded-lg hover:bg-primary-50 transition-all font-medium">
            {{ t('nav.services') }}
          </button>
          <button @click="scrollToSection('testimonials')" class="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-950 rounded-lg hover:bg-primary-50 transition-all font-medium">
            {{ t('nav.testimonials') }}
          </button>
          <button @click="scrollToSection('faq')" class="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-950 rounded-lg hover:bg-primary-50 transition-all font-medium">
            FAQ
          </button>
          <button @click="scrollToSection('contact')" class="block w-full text-left px-4 py-3 bg-gradient-to-r from-accent-600 to-accent-950 text-white rounded-lg mt-4 font-semibold hover:shadow-lg transition-all">
            {{ t('nav.contact') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
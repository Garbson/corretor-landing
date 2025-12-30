<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="services" class="py-12 lg:py-20 bg-white">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-block mb-6">
          <span class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-4 py-2 rounded-full text-sm font-semibold">
            {{ t('services.badge') }}
          </span>
        </div>
        <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          {{ t('services.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <!-- Service 1: Buying -->
        <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-primary-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll flex flex-col">
          <div class="bg-gradient-to-br from-primary-600 to-primary-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {{ t('services.items.buying.title') }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
            {{ t('services.items.buying.description') }}
          </p>
          <button @click="scrollToContact" class="text-primary-950 font-semibold hover:text-accent-950 flex items-center group-hover:translate-x-2 transition-all duration-300 mt-auto">
            {{ t('services.learnMore') }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>

        <!-- Service 2: Selling -->
        <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-accent-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll flex flex-col">
          <div class="bg-gradient-to-br from-primary-700 to-primary-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {{ t('services.items.selling.title') }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
            {{ t('services.items.selling.description') }}
          </p>
          <button @click="scrollToContact" class="text-primary-950 font-semibold hover:text-accent-950 flex items-center group-hover:translate-x-2 transition-all duration-300 mt-auto">
            {{ t('services.learnMore') }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>

        <!-- Service 3: Consultation -->
        <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-primary-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll flex flex-col">
          <div class="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {{ t('services.items.consultation.title') }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
            {{ t('services.items.consultation.description') }}
          </p>
          <button @click="scrollToContact" class="text-primary-950 font-semibold hover:text-accent-950 flex items-center group-hover:translate-x-2 transition-all duration-300 mt-auto">
            {{ t('nav.contact') }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>

        <!-- Service 4: Evaluation -->
        <div class="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-accent-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll flex flex-col">
          <div class="bg-gradient-to-br from-primary-700 to-accent-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {{ t('services.items.evaluation.title') }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
            {{ t('services.items.evaluation.description') }}
          </p>
          <button @click="scrollToContact" class="text-primary-950 font-semibold hover:text-accent-950 flex items-center group-hover:translate-x-2 transition-all duration-300 mt-auto">
            {{ t('nav.contact') }}
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Process Section -->
      <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border-2 border-gray-100 shadow-xl animate-on-scroll">
        <div class="text-center mb-12">
          <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ t('services.process.title') }}
          </h3>
          <p class="text-xl text-gray-600">
            {{ t('services.process.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="bg-gradient-to-br from-primary-950 to-accent-950 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ t('services.process.steps.initial.title') }}</h4>
            <p class="text-gray-600">{{ t('services.process.steps.initial.description') }}</p>
          </div>

          <!-- Step 2 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="bg-gradient-to-br from-primary-950 to-accent-950 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ t('services.process.steps.research.title') }}</h4>
            <p class="text-gray-600">{{ t('services.process.steps.research.description') }}</p>
          </div>

          <!-- Step 3 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="bg-gradient-to-br from-primary-950 to-accent-950 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ t('services.process.steps.negotiation.title') }}</h4>
            <p class="text-gray-600">{{ t('services.process.steps.negotiation.description') }}</p>
          </div>

          <!-- Step 4 -->
          <div class="text-center group">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <div class="bg-gradient-to-br from-primary-950 to-accent-950 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ t('services.process.steps.closing.title') }}</h4>
            <p class="text-gray-600">{{ t('services.process.steps.closing.description') }}</p>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center mt-12">
          <button @click="scrollToContact" class="bg-gradient-to-r from-primary-700 to-primary-950 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary-700/30 transform hover:scale-105 transition-all duration-300">
            {{ t('services.process.cta') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
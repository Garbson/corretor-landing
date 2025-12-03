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
  <section class="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-blue-700 relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center animate-on-scroll">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </div>

        <!-- Title -->
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          {{ t('cta.ready') }}
        </h2>

        <!-- Subtitle -->
        <p class="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          {{ t('cta.contact') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button @click="scrollToContact" class="group bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              {{ t('cta.button') }}
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>

          <a href="https://wa.me/5547989141108" target="_blank" class="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              WhatsApp
            </span>
          </a>
        </div>

        <!-- Trust Elements -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">24/7</div>
            <div class="text-blue-200 text-sm">Suporte</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">100%</div>
            <div class="text-blue-200 text-sm">Gratuito</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">10+</div>
            <div class="text-blue-200 text-sm">Anos</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">500+</div>
            <div class="text-blue-200 text-sm">Vendas</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
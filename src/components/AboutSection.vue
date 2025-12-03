<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-12 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Content -->
        <div class="animate-on-scroll">
          <div class="inline-block mb-6">
            <span class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-4 py-2 rounded-full text-sm font-semibold">
              Sobre Mim
            </span>
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {{ t('about.title') }}
          </h2>
          <h3 class="text-xl lg:text-2xl bg-gradient-to-r from-primary-950 to-accent-950 bg-clip-text text-transparent font-bold mb-8">
            {{ t('about.subtitle') }}
          </h3>
          <p class="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12">
            {{ t('about.description') }}
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center md:text-left p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div class="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-950 to-accent-950 bg-clip-text text-transparent mb-2">
                {{ t('about.stats.experience') }}
              </div>
              <div class="text-sm text-gray-700 font-semibold">
                {{ t('about.stats.experienceLabel') }}
              </div>
            </div>
            <div class="text-center md:text-left p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-950 to-accent-950 bg-clip-text text-transparent mb-2 break-words">
                {{ t('about.stats.properties') }}
              </div>
              <div class="text-sm text-gray-700 font-semibold">
                {{ t('about.stats.propertiesLabel') }}
              </div>
            </div>
            <div class="text-center md:text-left p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div class="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-950 to-accent-950 bg-clip-text text-transparent mb-2">
                {{ t('about.stats.clients') }}
              </div>
              <div class="text-sm text-gray-700 font-semibold">
                {{ t('about.stats.clientsLabel') }}
              </div>
            </div>
          </div>
        </div>

        <!-- Image/Visual -->
        <div class="animate-on-scroll relative lg:order-first">
          <div class="relative">
            <!-- Professional Photo Placeholder -->
            <div class="bg-gradient-to-br from-primary-950 via-primary-700 to-accent-950 rounded-3xl h-96 lg:h-[600px] flex items-center justify-center relative overflow-hidden shadow-2xl border-8 border-white">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent-600/30 backdrop-blur-sm"></div>

              <!-- Decorative Pattern -->
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div class="absolute bottom-0 right-0 w-60 h-60 bg-accent-300 rounded-full blur-3xl"></div>
              </div>

              <div class="relative z-10 text-center text-white p-8">
                <svg class="w-32 h-32 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p class="text-2xl font-bold mb-2">Foto Profissional</p>
                <p class="text-lg opacity-90">Seu corretor especialista</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="mt-24 lg:mt-32 animate-on-scroll">
        <div class="text-center mb-12">
          <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Certificações e Reconhecimentos
          </h3>
          <p class="text-gray-600">Qualificação profissional comprovada</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <!-- Badge placeholders -->
          <div class="group flex items-center space-x-3 bg-gradient-to-br from-white to-gray-50 border-2 border-primary-100 px-6 py-5 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-primary-300 transition-all duration-300">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
              <svg class="w-8 h-8 text-primary-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="font-bold text-lg text-gray-900">CRECI</span>
          </div>

          <div class="group flex items-center space-x-3 bg-gradient-to-br from-white to-gray-50 border-2 border-primary-100 px-6 py-5 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-primary-300 transition-all duration-300">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
              <svg class="w-8 h-8 text-primary-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span class="font-bold text-lg text-gray-900">Top Broker</span>
          </div>

          <div class="group flex items-center space-x-3 bg-gradient-to-br from-white to-gray-50 border-2 border-primary-100 px-6 py-5 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-primary-300 transition-all duration-300">
            <div class="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
              <svg class="w-8 h-8 text-primary-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.12 2 2.03 3.12 2.03 4.5L2 20.5C2 21.88 3.12 23 4.5 23h15c1.38 0 2.5-1.12 2.5-2.5v-16C22 3.12 20.88 2 19.5 2zM19.5 20.5h-15V8h15v12.5z"/>
              </svg>
            </div>
            <span class="font-bold text-lg text-gray-900">Especialista</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
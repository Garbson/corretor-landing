<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="expert" class="py-8 sm:py-12 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <!-- Lado esquerdo - Texto e cards -->
          <div>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {{ t('expert.name') }}
            </h2>
            <h3 class="text-base sm:text-lg md:text-xl text-primary-700 font-semibold mb-3 sm:mb-4">
              {{ t('expert.subtitle') }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              {{ t('expert.description') }}
            </p>

            <!-- 4 Cards em grid 2x2 -->
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div class="text-lg sm:text-xl md:text-2xl font-bold text-primary-700 mb-1">
                  {{ t('expert.metrics.sales') }}
                </div>
                <div class="text-xs sm:text-sm text-gray-600">
                  {{ t('expert.metrics.salesLabel') }}
                </div>
              </div>

              <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div class="text-lg sm:text-xl md:text-2xl font-bold text-primary-700 mb-1">
                  {{ t('expert.metrics.clients') }}
                </div>
                <div class="text-xs sm:text-sm text-gray-600">
                  {{ t('expert.metrics.clientsLabel') }}
                </div>
              </div>

              <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div class="text-lg sm:text-xl md:text-2xl font-bold text-primary-700 mb-1">
                  {{ t('expert.metrics.experience') }}
                </div>
                <div class="text-xs sm:text-sm text-gray-600">
                  {{ t('expert.metrics.experienceLabel') }}
                </div>
              </div>

              <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div class="text-lg sm:text-xl md:text-2xl font-bold text-primary-700 mb-1">
                  {{ t('expert.metrics.regions') }}
                </div>
                <div class="text-xs sm:text-sm text-gray-600">
                  {{ t('expert.metrics.regionsLabel') }}
                </div>
              </div>
            </div>
          </div>

          <!-- Lado direito - Foto -->
          <div class="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div class="w-full max-w-xs sm:max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Guitierry Mariano"
                class="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
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
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {{ t('expert.name') }}
            </h2>
            <p class="text-sm sm:text-base text-primary-600 font-medium mb-1">
              {{ t('expert.subtitle') }}
            </p>
            <h3 class="text-base sm:text-lg md:text-xl text-primary-700 font-bold mb-3 sm:mb-4 leading-snug">
              {{ t('expert.title') }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              {{ t('expert.description') }}
            </p>

            <!-- Botões WhatsApp -->
            <div class="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
              <a
                href="https://wa.me/5547989141108?text=Olá Gutthierry! Quero saber mais sobre investimentos imobiliários no litoral catarinense."
                target="_blank"
                class="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {{ t('expert.buttons.invest') }}
              </a>
              <a
                href="https://wa.me/5547989141108?text=Olá Gutthierry! Gostaria de uma consultoria sobre investimentos imobiliários."
                target="_blank"
                class="flex items-center justify-center gap-2 border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                </svg>
                {{ t('expert.buttons.consulting') }}
              </a>
            </div>

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
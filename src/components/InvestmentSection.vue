<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section id="investment" class="py-8 sm:py-12 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <div
        class="text-center mb-8 sm:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <h2
          class="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          {{ t("investment.title") }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
      >
        <!-- LAZER Card -->
        <div
          class="text-center bg-white rounded-lg p-4 sm:p-6 shadow-lg"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="300"
        >
          <div class="mb-3 sm:mb-4">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <h3
            class="text-lg sm:text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide"
          >
            {{ t("investment.cards.leisure.title") }}
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm">
            {{ t("investment.cards.leisure.description") }}
          </p>
        </div>

        <!-- SEGURANÇA Card -->
        <div
          class="text-center bg-white rounded-lg p-4 sm:p-6 shadow-lg"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          <div class="mb-3 sm:mb-4">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>
          <h3
            class="text-lg sm:text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide"
          >
            {{ t("investment.cards.safety.title") }}
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm">
            {{ t("investment.cards.safety.description") }}
          </p>
        </div>

        <!-- RENDIMENTO Card -->
        <div
          class="text-center bg-white rounded-lg p-4 sm:p-6 shadow-lg sm:col-span-2 md:col-span-1"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="500"
        >
          <div class="mb-3 sm:mb-4">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto"
            >
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
          <h3
            class="text-lg sm:text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide"
          >
            {{ t("investment.cards.income.title") }}
          </h3>
          <p class="text-gray-600 text-xs sm:text-sm">
            {{ t("investment.cards.income.description") }}
          </p>
        </div>

        <!-- Call to Action -->
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="text-center mt-8 sm:mt-12 mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="600"
      >
        <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          {{ t('investment.ctaText') }}
        </p>
        <a
          href="https://wa.me/5547989141108?text=Olá Gutthierry! Gostaria de saber mais sobre as oportunidades de investimento no litoral catarinense."
          target="_blank"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 hover:shadow-lg hover:shadow-green-700/50 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
          </svg>
          {{ t('investment.ctaButton') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const whatsappLink =
  "https://wa.me/5547989141108?text=Ol%C3%A1%20Gutthierry!%20Gostaria%20de%20ver%20as%20oportunidades%20de%20investimento%20em%20Itapema%20e%20Porto%20Belo.";

const cards = [
  {
    number: "01",
    titleKey: "investment.cards.leisure.title",
    descKey: "investment.cards.leisure.description",
    featured: true,
  },
  {
    number: "02",
    titleKey: "investment.cards.safety.title",
    descKey: "investment.cards.safety.description",
    featured: false,
  },
  {
    number: "03",
    titleKey: "investment.cards.income.title",
    descKey: "investment.cards.income.description",
    featured: false,
  },
];
</script>

<template>
  <section id="investment" class="py-12 sm:py-16 md:py-24 bg-primary-100">
    <div class="container mx-auto px-4">
      <div
        class="text-center mb-10 sm:mb-14 max-w-4xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <p
          class="text-sm sm:text-base font-semibold text-accent-600 mb-3 tracking-wide"
        >
          {{ t("investment.badge") }}
        </p>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
        >
          {{ t("investment.title") }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        <div
          v-for="(card, idx) in cards"
          :key="card.number"
          class="relative rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          :class="
            card.featured
              ? 'bg-primary-700 text-white'
              : 'bg-white text-gray-900 border border-gray-100'
          "
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="300 + idx * 150"
        >
          <div class="mb-6 flex justify-center">
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center"
              :class="card.featured ? 'bg-white/10' : 'bg-gray-900'"
            >
              <svg
                v-if="idx === 0"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                v-else-if="idx === 1"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" stroke-width="2" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 10h.01M15 10h.01M8.5 14a4 4 0 007 0"
                />
              </svg>
              <svg
                v-else
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
          </div>

          <h3 class="text-lg sm:text-xl font-bold mb-3 text-center">
            <span :class="card.featured ? 'text-accent-300' : 'text-accent-600'">
              {{ t(card.titleKey) }}
            </span>
          </h3>

          <p
            class="text-sm leading-relaxed mb-6 text-center flex-grow"
            :class="card.featured ? 'text-white/90' : 'text-gray-600'"
          >
            {{ t(card.descKey) }}
          </p>

          <a
            :href="whatsappLink"
            target="_blank"
            class="text-center font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
            :class="card.featured ? 'text-accent-300' : 'text-accent-600'"
          >
            {{ t("investment.cardCta") }}
            <span>→</span>
          </a>

        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div
        class="text-center mt-10 sm:mt-14 mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="600"
      >
        <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          {{ t("investment.ctaText") }}
        </p>
        <a
          :href="whatsappLink"
          target="_blank"
          class="animate-pulse-wpp inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-700 hover:shadow-2xl hover:shadow-green-700/50 text-white px-8 sm:px-12 md:px-14 py-4 md:py-5 rounded-xl md:rounded-2xl font-semibold text-base sm:text-lg md:text-xl transform hover:scale-105 transition-all duration-300"
        >
          <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"
            />
          </svg>
          {{ t("investment.ctaButton") }}
        </a>
      </div>
    </div>
  </section>
</template>

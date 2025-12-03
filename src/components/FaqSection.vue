<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const openIndex = ref<number | null>(null)

interface FaqItem {
  question: string
  answer: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const faqItems = computed(() => tm('faq.items') as FaqItem[])

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16 animate-on-scroll max-w-3xl mx-auto">
        <div class="inline-block mb-4 md:mb-6">
          <span class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-semibold">
            {{ t('faq.badge') }}
          </span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
          {{ t('faq.title') }}
        </h2>
        <p class="text-base md:text-lg lg:text-xl text-gray-600 px-4">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <!-- FAQ Grid -->
      <div class="max-w-4xl mx-auto space-y-3 md:space-y-4 animate-on-scroll">
        <!-- FAQ Item -->
        <div
          v-for="(faq, index) in faqItems"
          :key="index"
          class="bg-white rounded-xl md:rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 overflow-hidden shadow-sm"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full flex items-start justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <span class="font-bold text-sm md:text-base lg:text-lg text-gray-900 pr-4 md:pr-8 text-left">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 md:w-6 md:h-6 text-primary-700 flex-shrink-0 transition-transform duration-300 mt-1"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="openIndex === index"
            class="px-4 md:px-6 pb-4 md:pb-6 pt-4 text-sm md:text-base leading-relaxed border-t-2 border-primary-200 bg-gray-50"
            style="color: #111827 !important;"
          >
            <p class="font-normal" style="color: #111827 !important;">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- CTA after FAQ -->
      <div class="mt-12 md:mt-16 text-center animate-on-scroll">
        <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 max-w-3xl mx-auto border-2 border-primary-100">
          <h3 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            {{ t('faq.cta.title') }}
          </h3>
          <p class="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">
            {{ t('faq.cta.subtitle') }}
          </p>
          <a
            href="https://wa.me/5547989141108"
            target="_blank"
            class="inline-flex items-center justify-center bg-gradient-to-r from-accent-600 to-accent-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
            </svg>
            {{ t('faq.cta.button') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

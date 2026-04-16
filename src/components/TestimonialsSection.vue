<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const testimonials = computed(() => {
  return tm('testimonials.items') as any[]
})

const currentIndex = ref(0)

const currentTestimonial = computed(() => {
  return testimonials.value[currentIndex.value]
})

const previousTestimonial = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = testimonials.value.length - 1
  }
}

const nextTestimonial = () => {
  if (currentIndex.value < testimonials.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => i < rating)
}
</script>

<template>
  <section id="testimonials" class="py-8 sm:py-12 lg:py-20 relative overflow-hidden bg-primary-100">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 sm:top-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
        <div class="inline-block mb-4 sm:mb-6">
          <span class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            {{ t('testimonials.subtitle') }}
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          {{ t('testimonials.title') }}
        </h2>

        <!-- Stats Bar -->
        <div class="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 flex-wrap">
          <div class="flex items-center gap-2">
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-gray-700 font-bold text-xs sm:text-sm">{{ t('testimonials.stats.rating') }}</span>
          </div>
          <div class="h-6 sm:h-8 w-px bg-gray-300 hidden sm:block"></div>
          <div class="text-gray-700 text-xs sm:text-sm">
            <span class="font-bold text-primary-700">R$ 250M+</span> {{ t('testimonials.stats.transactions') }}
          </div>
          <div class="h-6 sm:h-8 w-px bg-gray-300 hidden sm:block"></div>
          <div class="text-gray-700 text-xs sm:text-sm">
            <span class="font-bold text-primary-700">300+</span> {{ t('testimonials.stats.investors') }}
          </div>
        </div>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative mb-6 sm:mb-8 lg:mb-10">
        <!-- Navigation Arrows -->
        <button
          @click="previousTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-700 text-primary-700 hover:text-white w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -ml-4 sm:-ml-6 lg:-ml-8 group"
        >
          <svg class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-700 text-primary-700 hover:text-white w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -mr-4 sm:-mr-6 lg:-mr-8 group"
        >
          <svg class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Central Testimonial Card -->
        <div class="max-w-4xl mx-auto px-4 sm:px-12 lg:px-16">
          <div
            v-if="currentTestimonial"
            class="group animate-on-scroll"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="200"
          >
            <div class="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden border-2 border-primary-200 h-[560px] sm:h-[500px] lg:h-[520px]">
              <!-- Decorative Corner -->
              <div class="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary-100 to-accent-100 opacity-50 rounded-bl-full"></div>

              <!-- Quote Icon -->
              <div class="mb-3 sm:mb-4 relative z-10">
                <div class="bg-gradient-to-br from-primary-600 to-accent-600 w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <svg class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              <!-- Stars -->
              <div class="flex mb-3 sm:mb-4 justify-center">
                <svg
                  v-for="(filled, starIndex) in renderStars(currentTestimonial.rating)"
                  :key="starIndex"
                  class="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6"
                  :class="filled ? 'text-accent-500' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              <!-- Testimonial Text - DESTAQUE MAIOR COM ALTURA FIXA -->
              <div class="flex-grow flex items-center justify-center overflow-y-auto px-2">
                <blockquote class="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed text-center font-medium">
                  "{{ currentTestimonial.text }}"
                </blockquote>
              </div>

              <!-- Customer Info -->
              <div class="flex items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t-2 border-gray-100 mt-4">
                <div class="bg-gradient-to-br from-primary-600 to-accent-600 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg">
                  {{ currentTestimonial.name.charAt(0) }}
                </div>
                <div class="text-center">
                  <h4 class="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">{{ currentTestimonial.name }}</h4>
                  <p class="text-xs sm:text-sm text-gray-600 font-medium">{{ currentTestimonial.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-4 sm:mt-6">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="currentIndex = index"
            class="transition-all duration-300"
            :class="[
              currentIndex === index
                ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-primary-700'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 hover:bg-gray-400'
            ]"
            style="border-radius: 9999px"
          ></button>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 animate-on-scroll">
        <!-- Indicator 1 -->
        <div class="bg-gradient-to-br from-primary-600 to-primary-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">35%</div>
          <div class="text-primary-100 text-xs sm:text-sm font-medium">{{ t('testimonials.indicators.appreciation') }}</div>
        </div>

        <!-- Indicator 2 -->
        <div class="bg-gradient-to-br from-primary-700 to-primary-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">98%</div>
          <div class="text-accent-100 text-xs sm:text-sm font-medium">{{ t('testimonials.indicators.successRate') }}</div>
        </div>

        <!-- Indicator 3 -->
        <div class="bg-gradient-to-br from-primary-700 to-accent-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">18</div>
          <div class="text-primary-100 text-xs sm:text-sm font-medium">{{ t('testimonials.indicators.roi') }}</div>
        </div>

        <!-- Indicator 4 -->
        <div class="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
          <div class="text-gray-100 text-xs sm:text-sm font-medium">{{ t('testimonials.indicators.support') }}</div>
        </div>
      </div>

      <!-- Certification Badges -->
      <div class="mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-70 animate-on-scroll">
        <div class="flex items-center space-x-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
          <svg class="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span class="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">{{ t('testimonials.badges.creci') }}</span>
        </div>

        <div class="flex items-center space-x-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
          <svg class="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">{{ t('testimonials.badges.topBroker') }}</span>
        </div>

        <div class="flex items-center space-x-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
          <svg class="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">{{ t('testimonials.badges.certified') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

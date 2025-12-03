<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const testimonials = computed(() => {
  return tm('testimonials.items') as any[]
})

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => i < rating)
}
</script>

<template>
  <section id="testimonials" class="py-12 lg:py-20 relative overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <div class="inline-block mb-6">
          <span class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-4 py-2 rounded-full text-sm font-semibold">
            {{ t('testimonials.subtitle') }}
          </span>
        </div>
        <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          {{ t('testimonials.title') }}
        </h2>

        <!-- Stats Bar -->
        <div class="flex justify-center items-center gap-8 mt-8 flex-wrap">
          <div class="flex items-center gap-2">
            <div class="flex">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-gray-700 font-bold">{{ t('testimonials.stats.rating') }}</span>
          </div>
          <div class="h-8 w-px bg-gray-300"></div>
          <div class="text-gray-700">
            <span class="font-bold text-primary-700">R$ 250M+</span> {{ t('testimonials.stats.transactions') }}
          </div>
          <div class="h-8 w-px bg-gray-300"></div>
          <div class="text-gray-700">
            <span class="font-bold text-primary-700">300+</span> {{ t('testimonials.stats.investors') }}
          </div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="group animate-on-scroll"
        >
          <div class="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden border-2 border-transparent hover:border-primary-200">
            <!-- Decorative Corner -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 opacity-50 rounded-bl-full"></div>

            <!-- Quote Icon -->
            <div class="mb-6 relative z-10">
              <div class="bg-gradient-to-br from-primary-600 to-accent-600 w-14 h-14 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>

            <!-- Stars -->
            <div class="flex mb-6">
              <svg
                v-for="(filled, starIndex) in renderStars(testimonial.rating)"
                :key="starIndex"
                class="w-6 h-6"
                :class="filled ? 'text-accent-500' : 'text-gray-300'"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <!-- Testimonial Text - DESTAQUE MAIOR -->
            <blockquote class="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8 flex-grow font-medium">
              "{{ testimonial.text }}"
            </blockquote>

            <!-- Customer Info -->
            <div class="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
              <div class="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600 font-medium">{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="grid md:grid-cols-4 gap-6 animate-on-scroll">
        <!-- Indicator 1 -->
        <div class="bg-gradient-to-br from-primary-600 to-primary-950 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold mb-2">35%</div>
          <div class="text-primary-100 text-sm font-medium">{{ t('testimonials.indicators.appreciation') }}</div>
        </div>

        <!-- Indicator 2 -->
        <div class="bg-gradient-to-br from-accent-600 to-accent-950 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold mb-2">98%</div>
          <div class="text-accent-100 text-sm font-medium">{{ t('testimonials.indicators.successRate') }}</div>
        </div>

        <!-- Indicator 3 -->
        <div class="bg-gradient-to-br from-primary-700 to-accent-700 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold mb-2">18</div>
          <div class="text-primary-100 text-sm font-medium">{{ t('testimonials.indicators.roi') }}</div>
        </div>

        <!-- Indicator 4 -->
        <div class="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
          <div class="text-4xl font-bold mb-2">24/7</div>
          <div class="text-gray-100 text-sm font-medium">{{ t('testimonials.indicators.support') }}</div>
        </div>
      </div>

      <!-- Certification Badges -->
      <div class="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70 animate-on-scroll">
        <div class="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
          <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span class="text-gray-700 font-semibold">{{ t('testimonials.badges.creci') }}</span>
        </div>

        <div class="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
          <svg class="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-gray-700 font-semibold">{{ t('testimonials.badges.topBroker') }}</span>
        </div>

        <div class="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
          <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="text-gray-700 font-semibold">{{ t('testimonials.badges.certified') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

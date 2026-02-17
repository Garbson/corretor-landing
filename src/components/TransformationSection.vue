<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const transformationItems = computed(() => {
  return tm('transformation.items') as any
})

const currentIndex = ref(0)

const currentItem = computed(() => {
  const keys = Object.keys(transformationItems.value)
  const key = keys[currentIndex.value] as string
  return {
    key,
    ...transformationItems.value[key]
  }
})

const previousItem = () => {
  const total = Object.keys(transformationItems.value).length
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = total - 1
  }
}

const nextItem = () => {
  const total = Object.keys(transformationItems.value).length
  if (currentIndex.value < total - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}
</script>

<template>
  <section id="transformation" class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          {{ t('transformation.title') }}
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {{ t('transformation.subtitle') }}
        </p>
      </div>

      <!-- Carousel -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Navigation Arrows -->
        <button
          @click="previousItem"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-700 text-primary-700 hover:text-white w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -ml-4 sm:-ml-6 lg:-ml-8"
        >
          <svg class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
          @click="nextItem"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-700 text-primary-700 hover:text-white w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -mr-4 sm:-mr-6 lg:-mr-8"
        >
          <svg class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Central Image Card -->
        <div class="px-8 sm:px-12 lg:px-16">
          <div v-if="currentItem" class="group relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[500px]">
            <!-- Image for each slide -->
            <img
              v-if="currentIndex === 0"
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
              :alt="currentItem.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <img
              v-else-if="currentIndex === 1"
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80"
              :alt="currentItem.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <img
              v-else-if="currentIndex === 2"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
              :alt="currentItem.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <img
              v-else-if="currentIndex === 3"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              :alt="currentItem.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <img
              v-else-if="currentIndex === 4"
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
              :alt="currentItem.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <img
              v-else
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
              :alt="currentItem.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <!-- Overlay with info -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div class="p-6 sm:p-8">
                <h3 class="text-white text-xl sm:text-2xl font-bold mb-2">{{ currentItem.title }}</h3>
                <p class="text-white/90 text-sm sm:text-base leading-relaxed">{{ currentItem.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-4 sm:mt-6">
          <button
            v-for="(_, index) in Object.keys(transformationItems)"
            :key="index"
            @click="currentIndex = index"
            class="transition-all duration-300"
            :class="[
              currentIndex === index
                ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-primary-700'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-400 hover:bg-gray-500'
            ]"
            style="border-radius: 9999px"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
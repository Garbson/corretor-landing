<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  propertyKey: string
  images: string[]
  fallbackImages: string[]
}

const props = defineProps<Props>()

const currentImageIndex = ref(0)

// Função para obter as imagens do imóvel
const getPropertyImages = () => {
  return props.images.length > 0 && props.images[0] !== `/img/properties/${props.propertyKey}-1.jpg`
    ? props.images
    : props.fallbackImages
}

// Função para obter a imagem atual
const getCurrentImage = () => {
  const images = getPropertyImages()
  return images[currentImageIndex.value]
}

// Função para navegar entre as imagens
const nextImage = () => {
  const images = getPropertyImages()
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  const images = getPropertyImages()
  currentImageIndex.value = currentImageIndex.value === 0
    ? images.length - 1
    : currentImageIndex.value - 1
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative">
      <img
        :src="getCurrentImage()"
        :alt="t(`gallery.properties.${propertyKey}.title`)"
        class="w-full h-40 sm:h-48 object-cover transition-opacity duration-300"
      />

      <!-- Botões de navegação -->
      <button
        @click="prevImage()"
        class="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-1.5 rounded-full hover:bg-black/70 transition-colors"
      >
        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextImage()"
        class="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-1.5 rounded-full hover:bg-black/70 transition-colors"
      >
        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicadores de imagem -->
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div
          v-for="(_, index) in getPropertyImages()"
          :key="index"
          @click="currentImageIndex = index"
          :class="[
            'w-2 h-2 rounded-full cursor-pointer transition-colors',
            currentImageIndex === index ? 'bg-white' : 'bg-white/50'
          ]"
        />
      </div>

      <!-- Tag do tipo de imóvel -->
      <div class="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
        {{ t(`gallery.properties.${propertyKey}.type`) }}
      </div>
    </div>

    <div class="p-4 sm:p-6">
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {{ t(`gallery.properties.${propertyKey}.title`) }}
      </h3>
      <p class="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
        {{ t(`gallery.properties.${propertyKey}.location`) }}
      </p>
      <div class="flex justify-between items-center mb-3 sm:mb-4">
        <span class="text-xs sm:text-sm text-gray-500">{{ t(`gallery.properties.${propertyKey}.area`) }}</span>
        <span class="text-xs sm:text-sm text-gray-500">{{ t(`gallery.properties.${propertyKey}.rooms`) }}</span>
      </div>
      <div class="mb-2">
        <div class="text-xl sm:text-2xl font-bold text-primary-700">
          {{ t(`gallery.properties.${propertyKey}.price`) }}
        </div>
        <div class="text-xs sm:text-sm text-gray-600">
          {{ t(`gallery.properties.${propertyKey}.downPayment`) }}
        </div>
      </div>
    </div>
  </div>
</template>
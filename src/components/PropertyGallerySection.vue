<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PropertyCard from './PropertyCard.vue'

const { t } = useI18n()

// Múltiplas imagens para cada imóvel - você pode substituir essas URLs pelas suas próprias
const propertyImages = {
  property1: [
    '/img/properties/property1-1.jpg', // Imagem principal
    '/img/properties/property1-2.jpg', // Imagem 2
    '/img/properties/property1-3.jpg', // Imagem 3
  ],
  property2: [
    '/img/properties/property2-1.jpg',
    '/img/properties/property2-2.jpg',
    '/img/properties/property2-3.jpg',
  ],
  property3: [
    '/img/properties/property3-1.jpg',
    '/img/properties/property3-2.jpg',
    '/img/properties/property3-3.jpg',
  ],
  property4: [
    '/img/properties/property4-1.jpg',
    '/img/properties/property4-2.jpg',
    '/img/properties/property4-3.jpg',
  ],
  property5: [
    '/img/properties/property5-1.jpg',
    '/img/properties/property5-2.jpg',
    '/img/properties/property5-3.jpg',
  ],
  property6: [
    '/img/properties/property6-1.jpg',
    '/img/properties/property6-2.jpg',
    '/img/properties/property6-3.jpg',
  ],
}

// Imagens de fallback caso as suas não estejam disponíveis
const fallbackImages = {
  property1: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&q=80',
  ],
  property2: [
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80',
  ],
  property3: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
  ],
  property4: [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
  ],
  property5: [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
  ],
  property6: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
  ],
}
</script>

<template>
  <section id="gallery" class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          {{ t('gallery.title') }}
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {{ t('gallery.subtitle') }}
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <!-- Grid de imóveis -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <PropertyCard
            property-key="property1"
            :images="propertyImages.property1"
            :fallback-images="fallbackImages.property1"
          />
          <PropertyCard
            property-key="property2"
            :images="propertyImages.property2"
            :fallback-images="fallbackImages.property2"
          />
          <PropertyCard
            property-key="property3"
            :images="propertyImages.property3"
            :fallback-images="fallbackImages.property3"
          />
          <PropertyCard
            property-key="property4"
            :images="propertyImages.property4"
            :fallback-images="fallbackImages.property4"
          />
          <PropertyCard
            property-key="property5"
            :images="propertyImages.property5"
            :fallback-images="fallbackImages.property5"
          />
          <PropertyCard
            property-key="property6"
            :images="propertyImages.property6"
            :fallback-images="fallbackImages.property6"
          />
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-8 sm:mt-12">
          <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{{ t('gallery.cta.text') }}</p>
          <button class="bg-primary-700 hover:bg-primary-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200">
            {{ t('gallery.cta.button') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import PropertyCard from "./PropertyCard.vue";

const { t } = useI18n();

const currentPropertyIndex = ref(0);

// Dados dos imóveis
const properties = [
  {
    key: "property1",
    image: "/img/properties/property1-1.jpg",
    fallbackImage: "/img/properties/majestic.jpeg",
  },
  {
    key: "property2",
    image: "/img/properties/property2-1.jpg",
    fallbackImage: "/img/properties/oneBay.jpeg",
  },
  {
    key: "property3",
    image: "/img/properties/property3-1.jpg",
    fallbackImage: "/img/properties/conrado.jpeg",
  },
  {
    key: "property4",
    image: "/img/properties/property4-1.jpg",
    fallbackImage: "/img/properties/marAmar.jpeg",
  },
  {
    key: "property5",
    image: "/img/properties/property5-1.jpg",
    fallbackImage: "/img/properties/oceanTower.jpeg",
  },
  {
    key: "property6",
    image: "/img/properties/property6-1.jpg",
    fallbackImage: "/img/properties/palmBeach.jpeg",
  },
];

// Funções de navegação
const nextProperty = () => {
  currentPropertyIndex.value =
    (currentPropertyIndex.value + 1) % properties.length;
};

const prevProperty = () => {
  currentPropertyIndex.value =
    currentPropertyIndex.value === 0
      ? properties.length - 1
      : currentPropertyIndex.value - 1;
};

const goToProperty = (index: number) => {
  currentPropertyIndex.value = index;
};
</script>

<template>
  <section id="gallery" class="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div
        class="text-center mb-8 sm:mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <h2
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          {{ t("gallery.title") }}
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {{ t("gallery.subtitle") }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Carrossel/Vitrine de Imóveis -->
        <div class="relative">
          <!-- Imóvel Principal -->
          <div
            class="transition-all duration-500 ease-in-out"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="300"
          >
            <PropertyCard
              :property-key="properties[currentPropertyIndex].key"
              :image="properties[currentPropertyIndex].image"
              :fallback-image="properties[currentPropertyIndex].fallbackImage"
            />
          </div>

          <!-- Botões de Navegação -->
          <button
            @click="prevProperty"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 z-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="nextProperty"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 z-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <!-- Indicadores/Navegação por pontos -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(property, index) in properties"
            :key="property.key"
            @click="goToProperty(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentPropertyIndex === index
                ? 'bg-primary-700 scale-125'
                : 'bg-gray-300 hover:bg-gray-400',
            ]"
          />
        </div>

        <!-- Navegação por thumbnails (opcional) -->
        <div
          class="hidden sm:flex justify-center mt-8 space-x-4 overflow-x-auto pb-4"
        >
          <button
            v-for="(property, index) in properties"
            :key="`thumb-${property.key}`"
            @click="goToProperty(index)"
            :class="[
              'flex-shrink-0 transition-all duration-300 rounded-lg overflow-hidden',
              currentPropertyIndex === index
                ? 'ring-4 ring-primary-700 scale-105'
                : 'ring-2 ring-gray-200 hover:ring-primary-300',
            ]"
          >
            <div class="w-20 h-24 bg-gray-200 rounded-lg overflow-hidden">
              <img
                :src="property.fallbackImage"
                :alt="t(`gallery.properties.${property.key}.title`)"
                class="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>

        <!-- Call to Action -->
        <div
          class="text-center mt-8 sm:mt-12"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="900"
        >
          <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            {{ t("gallery.cta.text") }}
          </p>
          <a
            href="https://wa.me/5547989141108?text=Olá Gutthierry! Tenho interesse em saber mais sobre os imóveis disponíveis."
            target="_blank"
            class="bg-primary-700 hover:bg-primary-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 inline-block"
          >
            {{ t("gallery.cta.button") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

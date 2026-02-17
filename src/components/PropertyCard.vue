<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Props {
  propertyKey: string;
  image: string;
  fallbackImage: string;
}

const props = defineProps<Props>();

// Função para obter a imagem do imóvel
const getPropertyImage = () => {
  return props.image &&
    props.image !== `/img/properties/${props.propertyKey}-1.jpg`
    ? props.image
    : props.fallbackImage;
};
</script>

<template>
  <div
    class="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
  >
    <div class="relative rounded-xl overflow-hidden">
      <img
        :src="getPropertyImage()"
        :alt="t(`gallery.properties.${propertyKey}.title`)"
        class="w-full h-full sm:h-80 lg:h-[800px] object-cover transition-opacity duration-300"
      />

      <!-- Tag do tipo de imóvel -->
      <div
        class="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
      >
        {{ t(`gallery.properties.${propertyKey}.type`) }}
      </div>
    </div>

    <div class="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
        {{ t(`gallery.properties.${propertyKey}.title`) }}
      </h3>
      <p class="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
        {{ t(`gallery.properties.${propertyKey}.location`) }}
      </p>
      <div class="flex justify-between items-center mb-3 sm:mb-4">
        <span class="text-xs sm:text-sm text-gray-500">{{
          t(`gallery.properties.${propertyKey}.area`)
        }}</span>
        <span class="text-xs sm:text-sm text-gray-500">{{
          t(`gallery.properties.${propertyKey}.rooms`)
        }}</span>
      </div>
      <div class="mb-4">
        <div class="text-xl sm:text-2xl font-bold text-primary-700">
          {{ t(`gallery.properties.${propertyKey}.price`) }}
        </div>
        <div class="text-xs sm:text-sm text-gray-600">
          {{ t(`gallery.properties.${propertyKey}.downPayment`) }}
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-auto">
        <a
          :href="`https://wa.me/5547989141108?text=Olá Gutthierry! Tenho interesse no ${t(`gallery.properties.${propertyKey}.title`)}. Gostaria de mais informações sobre este imóvel.`"
          target="_blank"
          class="w-full bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors duration-200 inline-block text-center"
        >
          {{ t("gallery.consultButton") }}
        </a>
      </div>
    </div>
  </div>
</template>

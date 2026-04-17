<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const images = [
  "/img/carousel/IMG_5982.PNG",
  "/img/carousel/IMG_5983.PNG",
  "/img/carousel/IMG_5985.PNG",
  "/img/carousel/IMG_5987.PNG",
  "/img/carousel/IMG_5989.PNG",
  "/img/carousel/IMG_5992.JPG",
  "/img/carousel/IMG_5996.JPG",
  "/img/carousel/IMG_6003.JPG",
  "/img/carousel/IMG_6004.JPG",
  "/img/carousel/IMG_6006.JPG",
  "/img/carousel/IMG_6013.PNG",
  "/img/carousel/IMG_6014.JPG",
  "/img/carousel/IMG_6015.PNG",
];

const currentIndex = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

const selectItem = (index: number) => {
  currentIndex.value = index;
  restartTimer();
};

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const restartTimer = () => {
  if (timer !== undefined) clearInterval(timer);
  timer = setInterval(nextItem, 3000);
};

onMounted(() => restartTimer());
onBeforeUnmount(() => {
  if (timer !== undefined) clearInterval(timer);
});
</script>

<template>
  <section id="transformation" class="py-12 sm:py-16 md:py-20 bg-white">
    <div class="container mx-auto px-4">

      <!-- Cabeçalho -->
      <div class="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          {{ t("transformation.title") }}
        </h2>
        <h3 class="text-lg sm:text-xl font-semibold text-accent-600 mb-2">
          {{ t("transformation.subtitle") }}
        </h3>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          {{ t("transformation.description") }}
        </p>
      </div>

      <!-- Layout: Vídeo esquerda | Carrossel direita -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-10 items-start">

        <!-- Vídeo (esquerda) -->
        <div class="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mx-0">
          <div class="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              class="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/6E9rRXFuGS4?rel=0&modestbranding=1&playsinline=1"
              title="Transformação de Porto Belo e Itapema"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Carrossel (direita) -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] sm:h-[400px] lg:h-[530px] bg-gray-900">
          <div
            v-for="(img, idx) in images"
            :key="img"
            class="absolute inset-0 transition-opacity duration-700"
            :class="idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
          >
            <img :src="img" :alt="`Foto ${idx + 1}`" class="w-full h-full object-cover" />
          </div>

          <!-- Dots -->
          <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
            <button
              v-for="(_, index) in images"
              :key="index"
              @click="selectItem(index)"
              class="transition-all duration-300"
              :class="currentIndex === index
                ? 'w-6 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'"
              :aria-label="`Slide ${index + 1}`"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

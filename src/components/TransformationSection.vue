<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

// Imagens do carrossel — pasta /img/carousel
const carouselImages = [
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

// Accordion — independente do carrossel
const items = computed(() => {
  const data = tm("transformation.items") as Record<string, any>;
  return Object.keys(data).map((key) => ({
    key,
    emoji: data[key].emoji,
    title: data[key].title,
    bullets: data[key].bullets as string[],
  }));
});

// Estado do carrossel
const currentIndex = ref(0);
let carouselTimer: ReturnType<typeof setInterval> | undefined;

const selectImage = (index: number) => {
  currentIndex.value = index;
  restartCarousel();
};

const restartCarousel = () => {
  if (carouselTimer !== undefined) clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselImages.length;
  }, 3000);
};

// Estado do accordion — independente
const openIndex = ref(0);

const toggleAccordion = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};

onMounted(() => restartCarousel());
onBeforeUnmount(() => {
  if (carouselTimer !== undefined) clearInterval(carouselTimer);
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

      <!-- Layout 3 colunas: Vídeo | Carrossel | Accordion -->
      <div class="grid grid-cols-1 lg:grid-cols-[260px_2fr_1fr] gap-5 lg:gap-6 items-start">

        <!-- Vídeo (esquerda) -->
        <div class="w-full max-w-xs mx-auto lg:max-w-none lg:mx-0">
          <div class="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              class="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/p0lOxPIAfAk?rel=0&modestbranding=1&playsinline=1"
              title="Transformação de Porto Belo e Itapema"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Carrossel (meio) -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[380px] lg:h-[462px] bg-gray-900">
          <div
            v-for="(src, idx) in carouselImages"
            :key="src"
            class="absolute inset-0 transition-opacity duration-700"
            :class="idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
          >
            <img :src="src" alt="Porto Belo" class="w-full h-full object-cover" />
          </div>

          <!-- Dots -->
          <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20 flex-wrap px-4">
            <button
              v-for="(_, index) in carouselImages"
              :key="index"
              @click="selectImage(index)"
              class="transition-all duration-300"
              :class="currentIndex === index
                ? 'w-6 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'"
              :aria-label="`Slide ${index + 1}`"
            />
          </div>
        </div>

        <!-- Accordion (direita) -->
        <div class="flex flex-col gap-2">
          <div
            v-for="(item, idx) in items"
            :key="item.key"
            class="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            :class="openIndex === idx ? 'shadow-md' : ''"
          >
            <!-- Header -->
            <button
              @click="toggleAccordion(idx)"
              class="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-200"
              :class="openIndex === idx ? 'bg-primary-50' : 'bg-white hover:bg-gray-50'"
            >
              <div class="flex items-center gap-2">
                <span class="text-base leading-none">{{ item.emoji }}</span>
                <span
                  class="text-xs sm:text-sm font-semibold leading-tight"
                  :class="openIndex === idx ? 'text-primary-700' : 'text-gray-800'"
                >
                  {{ item.title }}
                </span>
              </div>
              <svg
                class="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300"
                :class="openIndex === idx ? 'rotate-180 text-primary-600' : 'text-gray-400'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Conteúdo -->
            <div v-show="openIndex === idx" class="px-4 pb-3 pt-1 border-t border-gray-100 bg-white">
              <ul class="space-y-1">
                <li
                  v-for="(bullet, i) in item.bullets"
                  :key="i"
                  class="flex items-start gap-2 text-xs text-gray-600"
                >
                  <span class="text-accent-500 mt-0.5 flex-shrink-0 font-bold">
                    {{ bullet.startsWith('✔️') ? '' : '›' }}
                  </span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

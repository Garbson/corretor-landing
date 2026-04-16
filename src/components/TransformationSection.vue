<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const images = [
  // 🌆 Infraestrutura urbana - avenida/obras
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  // 🚗 Mobilidade e acesso - rodovia/BR
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  // 🌊 Turismo e orla - praia/píer
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  // 🌳 Qualidade de vida e lazer - parque/natureza
  "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
  // 🏙️ Desenvolvimento econômico - construção/skyline
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
  // 📊 O que isso significa - gráficos/crescimento
  "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1200&q=80",
];

const items = computed(() => {
  const data = tm("transformation.items") as Record<string, any>;
  return Object.keys(data).map((key, idx) => ({
    key,
    emoji: data[key].emoji,
    title: data[key].title,
    bullets: data[key].bullets as string[],
    image: images[idx] ?? images[0],
  }));
});

const currentIndex = ref(0);
let timer: number | undefined;

const nextItem = () => {
  const total = items.value.length;
  currentIndex.value =
    currentIndex.value < total - 1 ? currentIndex.value + 1 : 0;
};

const startAutoplay = () => {
  stopAutoplay();
  timer = window.setInterval(nextItem, 3000);
};

const stopAutoplay = () => {
  if (timer !== undefined) {
    clearInterval(timer);
    timer = undefined;
  }
};

const selectItem = (index: number) => {
  currentIndex.value = index;
  startAutoplay(); // reinicia contagem ao clicar
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<template>
  <section id="transformation" class="py-12 sm:py-16 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {{ t("transformation.title") }}
        </h2>
        <h3
          class="text-lg sm:text-xl md:text-2xl font-semibold text-accent-600 mb-3"
        >
          {{ t("transformation.subtitle") }}
        </h3>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          {{ t("transformation.description") }}
        </p>
      </div>

      <!-- Layout: Vídeo à esquerda + Carrossel à direita (desktop) / empilhado (mobile) -->
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 sm:gap-8 lg:gap-10 items-start"
      >
        <!-- Área do Vídeo (YouTube Shorts) -->
        <div
          class="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:mx-0"
        >
          <div
            class="relative w-full aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
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

        <!-- Carrossel (autoplay, sem setas) -->
        <div class="relative">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[500px] lg:h-[675px] bg-gray-900"
          >
            <div
              v-for="(item, idx) in items"
              v-show="idx === currentIndex"
              :key="item.key"
              class="absolute inset-0"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/60"></div>

              <div
                class="relative h-full p-6 sm:p-8 md:p-10 pb-14 sm:pb-16 text-white overflow-y-auto"
              >
                <div class="text-4xl sm:text-5xl mb-3">{{ item.emoji }}</div>
                <h3
                  class="text-xl sm:text-2xl md:text-3xl font-bold mb-5 tracking-wide"
                >
                  {{ item.title }}
                </h3>
                <ul class="space-y-2 sm:space-y-3">
                  <li
                    v-for="(bullet, i) in item.bullets"
                    :key="i"
                    class="flex items-start gap-2 text-sm sm:text-base text-white/95"
                  >
                    <span
                      v-if="!bullet.startsWith('✔️')"
                      class="text-accent-400 mt-1"
                      >•</span
                    >
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Indicadores (bolinhas) sobrepostos na imagem -->
            <div
              class="absolute bottom-4 sm:bottom-5 left-0 right-0 z-10 flex justify-center gap-2"
            >
              <button
                v-for="(_, index) in items"
                :key="index"
                @click="selectItem(index)"
                class="transition-all duration-300"
                :class="[
                  currentIndex === index
                    ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-white'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80',
                ]"
                style="border-radius: 9999px"
                :aria-label="`Ir para slide ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

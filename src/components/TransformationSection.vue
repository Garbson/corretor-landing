<script setup lang="ts">
import { ref, computed } from "vue";
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

const previousItem = () => {
  const total = items.value.length;
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : total - 1;
};

const nextItem = () => {
  const total = items.value.length;
  currentIndex.value = currentIndex.value < total - 1 ? currentIndex.value + 1 : 0;
};
</script>

<template>
  <section id="transformation" class="py-12 sm:py-16 md:py-20 bg-gray-50">
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

      <div class="relative max-w-5xl mx-auto">
        <button
          @click="previousItem"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-700 text-primary-700 hover:text-white w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -ml-4 sm:-ml-6 lg:-ml-8"
          aria-label="Anterior"
        >
          <svg
            class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7"
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
          @click="nextItem"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-700 text-primary-700 hover:text-white w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -mr-4 sm:-mr-6 lg:-mr-8"
          aria-label="Próximo"
        >
          <svg
            class="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7"
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

        <div class="px-6 sm:px-10 lg:px-14">
          <div
            v-for="(item, idx) in items"
            v-show="idx === currentIndex"
            :key="item.key"
            class="relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px] sm:min-h-[500px] bg-gray-900"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/60"></div>

            <div class="relative p-6 sm:p-10 lg:p-12 text-white">
              <div class="text-4xl sm:text-5xl mb-3">{{ item.emoji }}</div>
              <h3 class="text-xl sm:text-2xl md:text-3xl font-bold mb-5 tracking-wide">
                {{ item.title }}
              </h3>
              <ul class="space-y-2 sm:space-y-3">
                <li
                  v-for="(bullet, i) in item.bullets"
                  :key="i"
                  class="flex items-start gap-2 text-sm sm:text-base text-white/95"
                >
                  <span v-if="!bullet.startsWith('✔️')" class="text-accent-400 mt-1">•</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(_, index) in items"
            :key="index"
            @click="currentIndex = index"
            class="transition-all duration-300"
            :class="[
              currentIndex === index
                ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-primary-700'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-400 hover:bg-gray-500',
            ]"
            style="border-radius: 9999px"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

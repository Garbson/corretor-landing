<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const items = [
  {
    key: "properties",
    icon: "house",
  },
  {
    key: "launches",
    icon: "building",
  },
  {
    key: "satisfaction",
    icon: "check",
  },
];
</script>

<template>
  <section
    class="relative py-16 sm:py-20 md:py-24 bg-cover bg-center"
    style="background-image: url('/img/bg2.jpeg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>

    <div class="relative container mx-auto px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 max-w-6xl mx-auto divide-y md:divide-y-0 md:divide-x divide-white/20"
      >
        <div
          v-for="(item, idx) in items"
          :key="item.key"
          class="flex items-center justify-center gap-5 sm:gap-6 py-4 md:py-0 md:px-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200 + idx * 150"
        >
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center flex-shrink-0"
          >
            <svg
              v-if="item.icon === 'house'"
              class="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <svg
              v-else-if="item.icon === 'building'"
              class="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <svg
              v-else
              class="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div class="text-white">
            <div class="flex items-start gap-1">
              <span class="text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                {{ t(`statsBanner.${item.key}.value`) }}
              </span>
              <span class="text-xl sm:text-2xl text-accent-400 font-semibold mt-1">
                {{ t(`statsBanner.${item.key}.suffix`) }}
              </span>
            </div>
            <p class="text-sm sm:text-base text-gray-200 mt-2">
              {{ t(`statsBanner.${item.key}.label`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

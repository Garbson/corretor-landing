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
  <div
    class="relative bg-cover bg-center overflow-hidden"
    :style="{ backgroundImage: `url('/img/bg2.jpeg')` }"
  >
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative py-8 sm:py-10 md:py-12 px-4">
      <div class="grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-white/20">
        <div
          v-for="(item, idx) in items"
          :key="item.key"
          class="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 px-1 sm:px-2"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200 + idx * 150"
        >
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/80 flex items-center justify-center flex-shrink-0"
          >
            <svg
              v-if="item.icon === 'house'"
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
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
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
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
              class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
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

          <div class="text-white leading-none">
            <div class="flex items-baseline justify-center gap-0.5">
              <span class="text-3xl sm:text-4xl md:text-5xl font-bold">
                {{ t(`statsBanner.${item.key}.value`) }}
              </span>
              <span
                v-if="t(`statsBanner.${item.key}.suffix`)"
                class="text-lg sm:text-xl md:text-2xl text-white font-semibold"
              >
                {{ t(`statsBanner.${item.key}.suffix`) }}
              </span>
            </div>
            <p class="text-xs sm:text-sm md:text-base text-gray-200 mt-1 leading-tight">
              {{ t(`statsBanner.${item.key}.label`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

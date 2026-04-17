<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div
    class="marquee-wrapper relative bg-gradient-to-r from-primary-700 via-primary-950 to-primary-700 border-y border-primary-800 overflow-hidden"
  >
    <div class="marquee-track py-3 sm:py-4">
      <div class="marquee-group">
        <span
          v-for="n in 10"
          :key="`a-${n}`"
          class="marquee-item text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide inline-flex items-center gap-3"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5 text-accent-300 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          {{ t("marquee.message") }}
        </span>
      </div>
      <div class="marquee-group" aria-hidden="true">
        <span
          v-for="n in 10"
          :key="`b-${n}`"
          class="marquee-item text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide inline-flex items-center gap-3"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5 text-accent-300 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          {{ t("marquee.message") }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 35s linear infinite;
  will-change: transform;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.marquee-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .marquee-item {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>

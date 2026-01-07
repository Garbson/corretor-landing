<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section
    id="about"
    class="relative py-8 sm:py-12 bg-gradient-to-b from-white via-gray-50 to-white"
  >
    <div class="container mx-auto px-4">
      <!-- Badge and Title -->
      <div class="text-center mb-6">
        <div class="inline-block mb-4">
          <span
            class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-3 py-1.5 rounded-full text-xs font-semibold"
          >
            {{ t("about.badge") }}
          </span>
        </div>
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          {{ t("about.title") }}
        </h2>
      </div>

      <!-- Background Image for Mobile -->
      <div class="relative rounded-lg overflow-hidden mb-6">
        <img class="h-[280px] w-full object-cover" src="/img/bg2.jpeg" alt="" />
        <!-- Overlay Shadow -->
        <div class="absolute inset-0 bg-black/50"></div>
        <!-- Text inside background image -->
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div class="text-center text-white max-w-sm">
            <h3 class="text-base font-semibold mb-3">
              {{ t("about.subtitle") }}
            </h3>
            <p class="text-sm leading-relaxed mb-4">
              {{ t("about.description") }}
            </p>
            <button
              @click="scrollToContact"
              class="bg-gradient-to-r from-primary-700 to-primary-950 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
            >
              {{ t("hero.cta") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
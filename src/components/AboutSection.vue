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
    class="relative isolate py-12 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
  >
    <!-- Background Image Positioned -->
    <div
      class="absolute bottom-[80px] left-1/2 rounded-lg transform -translate-x-1/2 z-0 w-[90%] overflow-hidden"
    >
      <img class="h-[450px] w-full object-cover" src="/img/bg2.jpeg" alt="" />
      <!-- Overlay Shadow -->
      <div class="absolute inset-0 bg-black/50 rounded-lg"></div>
      <!-- Text inside background image -->
      <div class="absolute inset-0 z-20 flex items-start">
        <div
          class="px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 max-w-3xl text-left"
        >
          <h3 class="text-lg lg:text-xl font-semibold text-white mb-3">
            {{ t("about.subtitle") }}
          </h3>
          <p class="text-base lg:text-lg text-white leading-relaxed mb-6">
            {{ t("about.description") }}
          </p>
          <button
            @click="scrollToContact"
            class="group relative bg-gradient-to-r from-primary-700 to-primary-950 text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-primary-700/30 transform hover:scale-105 transition-all duration-300"
          >
            <span class="relative flex items-center justify-center">
              {{ t("hero.cta") }}
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="relative z-20 container mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-top">
        <!-- Content Above -->
        <div class="relative z-30 py-24">
          <div class="inline-block mb-4 mt-10 sm:-mt-12 md:-mt-14">
            <span
              class="bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {{ t("about.badge") }}
            </span>
          </div>
          <p class="text-2xl lg:text-4xl font-bold text-gray-900">
            {{ t("about.title") }}
          </p>
          <!-- Texto e botão foram movidos para dentro da imagem de background -->
        </div>

        <!-- Image/Visual -->
        <div class="relative z-[100]">
          <div class="relative">
            <!-- Professional Photo Placeholder -->
            <div
              class="rounded-3xl lg:h-[700px] w-full max-w-[800px] mx-auto flex items-center justify-center relative overflow-hidden"
            >
              <div class="absolute inset-0">
                <img
                  class="object-cover w-full h-full"
                  src="/img/gut.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

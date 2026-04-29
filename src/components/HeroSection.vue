<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppNavbar from "./AppNavbar.vue";

const { t } = useI18n();

const whatsappNumber = "5547989141108";
const whatsappMessage = () => encodeURIComponent(t("hero.whatsappMessage"));

const openWhatsApp = () => {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage()}`,
    "_blank"
  );
};
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20"
  >
    <!-- Navbar incluído na Hero Section -->
    <AppNavbar />

    <!-- Background Video (desktop) -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover hidden sm:block"
    >
      <source
        src="https://res.cloudinary.com/dvuwndt7x/video/upload/v1767096322/gut_hwhh2d.mov"
        type="video/mp4"
      />
    </video>

    <!-- Background Image (mobile) -->
    <img
      src="/img/mobile.jpg"
      alt="Gutthierry Mariano Corretor"
      class="absolute inset-0 w-full h-full object-cover sm:hidden"
    />

    <!-- Video Overlay Shadow -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Overlay para profundidade -->
    <div class="absolute inset-0 bg-black/20"></div>

    <!-- Animated Shapes com gradientes - otimizado para mobile -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-bounce-slow"
      ></div>
      <div
        class="absolute top-20 sm:top-40 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-bounce-slow delay-1000"
      ></div>
      <div
        class="absolute bottom-16 sm:bottom-32 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-br from-primary-500/25 to-accent-500/25 rounded-full blur-3xl animate-bounce-slow delay-500"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center mt-10">
      <div class="mx-auto">
        <!-- Hero Badge -->
        <div class="flex justify-center h-[250px] w-full">
          <img class="h-full" src="/img/LogoGW.svg" alt="" />
        </div>

        <!-- Hero Title -->
        <h1
          class="font-logo text-1xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 md:mb-2 animate-fade-in-up"
        >
          <span class="inline font-thin"
            >{{ t("hero.title").split(" ")[0] }}
            {{ t("hero.title").split(" ")[1] }}</span
          >
          <span class="block font-thin text-white">
            {{ t("hero.title").split(" ").slice(2).join(" ") }}
          </span>
        </h1>

        <!-- Hero Subtitle -->
        <p
          class="font-logo font-thin text-base font-bold sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4"
        >
          {{ t("hero.subtitle") }}
        </p>

        <!-- Hero CTAs -->
        <div
          class="flex flex-col sm:flex-row justify-center items-stretch sm:items-center mb-5 md:mb-5 animate-scale-in px-4"
        >
          <a
            :href="`https://wa.me/5547989141108?text=${whatsappMessage()}`"
            target="_blank"
            class="group relative animate-pulse-wpp bg-gradient-to-r from-green-500 to-green-700 text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-green-700/50 transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto inline-flex items-center justify-center"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <span class="relative flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              {{ t("hero.cta") }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

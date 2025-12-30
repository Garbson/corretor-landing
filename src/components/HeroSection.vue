<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppNavbar from "./AppNavbar.vue";

const { t } = useI18n();

const whatsappNumber = "5547989141108";
const whatsappMessage = () => encodeURIComponent(t("hero.whatsappMessage"));

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

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
    class="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
  >
    <!-- Navbar incluído na Hero Section -->
    <AppNavbar />

    <!-- Background Gradient Animado -->
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source
        src="https://res.cloudinary.com/dvuwndt7x/video/upload/v1767096322/gut_hwhh2d.mov"
        type="video/mp4"
      />
    </video>

    <!-- Video Overlay Shadow -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Overlay para profundidade -->
    <div class="absolute inset-0 bg-black/20"></div>

    <!-- Animated Shapes com gradientes -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-3xl animate-bounce-slow"
      ></div>
      <div
        class="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-bounce-slow delay-1000"
      ></div>
      <div
        class="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-500/25 to-accent-500/25 rounded-full blur-3xl animate-bounce-slow delay-500"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center mt-10">
      <div class="mx-auto">
        <!-- Hero Badge -->
        <div class="flex justify-center h-[250px] w-full">
          <img class="h-full" src="/img/logoGW.svg" alt="" />
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
          <button
            @click="scrollToContact"
            class="group relative bg-gradient-to-r from-primary-700 to-primary-950 text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-primary-700/50 transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <span class="relative flex items-center justify-center">
              {{ t("hero.cta") }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

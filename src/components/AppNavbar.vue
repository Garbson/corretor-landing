<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (lang: string) => {
  locale.value = lang;
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed w-full top-0 z-[9999] transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-primary-900/5 border-b border-gray-100'
        : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-3 sm:px-4 lg:px-8">
      <div class="flex justify-between items-center h-16 sm:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            class="h-12 sm:h-16"
            :src="
              isScrolled
                ? './public/img/LogoSolo.svg'
                : './public/img/logoSoloW.svg'
            "
            alt=""
          />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          <button
            @click="scrollToSection('hero')"
            :class="[
              'px-3 lg:px-4 py-2 transition-all duration-300 font-medium rounded-lg text-sm lg:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.home") }}
          </button>
          <button
            @click="scrollToSection('about')"
            :class="[
              'px-3 lg:px-4 py-2 transition-all duration-300 font-medium rounded-lg text-sm lg:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.about") }}
          </button>
          <button
            @click="scrollToSection('services')"
            :class="[
              'px-3 lg:px-4 py-2 transition-all duration-300 font-medium rounded-lg text-sm lg:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.services") }}
          </button>
          <button
            @click="scrollToSection('testimonials')"
            :class="[
              'px-3 lg:px-4 py-2 transition-all duration-300 font-medium rounded-lg text-sm lg:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.testimonials") }}
          </button>
          <button
            @click="scrollToSection('faq')"
            :class="[
              'px-3 lg:px-4 py-2 transition-all duration-300 font-medium rounded-lg text-sm lg:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            FAQ
          </button>
          <button
            @click="scrollToSection('contact')"
            class="ml-2 lg:ml-4 bg-gradient-to-r from-primary-700 to-primary-950 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl hover:shadow-lg hover:shadow-primary-700/30 transition-all duration-300 font-semibold hover:scale-105 text-sm lg:text-base"
          >
            {{ t("nav.contact") }}
          </button>
        </div>

        <!-- Language Selector & Mobile Menu Button -->
        <div class="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          <!-- Language Selector -->
          <div class="relative hidden sm:block">
            <select
              v-model="locale"
              @change="changeLanguage(locale)"
              :class="[
                'backdrop-blur-md border rounded-lg px-2 lg:px-3 pr-6 lg:pr-8 py-1.5 lg:py-2 text-xs lg:text-sm font-medium focus:outline-none transition-all cursor-pointer',
                isScrolled
                  ? 'bg-white/50 border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 hover:bg-white text-gray-700'
                  : 'bg-white/10 border-white/30 focus:border-accent-300 focus:ring-2 focus:ring-white/20 hover:bg-white/20 text-white',
              ]"
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            :class="[
              'md:hidden p-2 rounded-lg transition-all',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        :class="[
          'md:hidden border-t animate-fade-in',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-gray-100'
            : 'bg-black/30 backdrop-blur-md border-white/20',
        ]"
      >
        <div class="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1 sm:space-y-2">
          <!-- Mobile Language Selector -->
          <div class="sm:hidden mb-3">
            <select
              v-model="locale"
              @change="changeLanguage(locale)"
              :class="[
                'w-full backdrop-blur-md border rounded-lg px-3 pr-8 py-2 text-sm font-medium focus:outline-none transition-all cursor-pointer',
                isScrolled
                  ? 'bg-white/50 border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 hover:bg-white text-gray-700'
                  : 'bg-white/10 border-white/30 focus:border-accent-300 focus:ring-2 focus:ring-white/20 hover:bg-white/20 text-white',
              ]"
            >
              <option value="pt">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>
          </div>

          <button
            @click="scrollToSection('hero')"
            :class="[
              'block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all font-medium text-sm sm:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.home") }}
          </button>
          <button
            @click="scrollToSection('about')"
            :class="[
              'block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all font-medium text-sm sm:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.about") }}
          </button>
          <button
            @click="scrollToSection('services')"
            :class="[
              'block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all font-medium text-sm sm:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.services") }}
          </button>
          <button
            @click="scrollToSection('testimonials')"
            :class="[
              'block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all font-medium text-sm sm:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.testimonials") }}
          </button>
          <button
            @click="scrollToSection('faq')"
            :class="[
              'block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all font-medium text-sm sm:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            FAQ
          </button>
          <button
            @click="scrollToSection('contact')"
            class="block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-primary-700 to-primary-950 text-white rounded-lg mt-3 sm:mt-4 font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
          >
            {{ t("nav.contact") }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

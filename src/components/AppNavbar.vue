<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isLangOpen = ref(false);

const languages = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
];

const currentLang = () => languages.find((l) => l.code === locale.value) ?? languages[0];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeLanguage = (lang: string) => {
  locale.value = lang;
  router.replace(`/${lang}`);
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
                ? '/img/LogoSolo.svg'
                : '/img/logoSoloW.svg'
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
          <!-- <button
            @click="scrollToSection('services')"
            :class="[
              'px-3 lg:px-4 py-2 transition-all duration-300 font-medium rounded-lg text-sm lg:text-base',
              isScrolled
                ? 'text-gray-700 hover:text-primary-950 hover:bg-primary-50'
                : 'text-white hover:text-accent-300 hover:bg-white/10',
            ]"
          >
            {{ t("nav.services") }}
          </button> -->
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
                'appearance-none backdrop-blur-md border rounded-xl px-2 lg:px-3 pr-8 lg:pr-9 py-1.5 lg:py-2 text-xs lg:text-sm font-medium focus:outline-none transition-all cursor-pointer',
                isScrolled
                  ? 'bg-white/50 border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 hover:bg-white text-gray-700'
                  : 'bg-white/10 border-white/30 focus:border-accent-300 focus:ring-2 focus:ring-white/20 hover:bg-white/20 text-white',
              ]"
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
              <option value="fr">🇫🇷 FR</option>
            </select>
            <svg
              class="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
              :class="isScrolled ? 'text-gray-500' : 'text-white/90'"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
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
        <div
          class="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1 sm:space-y-2"
        >
          <!-- Mobile Language Selector -->
          <div class="sm:hidden mb-3 relative">
            <button
              @click="isLangOpen = !isLangOpen"
              :class="[
                'w-full flex items-center justify-between border rounded-lg px-4 py-3.5 text-base font-medium transition-all',
                isScrolled
                  ? 'bg-white/50 border-gray-200 text-gray-700'
                  : 'bg-white/10 border-white/30 text-white',
              ]"
            >
              <span>{{ currentLang().flag }} {{ currentLang().label }}</span>
              <svg
                class="h-4 w-4 transition-transform"
                :class="isLangOpen ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-if="isLangOpen"
              :class="[
                'absolute z-50 w-full mt-1 rounded-xl overflow-hidden shadow-xl border',
                isScrolled ? 'bg-white border-gray-100' : 'bg-gray-900 border-white/10',
              ]"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code); isLangOpen = false"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-4 text-base font-medium transition-all',
                  locale === lang.code
                    ? (isScrolled ? 'bg-primary-50 text-primary-950' : 'bg-white/10 text-white')
                    : (isScrolled ? 'text-gray-700 hover:bg-gray-50' : 'text-white/80 hover:bg-white/10'),
                ]"
              >
                <span class="text-2xl">{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
              </button>
            </div>
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

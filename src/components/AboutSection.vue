<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section
    id="about"
    class="relative py-8 sm:py-12 md:py-16 lg:pt-32 xl:pt-40 bg-white overflow-hidden"
  >
    <div class="container mx-auto px-4 lg:px-8 relative">
      <!-- Cabeçalho: Badge + Título (constrained pra não ficar embaixo do Gut) -->
      <div
        class="mb-6 sm:mb-8 lg:pr-[380px] xl:pr-[460px]"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="200"
      >
        <div class="mb-3 sm:mb-4">
          <span
            class="inline-block bg-gradient-to-r from-accent-100 to-primary-100 text-primary-950 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
          >
            {{ t("about.badge") }}
          </span>
        </div>
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
        >
          {{ t("about.title") }}
        </h2>
      </div>

      <!-- Card full-width com imagem de fundo + texto + botão -->
      <div
        class="relative rounded-2xl overflow-hidden shadow-xl min-h-[340px] sm:min-h-[300px] lg:min-h-[300px] z-0"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="300"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="/img/bg2.jpeg"
          alt=""
        />
        <div class="absolute inset-0 bg-black/55"></div>

        <div
          class="relative h-full flex flex-col justify-center p-6 sm:p-8 md:p-10 max-w-xl"
        >
          <h3
            v-if="t('about.subtitle')"
            class="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3"
          >
            {{ t("about.subtitle") }}
          </h3>
          <p
            class="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-5 sm:mb-6"
          >
            {{ t("about.description") }}
          </p>
          <a
            href="https://wa.me/5547989141108?text=Olá Guitierry! Gostaria de consultar as melhores opções de investimento no litoral catarinense."
            target="_blank"
            class="group relative animate-pulse-wpp bg-gradient-to-r from-green-500 to-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg md:text-xl hover:shadow-2xl hover:shadow-green-700/30 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center self-start"
          >
            <span class="relative flex items-center justify-center gap-2">
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"
                />
              </svg>
              {{ t("hero.cta") }}
            </span>
          </a>
        </div>
      </div>

      <!-- Foto do Gutthierry: ancorada no rodapé, altura natural definida pela imagem -->
      <div
        class="hidden lg:flex absolute bottom-0 right-4 lg:right-8 w-[440px] xl:w-[560px] z-10 pointer-events-none justify-end items-end"
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="400"
      >
        <img
          class="w-full h-auto max-h-[640px] object-contain object-bottom"
          src="/img/gut.png"
          alt="Gutthierry Mariano"
        />
      </div>
    </div>
  </section>
</template>

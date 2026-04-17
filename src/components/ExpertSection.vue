<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import StatsBannerSection from "./StatsBannerSection.vue";

const { t } = useI18n();

const stats = [
  { value: "agency.stats.sales", label: "agency.stats.salesLabel" },
  { value: "agency.stats.clients", label: "agency.stats.clientsLabel" },
  { value: "agency.stats.brokers", label: "agency.stats.brokersLabel" },
  { value: "agency.stats.countries", label: "agency.stats.countriesLabel" },
];

const benefits = [
  { key: "expert.agency.benefits.item1", icon: "building" },
  { key: "expert.agency.benefits.item2", icon: "calendar" },
  { key: "expert.agency.benefits.item3", icon: "card" },
  { key: "expert.agency.benefits.item4", icon: "arrows" },
  { key: "expert.agency.benefits.item5", icon: "phone" },
];

const photos = [
  "/img/gut/gut02.JPG",
  "/img/gut/gut03.JPG",
  "/img/gut/gut04.JPEG",
  "/img/gut/gut05.PNG",
];

const currentPhoto = ref(0);
let photoTimer: ReturnType<typeof setInterval> | undefined;

const nextPhoto = () => {
  currentPhoto.value = (currentPhoto.value + 1) % photos.length;
};

const selectPhoto = (index: number) => {
  currentPhoto.value = index;
  restartTimer();
};

const restartTimer = () => {
  if (photoTimer !== undefined) clearInterval(photoTimer);
  photoTimer = setInterval(nextPhoto, 3000);
};

onMounted(() => restartTimer());
onBeforeUnmount(() => {
  if (photoTimer !== undefined) clearInterval(photoTimer);
});
</script>

<template>
  <section id="expert" class="pb-6 sm:pb-8 md:pb-10 bg-primary-100">

    <!-- Faixa de estatísticas — topo, largura total -->
    <StatsBannerSection />

    <div class="container mx-auto px-4 pt-8 sm:pt-10 md:pt-12">

      <!-- Cabeçalho centralizado -->
      <div class="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          {{ t("expert.name") }}
        </h2>
        <p class="text-sm sm:text-base text-primary-600 font-medium mb-1">
          {{ t("expert.subtitle") }}
        </p>
        <h3 class="text-base sm:text-lg md:text-xl text-primary-700 font-bold mb-4 leading-snug">
          {{ t("expert.title") }}
        </h3>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5547989141108?text=Olá Gutthierry! Quero saber mais sobre investimentos imobiliários no litoral catarinense."
            target="_blank"
            class="animate-pulse-wpp flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {{ t("expert.buttons.invest") }}
          </a>
          <a
            href="https://wa.me/5547989141108?text=Olá Gutthierry! Gostaria de uma consultoria sobre investimentos imobiliários."
            target="_blank"
            class="flex items-center justify-center gap-2 border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
            </svg>
            {{ t("expert.buttons.consulting") }}
          </a>
        </div>
      </div>

      <!-- Bloco Novo Global -->
      <div class="max-w-6xl mx-auto">

        <!-- Linha 1: Logo | Tagline -->
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-4 items-center">
          <div class="flex justify-center lg:justify-start">
            <img
              src="/img/LOGO.png"
              alt="Novo Global"
              class="w-52 sm:w-64 md:w-72 h-16 sm:h-20 md:h-24 object-cover object-center"
            />
          </div>
          <div class="flex items-center justify-center lg:justify-start">
            <p class="text-sm sm:text-base text-gray-700 font-medium text-center lg:text-left leading-snug">
              {{ t("expert.agency.tagline") }}
            </p>
          </div>
        </div>

        <!-- Linha 2: Carrossel | Stats + Benefícios -->
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          <!-- Carrossel -->
          <div class="relative w-full rounded-lg shadow-lg overflow-hidden h-[420px] sm:h-[520px] lg:h-[600px]">
            <div
              v-for="(photo, idx) in photos"
              :key="photo"
              class="absolute inset-0 transition-opacity duration-700"
              :class="idx === currentPhoto ? 'opacity-100 z-10' : 'opacity-0 z-0'"
            >
              <img :src="photo" alt="Gutthierry Mariano" class="w-full h-full object-cover" />
            </div>
            <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
              <button
                v-for="(_, idx) in photos"
                :key="idx"
                @click="selectPhoto(idx)"
                class="transition-all duration-300"
                :class="currentPhoto === idx ? 'w-6 h-2 bg-white rounded-full' : 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full'"
              />
            </div>
          </div>

          <!-- Stats + Benefícios -->
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(s, idx) in stats"
                :key="idx"
                class="text-center p-4 border-2 border-green-600/40 rounded-xl bg-white"
              >
                <div class="text-xl sm:text-2xl font-bold text-green-700 mb-1">
                  {{ t(`expert.${s.value}`) }}
                </div>
                <div class="text-xs sm:text-sm text-gray-600">
                  {{ t(`expert.${s.label}`) }}
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl p-5 shadow-sm">
              <h4 class="text-base sm:text-lg font-bold text-green-700 mb-4 text-center sm:text-left">
                {{ t("expert.agency.benefits.title") }}
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="b in benefits"
                  :key="b.key"
                  class="flex items-center gap-3 text-sm sm:text-base text-gray-700"
                >
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="b.icon === 'building'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    <path v-else-if="b.icon === 'calendar'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    <path v-else-if="b.icon === 'card'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    <path v-else-if="b.icon === 'arrows'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span class="font-medium">{{ t(b.key) }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AboutSection from '../components/AboutSection.vue'
import AboutSectionMobile from '../components/AboutSectionMobile.vue'
import ContactSection from '../components/ContactSection.vue'
import ExpertSection from '../components/ExpertSection.vue'
import FaqSection from '../components/FaqSection.vue'
import HeroSection from '../components/HeroSection.vue'
import InvestmentSection from '../components/InvestmentSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import StatsBannerSection from '../components/StatsBannerSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import TransformationSection from '../components/TransformationSection.vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024 // lg breakpoint
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection v-if="!isMobile" />
    <AboutSectionMobile v-if="isMobile" />
    <InvestmentSection />
    <TransformationSection />
    <ExpertSection />
    <StatsBannerSection />
    <ProcessSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>
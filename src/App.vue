<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

const { locale } = useI18n()

const initScrollAnimation = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach(el => {
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

    if (isInViewport) {
      // If already in viewport, make it visible immediately
      el.classList.add('visible')
    } else {
      // Otherwise, observe it
      observer.observe(el)
    }
  })
}

onMounted(() => {
  // Use setTimeout to ensure DOM is fully rendered
  setTimeout(() => {
    initScrollAnimation()
  }, 100)
})
</script>

<template>
  <div id="app" class="min-h-screen bg-white">
    <AppNavbar />
    <main class="pt-20">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
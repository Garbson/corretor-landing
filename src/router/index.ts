import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "../i18n";

const localeMap: Record<string, string> = {
  "/pt": "pt",
  "/br": "pt",
  "/en": "en",
  "/es": "es",
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pt",
      name: "home-pt",
      component: HomeView,
    },
    {
      path: "/br",
      name: "home-br",
      component: HomeView,
    },
    {
      path: "/en",
      name: "home-en",
      component: HomeView,
    },
    {
      path: "/es",
      name: "home-es",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "instant" };
    }
  },
});

router.beforeEach((to) => {
  const locale = localeMap[to.path];
  if (locale) {
    (i18n.global.locale as any).value = locale;
  }
});

export default router;

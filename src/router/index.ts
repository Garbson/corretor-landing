import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "../i18n";

const langToLocale: Record<string, string> = {
  pt: "pt",
  br: "pt",
  en: "en",
  es: "es",
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:lang(pt|br|en|es)?",
      name: "home",
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
  const lang = to.params.lang as string | undefined;
  const locale = lang ? langToLocale[lang] : "pt";
  (i18n.global.locale as any).value = locale ?? "pt";
});

export default router;

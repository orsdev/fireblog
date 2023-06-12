import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/pages/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeVue,
      meta: {
        protected: false,
        title: 'Home'
      },
    },
  ],
});

router.beforeEach((to, from) => {
  document.title = `${to.meta?.title} | Fireblog` ?? 'Fireblog'
})

export default router;

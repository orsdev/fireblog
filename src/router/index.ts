import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/pages/home.vue";
import BlogVue from "@/pages/blogs.vue";
import LoginVue from "@/pages/login.vue";
import RegisterVue from "@/pages/register.vue";

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
    {
      path: "/blogs",
      name: "blogs",
      component: BlogVue,
      meta: {
        protected: false,
        title: 'Blog'
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginVue,
      meta: {
        protected: false,
        title: 'Log in'
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterVue,
      meta: {
        protected: false,
        title: 'Register'
      },
    },
  ],
});

router.beforeEach((to, from) => {
  document.title = `${to.meta?.title} | Fireblog` ?? 'Fireblog'
})

export default router;

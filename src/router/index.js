import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/debounce",
      name: "debounce",
      component: () => import("../views/debounceView.vue"),
    },
    {
      path: "/longPress",
      name: "longPress",
      component: () => import("../views/longPress.vue"),
    },
    {
      path: "/lazyLoad",
      name: "lazyLoad",
      component: () => import("../views/lazyLoad.vue"),
    },
    {
      path: "/permission",
      name: "permission",
      component: () => import("../views/permissionView.vue"),
    },
  ],
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/home/Home"),
    children: [
      {
        path: "/",
        redirect: "pop",
      },
      {
        path: "pop",
        component: () => import("views/home/exhibitions/Pop"),
      },
      {
        path: "new",
        component: () => import("views/home/exhibitions/New"),
      },
      {
        path: "sell",
        component: () => import("views/home/exhibitions/Sell"),
      },
    ],
  },
  {
    path: "/category",
    component: () => import("@/views/category/Category"),
  },
  {
    path: "/cart",
    component: () => import("@/views/cart/Cart"),
  },
  {
    path: "/profile",
    component: () => import("@/views/profile/Profile"),
  },
  {
    path: "/*",
    redirect: "/home",
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;

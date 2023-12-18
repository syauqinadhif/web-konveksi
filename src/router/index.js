import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/produkKaos",
      name: "produkKaos",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukKaos.vue"),
    },
    {
      path: "/produkJaket",
      name: "produkJaket",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukJaket.vue"),
    },
    {
      path: "/produkKemeja",
      name: "produkKemeja",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukKemeja.vue"),
    },
    {
      path: "/produkPolo",
      name: "produkPolo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukPolo.vue"),
    },
    {
      path: "/produkVest",
      name: "produkVest",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukVest.vue"),
    },
    {
      path: "/produkTraining",
      name: "produkTraining",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukTraining.vue"),
    },
    {
      path: "/produkApron",
      name: "produkApron",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukApron.vue"),
    },
    {
      path: "/produkToteBag",
      name: "produkToteBag",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/produk/ProdukToteBag.vue"),
    },
    {
      path: "/portofolio",
      name: "portofolio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/portofolio/Portofolio.vue"),
    },
  ],
});

export default router;

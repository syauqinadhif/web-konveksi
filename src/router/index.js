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
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/produkKaos",
      name: "produkKaos",
      component: () => import("../views/produk/ProdukKaos.vue"),
    },
    {
      path: "/produkJaket",
      name: "produkJaket",
      component: () => import("../views/produk/ProdukJaket.vue"),
    },
    {
      path: "/produkKemeja",
      name: "produkKemeja",
      component: () => import("../views/produk/ProdukKemeja.vue"),
    },
    {
      path: "/produkPolo",
      name: "produkPolo",
      component: () => import("../views/produk/ProdukPolo.vue"),
    },
    {
      path: "/produkVest",
      name: "produkVest",
      component: () => import("../views/produk/ProdukVest.vue"),
    },
    {
      path: "/produkTraining",
      name: "produkTraining",
      component: () => import("../views/produk/ProdukTraining.vue"),
    },
    {
      path: "/produkApron",
      name: "produkApron",
      component: () => import("../views/produk/ProdukApron.vue"),
    },
    {
      path: "/produkToteBag",
      name: "produkToteBag",
      component: () => import("../views/produk/ProdukToteBag.vue"),
    },
    {
      path: "/portofolio",
      name: "portofolio",
      component: () => import("../views/portofolio/Portofolio.vue"),
    },
    {
      path: "/pricelist",
      name: "pricelist",
      component: () => import("../views/harga/Harga.vue"),
    },
    {
      path: "/hubungi",
      name: "Hubungi Kami",
      component: () => import("../views/hubungi/Hubungi.vue"),
    },
  ],
});

export default router;

<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const isNavRoutesActive = ref(false);

const toggleNavRoutes = () => {
  isNavRoutesActive.value = !isNavRoutesActive.value;
};

onMounted(() => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".nav-routes");

  document.addEventListener("click", (e) => {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      isNavRoutesActive.value = false;
    }
  });
});
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1><span>H3S</span>SPORT<span>.</span></h1>
      </div>
      <ul class="nav-routes" :class="{ active: isNavRoutesActive }">
        <RouterLink to="/">Beranda</RouterLink>
        <li class="dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Produk
          </a>
          <div class="dropdown-content" aria-labelledby="navbarDropdown">
            <router-link to="produkKaos" class="dropdown-item">Kaos</router-link>
            <router-link to="produkJaket" class="dropdown-item">Jaket</router-link>
            <router-link to="produkKemeja" class="dropdown-item">Kemeja</router-link>
            <router-link to="produkPolo" class="dropdown-item">Polo</router-link>
            <router-link to="produkVest" class="dropdown-item">Vest</router-link>
            <router-link to="produkTraining" class="dropdown-item">Training</router-link>
            <router-link to="produkApron" class="dropdown-item">Apron</router-link>
            <router-link to="produkToteBag" class="dropdown-item">Tote Bag</router-link>
          </div>
        </li>
        <RouterLink to="/portofolio">Portofolio</RouterLink>
        <RouterLink to="/pricelist">Harga</RouterLink>
        <RouterLink to="/hubungi">Hubungi Kami</RouterLink>
      </ul>
      <div class="navbar-extra">
        <vue-feather
          id="hamburger-menu"
          @click="toggleNavRoutes"
          type="menu"
          class="menu"
        ></vue-feather>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  // background-color: #f8f8f8;
  // background-color: rgba(1, 1, 1, 0.6);
  // opacity: 0.6;
  position: fixed;
  z-index: 99;

  // position:relative;

  nav {
    display: flex;
    align-items: center;
    padding: 0.75rem 3rem 0.1rem;
    text-align: center;
    max-width: none;
    position: fixed;
    background-color: rgba(1, 1, 1, 0.6);

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 0.5rem;

      h1 {
        font-size: 1.3rem;
        font-weight: 600;
        color: #fff;
        font-style: italic;
      }
      span {
        color: #118fbd;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 5px;
      list-style: none;
      margin-bottom: 1rem;
      a {
        text-decoration: none;
        // color: inherit;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        display: inline-block;
        margin: 0 1rem;
        margin-top: 3px;
      }

      a:hover {
        color: #118fbd;
      }

      .dropdown {
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: fixed;
        margin: 0rem -3rem;
        background-color: rgba(1, 1, 1, 0.8);
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown-content a {
        color: #fff;
        padding: 12px;
        // margin-right: 3rem;
        margin-left: 3rem;
        display: flex;
        text-decoration: none;
      }

      .dropdown-content a:hover {
        // background-color: #81c2e5;
        color: #118fbd;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
    }
    .navbar-extra .menu {
      color: #fff;
      // margin: 0 0.5rem;
      // margin-left: auto;
      display: none;
    }
  }

  @media (max-width: 768px) {
    nav {
      .branding {
        h1 {
          font-size: 100%;
        }
      }

      .nav-routes {
        flex-direction: column; // Change to column direction
        align-items: flex-start;
        position: absolute;
        justify-content: flex-start;
        top: 100%;
        right: -100%;
        background-color: hsla(223, 67%, 37%, 0.303);
        width: 50%;
        height: 100vh;
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        /*For Safar*/
        transition: right 0.4s;
        a {
          font-size: 75%;
          color: #fff;
          display: block;
          // margin-top: 0;
          margin: 1.5rem;
          padding: 0.5rem;
        }

        a::after {
          transform-origin: 0 0;
        }

        a:hover::after {
          transform: scaleX(0.2);
        }
      }

      .nav-routes.active {
        right: 0;
      }

      .navbar-extra .menu {
        display: inline-block;
        position: absolute;
        top: 0.65rem;
        right: 2rem;
      }
    }
  }
}
</style>

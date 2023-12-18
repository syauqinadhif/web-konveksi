<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1><span>H3S</span>SPORT<span>.</span></h1>
      </div>
      <ul class="nav-routes">
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
            <router-link to="/produk/jaket" class="dropdown-item">Jaket</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Kemeja</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Polo</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Vest</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Training</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Apron</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Tote Bag</router-link>
          </div>
        </li>
        <RouterLink to="/portofolio">Portofolio</RouterLink>
        <RouterLink to="/about">Harga</RouterLink>
        <RouterLink to="/about">Hubungi Kami</RouterLink>
      </ul>
      <div class="navbar-extra">
        <vue-feather type="menu" class="menu"></vue-feather>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  // background-color: #f8f8f8;
  background-color: rgba(1, 1, 1, 0.6);
  // opacity: 0.6;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  left: 0;

  // position:relative;

  nav {
    display: flex;
    align-items: center;
    padding: 0.75rem 5rem 0.1rem;
    // margin-left: 5rem;
    max-width: none;
    // padding-left: 5rem;
    // padding-right: 5rem;
    // margin-right: 1rem;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;

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
        margin: 0rem -2rem;        
        background-color: rgba(1, 1, 1, 0.8);
        min-width: 160px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown-content a {
        color: #fff;
        padding: 12px 16px;
        display: block;
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
      margin: 0 0.5rem;
      margin-left: auto;
      display: none;
    }
  }
}
</style>

<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1> <span>H3S</span>SPORT<span>.</span></h1>
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
            <router-link to="/produk/kaos" class="dropdown-item">Kaos</router-link>
            <router-link to="/produk/jaket" class="dropdown-item">Jaket</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Kemeja</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Polo</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Vest</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Training</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Apron</router-link>
            <router-link to="/produk/kemeja" class="dropdown-item">Tote Bag</router-link>
          </div>
        </li>
        <RouterLink to="/about">Portofolio</RouterLink>
        <RouterLink to="/about">Harga</RouterLink>
        <RouterLink to="/about">Hubungi Kami</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header {
  // background-color: var(--bg) !important;
  background-color: #1b262c;
  // position:relative;
  // background-color: rgba(1, 1, 1, 0.6);


  nav {
    display: flex;
    align-items: center;
    padding: 0.75rem 1% 0.1rem;

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
        color: #82fdf7;
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
        color: #82fdf7;
      }

      .dropdown {
        display: inline-block;
      }
      .nav-link dropdown-toggle {
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        display: inline-block;
        margin: 0 1rem;
        position: relative;
        margin-top: 2px;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #1b262c;
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
        color: #82fdf7;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
    }
  }
}
</style>

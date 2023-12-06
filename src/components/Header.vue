<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1>H3SSPORT</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/">Beranda</RouterLink>
        <li class="dropdown">
          <router-link to="/produk" class="dropbtn">Produk</router-link>
          <div class="dropdown-content">
            <router-link to="/produk/kaos">Kaos</router-link>
            <router-link to="/produk/jaket">Jaket</router-link>
            <router-link to="/produk/kemeja">Kemeja</router-link>
          </div>
        </li>
        <!-- <RouterLink to="/produk">Produk</RouterLink> -->
        <RouterLink to="/about">Portofolio</RouterLink>
        <RouterLink to="/about">Harga</RouterLink>
        <RouterLink to="/about">Hubungi Kami</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #1b262c;

  nav {
    display: flex;
    align-items: center;
    padding: 0.75rem 2%;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;

      h1 {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
        font-style: italic;
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
        color: #81c2e5;
      }

      a::after {
        content: " ";
        display: block;
        // padding-bottom: 0.5rem;
        border-bottom: 0.1rem solid #169ee7;
        transform: scaleX(0);
        transition: 0.2s linear;
      }

      a:hover::after {
        transform: scaleX(0.75);
      }
      .dropdown {
        display: inline-block;
      }

      .dropbtn {
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
        color: #fff;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }
    }
  }
}
</style>

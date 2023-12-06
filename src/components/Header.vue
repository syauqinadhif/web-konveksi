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
        <RouterLink to="/produk">Produk</RouterLink>
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
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        display: inline-block;
        margin: 0 1rem;
      }

      a:hover {
        color:#1b262c;
      }
    }
  }
}
</style>

<script setup></script>

<template>
  <section class="hero" id="home">
    <main class="content">
      <h1>Dapatkan seragam terbaik, Penuhi kebutuhan Anda.</h1>
      <p>Nikmati pelayanan & hasil produksi berkualitas dari H3SSPORT Konveksi.</p>
      <a href="#" class="cta">Ayo Buat Sekarang!</a>
    </main>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(../assets/hero-bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 0;
  background: linear-gradient(0deg, rgb(6, 6, 6) 1%, rgba(255, 255, 255, 0) 40%);
}

.hero .content {
  padding: 1.4rem 7%;
  max-width: 60rem;
}

.hero .content h1 {
  font-weight: 600;
  font-size: 2.2rem;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  line-height: 1.3;
}

.hero .content p {
  font-size: 1rem;
  margin-top: -0.5rem;
  line-height: 1.4;
  font-weight: 300;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
}

.hero .content .cta {
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #118fbd;
  border-radius: 3rem;
  box-shadow: 1px 1px 3px, rgba(1, 1, 3, 0.5);
}
</style>

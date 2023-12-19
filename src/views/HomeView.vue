<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- Hero Section  -->
  <section class="hero" id="home">
    <main class="content">
      <h1>Dapatkan seragam terbaik, Penuhi kebutuhan Anda.</h1>
      <p>Nikmati pelayanan & hasil produksi berkualitas dari H3SSPORT Konveksi.</p>
      <a href="#" class="cta">Ayo Buat Sekarang!</a>
    </main>
  </section>
  <!-- Hero End -->
  <!-- Slogan Section -->
  <section class="slogan" id="slogan">
    <h1 class="sub-slogan">
      H3S<span>SPORT</span> Konveksi Terbaik <br />
      dengan Review Terbanyak dan Rating Tertinggi
    </h1>
  </section>
  <!-- Slogan End -->
  <!-- Figure Section -->
  <section class="product-figure" id="product-figure">
    <h2>Produk Terbaik Kami</h2>
    <div>
      <div class="row">
        <a href="produkKaos" class="figure-card">
          <img src="../assets/home/kaos.png" alt="kaos" />
          <h3>Kaos</h3>
        </a>
        <a href="produkJaket" class="figure-card">
          <img src="../assets/home/jacket.png" alt="jacket" />
          <h3>Jacket</h3>
        </a>
        <a href="produkKemeja" class="figure-card">
          <img src="../assets/home/kemeja.png" alt="kemeja" />
          <h3>Kemeja</h3>
        </a>
        <a href="produkPolo" class="figure-card">
          <img src="../assets/home/polo.png" alt="polo" />
          <h3>Polo</h3>
        </a>
        <a href="produkVest" class="figure-card">
          <img src="../assets/home/vest.png" alt="vest" />
          <h3>Vest</h3>
        </a>
        <a href="produkTraining" class="figure-card">
          <img src="../assets/home/trining.png" alt="trining" />
          <h3>Training</h3>
        </a>
        <a href="produkApron" class="figure-card">
          <img src="../assets/home/apron.png" alt="apron" />
          <h3>Apron</h3>
        </a>
        <a href="produkToteBag" class="figure-card">
          <img src="../assets/home/totebag.png" alt="totebag" />
          <h3>Tote Bag</h3>
        </a>
      </div>
    </div>
  </section>

  <!-- Figure Section End -->
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(../assets/home/hero-bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .content {
    padding: 1.4rem 7%;
    max-width: 60rem;

    h1 {
      font-weight: 600;
      font-size: 2.2rem;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
      line-height: 1.3;
    }

    p {
      font-size: 1rem;
      margin-top: -0.5rem;
      line-height: 1.4;
      font-weight: 300;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
    }

    .cta {
      text-decoration: none;
      display: inline-block;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: #fff;
      background-color: #118fbd;
      border-radius: 3rem;
      box-shadow: 1px 1px 3px, rgba(1, 1, 3, 0.5);
    }
  }
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

.slogan {
  background-color: black;
  padding: 5rem 7% 5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
    line-height: 1.3;
    color: #fff;
  }
  .sub-slogan span {
    color: #118fbd;
  }
}
.product-figure {
  margin: 3rem 4rem;
  padding: 3rem 2.5%;
  background-color: rgb(233, 233, 233);
  border-radius: 50px;

  h2 {
    color: black;
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    justify-content: center;

    .figure-card {
      text-decoration: none;
      text-align: center;
      padding: 0rem 0rem;
      width: 330px;
      height: 400px;

      h3 {
        color: black;
        font-weight: 600;
        font-size: 1.4rem;
        text-align: center;
        line-height: 1.3;
      }
    }
  }
}
</style>

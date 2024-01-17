<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <body>
    <!-- Hero Section  -->
    <section class="hero" id="home">
      <main class="content">
        <h1>Dapatkan seragam terbaik, Penuhi kebutuhan Anda.</h1>
        <p>Nikmati pelayanan & hasil produksi berkualitas dari H3SSPORT Konveksi.</p>
        <a href="https://wa.me/6281333779776" class="cta">Ayo Buat Sekarang!</a>
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
          <RouterLink to="/produkKaos" class="figure-card">
            <img src="../assets/home/kaos.png" alt="kaos" />
            <h3>Kaos</h3>
          </RouterLink>
          <RouterLink to="/produkJaket" class="figure-card">
            <img src="../assets/home/jacket.png" alt="jacket" />
            <h3>Jacket</h3>
          </RouterLink>
          <RouterLink to="/produkKemeja" class="figure-card">
            <img src="../assets/home/kemeja.png" alt="kemeja" />
            <h3>Kemeja</h3>
          </RouterLink>
          <RouterLink to="/produkPolo" class="figure-card">
            <img src="../assets/home/polo.png" alt="polo" />
            <h3>Polo</h3>
          </RouterLink>
          <RouterLink to="/produkVest" class="figure-card">
            <img src="../assets/home/vest.png" alt="vest" />
            <h3>Vest</h3>
          </RouterLink>
          <RouterLink to="/produkTraining" class="figure-card">
            <img src="../assets/home/trining.png" alt="trining" />
            <h3>Training</h3>
          </RouterLink>
          <RouterLink to="/produkApron" class="figure-card">
            <img src="../assets/home/apron.png" alt="apron" />
            <h3>Apron</h3>
          </RouterLink>
          <RouterLink to="/produkToteBag" class="figure-card">
            <img src="../assets/home/totebag.png" alt="totebag" />
            <h3>Tote Bag</h3>
          </RouterLink>
        </div>
      </div>
    </section>
    <!-- Figure Section End -->
    <section class="contact-info" id="contact-info">
      <div class="content">
        <h2>Bikin Baju Sekarang</h2>
        <p>Hubungi kami dalam hitungan menit dan wujudkan produk impian.</p>
      </div>
    </section>
  </body>
</template>

<style lang="scss">
body {
  background-color: rgb(0, 0, 0) !important;
}

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
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      margin-top: -0.5rem;
      line-height: 1.4;
      font-weight: 500;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
      margin-bottom: 0.5rem;
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
  margin: 0rem 2rem;
  padding: 3rem 2.5%;
  background-color: rgb(255, 255, 255);
  border-radius: 50px;
  // box-shadow: 1px 1px 3px, rgba(255, 255, 255, 5);
  box-shadow: 10px 10px 100px #888888;

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
      width: 350px;
      height: 400px;

      h3 {
        color: black;
        font-weight: 600;
        font-size: 1.4rem;
        text-align: center;
        line-height: 1.3;
        margin-top: 1rem;
      }
    }
  }
}

.contact-info {
  color: #fff;
  margin: 3rem 2rem;
  align-items: center;
  background: linear-gradient(to right, rgb(52, 51, 51), #118fbd);
  border-radius: 2.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
}

.contact-info .content {
  text-align: left;
  padding: 5rem 7%;
  max-width: 60rem;
}

@media (max-width: 768px) {
  .hero {
    .content {
      h1 {
        font-size: 190%;
      }

      p {
        font-size: 100%;
      }

      .cta {
        font-size: 90%;
      }
    }
  }

  .slogan {
    h1 {
      font-size: 130%;
    }
  }

  .product-figure {
    h2 {
      font-size: 130%;
    }

    .row {
      .figure-card {
        h3 {
          font-size: 130%;
        }
      }
    }
  }

  .contact-info {
    .content {
      h2,
      p {
        font-size: 100%;
      }
    }
  }
}

@media (max-width: 576px) {
  .hero {
    .content {
      h1 {
        font-size: 160%;
      }

      p {
        font-size: 100%;
      }

      .cta {
        font-size: 90%;
      }
    }
  }

  .slogan {
    h1 {
      font-size: 110%;
    }
  }

  .product-figure {
    h2 {
      font-size: 110%;
    }

    .row {
      .figure-card {
        h3 {
          font-size: 110%;
        }
      }
    }
  }

  .contact-info {
    .content {
      h2,
      p {
        font-size: 90%;
      }
    }
  }
}
</style>

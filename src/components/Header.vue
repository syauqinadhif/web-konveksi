<script setup>
import { ref } from "vue";

const isMenuActive = ref(false);
const isProductActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const toggleProduct = () => {
  isProductActive.value = !isProductActive.value;
};

const closeMenu = () => {
  isMenuActive.value = false;
  isProductActive.value = false;
};

const toggleMenuHandler = (e) => {
  if (!e.target.closest(".header")) {
    closeMenu();
  }
};

const closeMenuOnNavClick = () => {
  closeMenu();
};

const bodyClick = () => {
  closeMenu();
};
</script>

<template>
  <header :class="{ active: isMenuActive }" class="header">
    <a href="#" class="logo"><span>H3S</span>SPORT<span>.</span></a>
    <div class="menuToggle" @click="toggleMenu"></div>
    <nav>
      <ul>
        <li @click="closeMenuOnNavClick"><RouterLink to="/">Beranda</RouterLink></li>
        <li>
          <a href="#" @click.prevent.stop="toggleProduct">Produk<b>&#9660;</b></a>
          <ul v-show="isProductActive">
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkKaos">Kaos</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkJaket">Jaket</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkKemeja">Kemeja</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkPolo">Polo</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkVest">Vest</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkTraining">Training</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkApron">Apron</RouterLink>
            </li>
            <li @click="closeMenuOnNavClick">
              <RouterLink to="/produkTotebag">ToteBag</RouterLink>
            </li>
          </ul>
        </li>
        <li @click="closeMenuOnNavClick">
          <RouterLink to="/portofolio">Portofolio</RouterLink>
        </li>
        <li @click="closeMenuOnNavClick">
          <RouterLink to="/pricelist">Harga</RouterLink>
        </li>
        <li @click="closeMenuOnNavClick">
          <RouterLink to="/hubungi">Hubungi Kami</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  min-height: 66px;
  background: rgba(1, 1, 1, 0.7);
  z-index: 1000;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
}

header .logo {
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  font-style: italic;
  text-decoration: none;
}

header .logo span {
  color: #118fbd;
}

header ul {
  position: relative;
}

header ul li {
  position: relative;
  list-style: none;
  float: left;
}

header ul li a {
  color: #fff;
  font-size: 0.9em;
  font-weight: 600;
  padding: 20px 25px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}

header ul li a:hover {
  color: #118fbd;
}

header nav ul li ul {
  position: absolute;
  left: 0;
  width: 150px;
  text-decoration: none;
  background: rgba(1, 1, 1, 0.7);
  display: none;

  top: 100%;
  left: 0;
}

header ul li:hover ul {
  display: block;
}

header ul li ul li {
  position: relative;
  width: 100%;
  // border: 1px solid rgba($color: #000000, $alpha: 0.2);
}

//Responsive
@media (max-width: 768px) {
  header {
    padding: 10px 20px;
  }

  header nav {
    position: absolute;
    width: 100%;
    top: 66px;
    left: 0;
    background: hsla(223, 67%, 37%, 0.303);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    height: 100vh;
    display: none;
  }

  header.active nav {
    display: flex;
    flex-direction: column;
  }

  header nav ul li {
    width: 100%;
  }

  header nav ul li ul {
    position: relative;
    width: 100%;
    left: 0;
  }

  header ul li ul li ul {
    top: 0;
    left: 100%;
  }

  // header nav ul li:hover ul li{
  //   background: hsla(223, 66%, 52%, 0.303);
  // }

  .menuToggle {
    position: relative;
    width: 30px;
    height: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto; /* Add this line */
  }

  .menuToggle::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 3rem;
    transform: translateY(-12px);
    box-shadow: 0 12px #fff;
    pointer-events: auto; /* Add this line */
  }

  .menuToggle::after {
    content: " ";
    border-radius: 3rem;
    position: absolute;
    width: 100%;
    height: 3px;
    background: #fff;
    transform: translateY(12px);
    pointer-events: auto; /* Add this line */
  }

  header.active .menuToggle::before {
    transform: rotate(45deg);
    box-shadow: 0 0 #fff;
  }
  header.active .menuToggle::after {
    transform: rotate(315deg);
  }
}
</style>

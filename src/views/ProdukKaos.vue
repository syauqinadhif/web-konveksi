<template>
  <!-- <div class="produkKaos">
    <h1>This is Kaos</h1>
  </div> -->
  <body>
  <section class="produkKaos" id="title">
        <h1>Tentukan Desain Anda</h1>
        <div class="button">
            <a href="#" class="optionButton">Model dan Varian</a>
            <a href="#" class="optionButton">Jenis Bahan</a>
            <a href="#" class="optionButton">Katalog Warna</a>
            <a href="#" class="optionButton">Ukuran</a>
        </div>
    </section>
  </body>
</template>

<style lang="scss" scoped>

body {
  background-color: black ;
}

.produkKaos{

  h1 {
    // margin-top: 5rem;
    font-size: 1.75rem;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
    line-height: 1.3;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

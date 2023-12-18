<template>
    <body>
      <section class="portofolio">
        <h1>Portofolio</h1>
        
  
        <div class="modelVar">
          <h2>Kaos</h2>
          <div class="type">
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <h2>Kemeja</h2>
          <div class="type">
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <h2>Jaket</h2>
          <div class="type">
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <h2>Poloshirt</h2>
          <div class="type">
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <div class="type">
            <h2>Vest</h2>
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <div class="type">
            <h2>Training</h2>
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <div class="type">
            <h2>Apron</h2>
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
          <div class="type">
            <h2>Tote Bag</h2>
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 1" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 3" />
                <img src="../../assets/produk/oneck.jpeg" alt="Sample 4" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    </body>
  </template>
  
  <style lang="scss">
  body {
    background-color: black;
  }
  .portofolio {
    h1 {
      margin-top: 5rem;
      font-size: 1.75rem;
      font-weight: 600;
      text-align: center;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
      line-height: 1.3;
    }
  
    .button {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
      column-gap: 4rem;
  
      .optionButton {
        text-decoration: none;
        margin-top: 1rem;
        /* margin-left: 2rem; */
        display: inline-block;
        padding: 0.5rem 1rem;
        text-align: center;
        width: 12rem;
        font-size: 1rem;
        color: #fff;
        background-color: #118fbd;
        /* justify-content: space-between; */
        border-radius: 3rem;
        box-shadow: 1px 1px 3px, rgba(1, 1, 3, 0.5);
      }
    }
  
    .modelVar {
      h2 {
        // margin-right: 20px;
        color: #118fbd;
        font-size: 1.25rem;
        font-weight: 600;
        text-align: center; /* Jarak antara judul dan slider */
      } /* Pusatkan elemen anak secara vertikal */
      .type {
        display: flex;
        align-items: center;
        margin-left: 0px;
        // margin-right: 0px;
  
        h2 {
          // margin-right: 20px;
          color: #118fbd;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center; /* Jarak antara judul dan slider */
        } /* Pusatkan elemen anak secara vertikal */
      }
      .splide {
        // width: 100%; /* Sesuaikan lebar sesuai kebutuhan */
        width: 700px; /* Atur lebar maksimum sesuai kebutuhan */
        // height: 200px;
        margin-left: 7.5rem;
        margin-right: 7.5rem;
        margin: 2rem auto;
        /* Pusatkan komponen Splide di tengah halaman */
      }
  
      .splide__slide {
        display: flex;
        justify-content: center;
        /* Mengatur tampilan elemen-elemen dalam SplideSlide menjadi flex */
      }
      /* Gaya untuk elemen-elemen di dalam SplideSlide */
      .splide__slide img {
        width: 300px; /* Pastikan gambar mengisi lebar slide sepenuhnya */
        height: auto; /* Biarkan tinggi otomatis untuk mempertahankan rasio aspek asli */
        border-radius: 4px; /* Contoh penggunaan border-radius untuk sudut melengkung */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-left: 20px;
        margin-right: 20px; /* Contoh bayangan untuk efek ketinggian */
      }
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
  
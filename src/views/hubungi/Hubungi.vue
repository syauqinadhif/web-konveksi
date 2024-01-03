<script>
import { RouterView } from "vue-router";
</script>

<template>
  <body>
    <section class="hubungiKami">
      <h1>Hubungi Kami</h1>

      <div class="modelVar">
        <div class="type">
          <div class="content">
            <div class="kiri">
              <h1>Kaos</h1>
              <h3>
                Berbagai pilihan kain berkualitas premium dengan harga terjangkau untuk
                kebutuhan ada
              </h3>
            </div>
            <div class="kanan">
              <div class="card">
                <h1>Promotion</h1>
                <h3>Harga mulai dari <span>Rp 29.500</span></h3>
                <h3>Jenis bahan</h3>
                <ul>
                  <li>Semi Katun</li>
                  <li>TC</li>
                  <li>Drifit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style lang="scss">
body {
  background-color: rgb(41, 41, 53);
}
.hubungiKami {
  h1 {
    margin-top: 6rem;
    margin-bottom: 3rem;
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
    line-height: 1.3;
  }

  .modelVar {
    .type {
      height: 600px;
      background-color: #0f3947;
      border-radius: 5rem;
      display: flex;
      box-shadow: 1px 1px 3px, rgba(1, 1, 3, 0.5);
      // align-items: center;
      margin: 1rem 1rem;
      justify-content: center;
      // margin-right: 0px;

      .content {
        display: flex;
        align-items: center;
        justify-content: center;

        .kiri {
          // display: block;
          max-width: 500px;
          // min-width: 300px;
          margin: 3rem 4rem;
          h1 {
            padding: 0px;
            margin: 0px 0px 0px 0px;
            color: #fdfdfd;
            text-align: left;
          }
          h3 {
            margin-top: 12px;
            color: #fdfdfd;
          }
        }

        .kanan {
          // display: flex;
          // justify-content: center;
          margin-right: 4rem;
          .card {
            display: block;
            width: 17rem;
            height: 20rem;
            border-radius: 2rem;
            // margin: 0 15px;
            align-items: center;
            margin: 0px 12px;
            padding: 1.2rem 1.5rem;

            h1 {
              margin: 0rem;
              text-align: left;
              color: #000000;
            }

            h3 {
              margin: 0.5rem 0rem;
            }
            span {
              font-weight: bold;
            }

            ul {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
</style>

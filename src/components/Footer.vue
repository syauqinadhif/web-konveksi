<template>
  <footer>
    <div class="container">
      <div class="content">

        <div class="left">
  
          <div class="logo">
            <h1><span>H3S</span>SPORT<span>.</span></h1>
          </div>
          <div class="footer-contact">
            <div class="contact-item">
              <vue-feather type="phone" class="icon"></vue-feather>
              <span>+123456789</span>
            </div>
            <div class="contact-item">
              <vue-feather type="mail" class="icon"></vue-feather>
              <span>info@example.com</span>
            </div>
            <div class="contact-item">
              <vue-feather type="map-pin" class="icon"></vue-feather>
              <span>Jl. Contoh No. 123, Kota Anda</span>
            </div>
          </div>
        </div>
        <div class="right">
  
          <div class="footer-map">
            <!-- Replace the following URL with your Google Maps embed URL -->
            <iframe
              src="https://www.google.com/maps/embed?@-7.7825723,110.3985207,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a59c2bc1c6023:0x1ce91a3c5aa8b3bc!8m2!3d-7.7825776!4d110.4010956!16s%2Fm%2F0vsjsln?entry=ttu"
              width="100%"
              height="300"
              style="border:0;"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="copyright">
        <h7>@ 2023 PT. H3SSPORT. All right reserved.</h7>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  margin-top: 2rem;

  .container {
    align-items: center;
    display: block;
    // justify-content: space-between;
    // max-width: 600px;
    // margin: 0 auto;
    .content{
      display: flex;
      align-items: center;
      // text-align: center;
      // margin: 0 0;
      // padding: 0%;
      

      .left{
  
        padding: 0 10px;
        .logo{
          display: flex;
        align-items: center;
        // gap: 8px;
  
        h1 {
          font-size: 3rem;
          font-weight: 600;
          color: #fff;
          font-style: italic;
        }
        span {
          color: #118fbd;
        }
        }
        .footer-contact {
          // display: flex;
          flex-direction: column;
    
          .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
    
            .icon {
              color: #118fbd;
              margin-right: 0.5rem;
            }
    
            span {
              font-size: 14px;
            }
          }
        }
      }
  
      .right{
        padding: 0 10px;
        .footer-map {
          // flex: 1;
          iframe {
            border: none;
            border-radius: 8px;
          }
        }
      }

    }
    .copyright {
    // align-items: center;
    
      // align-items: center;
      // width: 100%;
      text-align: center; /* Center the copyright text */
      // margin-top: 1rem; /* Add some space between the content and copyright */
    
  }
  }
}
</style>

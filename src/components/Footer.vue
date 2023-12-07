<template>
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="copyright">
            <i class="fa fa-copyright"></i> 2023 H3SSPORT. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style lang="scss" scoped>
  // Add your FontAwesome styles import or use a different icon library
  
  footer {
    background-color: #1b262c;
    color: #fff;
    padding: 1rem 0;
    position: fixed;
    bottom: 0;
    width: 100%;
  
    .container {
      display: flex;
      justify-content: center;
    }
  
    .footer-content {
      display: flex;
      align-items: center;
      gap: 8px;
  
      .footer-branding {
        h2 {
          font-size: 1.4rem;
          font-weight: 700;
          font-style: italic;
        }
      }
  
      .footer-links {
        display: flex;
        gap: 10px;
  
        router-link {
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          transition: color 0.3s ease;
  
          &:hover {
            color: #81c2e5;
          }
        }
      }
  
      .copyright {
        margin-left: auto;
        display: flex;
        align-items: center;
  
        i {
          margin-right: 5px;
        }
      }
    }
  }
  </style>
  
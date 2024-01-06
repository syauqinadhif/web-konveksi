<template>
  <div class="portfolio">
    <h1>Portfolio</h1>

    <div class="collaborations">
      <!-- Repeat for photos 1 to 20 -->
      <!-- Photo 1 -->
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 1" />
          <div class="title">Title 1</div>
        </div>
      </div>

      <!-- Photo 2 -->
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 2" />
          <div class="title">Title 2</div>
        </div>
      </div>
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 2" />
          <div class="title">Title 2</div>
        </div>
      </div>
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 2" />
          <div class="title">Title 2</div>
        </div>
      </div>
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 2" />
          <div class="title">Title 2</div>
        </div>
      </div>
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 2" />
          <div class="title">Title 2</div>
        </div>
      </div>
      <div class="collaboration-item">
        <div class="image-container">
          <img src="../../assets/produk/oneck.jpeg" alt="Title 2" />
          <div class="title">Title 2</div>
        </div>
      </div>

      <!-- Repeat for photos 3 to 20 -->
      <!-- ... -->

    </div>
  </div>
</template>

<style lang="scss">
.portfolio {
  background-color: rgb(0, 0, 0);
  color: #fff;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 3px rgba(1, 1, 3, 0.5);
  }

  .collaborations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .collaboration-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0.5rem;
    position: relative;
    /* Positioning for title overlay */
    transition: transform 0.3s ease;
    /* Smooth transition for zoom effect */
  }

  .collaboration-item:hover {
    transform: scale(1.05);
    /* Zoom in slightly on hover */
  }

  .image-container {
    position: relative;
  }

  .collaboration-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
    /* Smooth transition for zoom effect */
  }

  .collaboration-item:hover img {
    transform: scale(1.2);
    /* Zoom in more on hover */
  }

  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    .collaborations {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
}
</style>

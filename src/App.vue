<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>
<template>
  <Header />
  <RouterView />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,700&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  template {
    background-color: black;
  }
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>

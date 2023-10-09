<template>
  <main class="main">
    <Banner/>
    <NewArticles/>
    <Spheres/>
  </main>
</template>

<script>
  import Banner from '../components/Banner/Banner.vue';
  import NewArticles from '../components/NewArticles/NewArticles.vue'
  import Spheres from '../components/Spheres/Spheres.vue'

  export default {
    name: 'HomeView',
    components: {Banner ,NewArticles, Spheres}
  }
</script>

<style scoped lang="css">
@font-face {
    font-family: 'Gilroy';
    src: local('Gliroy') url('../../assets/fonts/Gilroy-Extrabold.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', 'sans-serif';
}

.main {
  margin-bottom: 220px;
}

</style>

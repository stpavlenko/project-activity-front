<template>
  <div class="wrapper">
    <Banner />
    <NewArticles />
    <Spheres />
  </div>
</template>

<script setup>
import Banner from '../components/Banner/Banner.vue'
import NewArticles from '../components/NewArticles/NewArticles.vue'
import Spheres from '../components/Spheres/Spheres.vue'
</script>

<style scoped lang="css">
.main {
  margin-bottom: 220px;
}
</style>

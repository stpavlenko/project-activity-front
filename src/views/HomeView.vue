<script setup>
import Banner from '@/components/Banner/Banner.vue'
import NewArticles from '@/components/NewArticles/NewArticles.vue'
import PopularArticles from '@/components/PopularArticles/PopularArticles.vue'
</script>

<template>
  <div class="home">
    <Banner />
    <div class="wrapper">
      <NewArticles />
      <PopularArticles />
    </div>
  </div>
</template>

<style scoped lang="css">
.home {
  margin-bottom: 5rem;
}
</style>

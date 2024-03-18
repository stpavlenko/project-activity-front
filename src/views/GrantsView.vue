<script setup>
import GrantCard from '../components/GrantCard.vue'
const grants = ['Грант имени П.Л. Капицы', 'Грант имени В.Е. Фортова']
</script>

<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h2 class="view__title view__title-margin12">Гранты</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
      <div class="col mb-4" v-for="grant in grants">
        <GrantCard :name="grant" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 5rem;
}

.view__title-margin12 {
  margin-bottom: 0.75rem;
}
</style>

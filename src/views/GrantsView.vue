<script setup>
import GrantCard from '../components/GrantCard.vue'
const grants = ['Грант имени П.Л. Капицы', 'Грант имени В.Е. Фортова']
</script>

<template>
  <div class="wrapper view__content-wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Гранты</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
      <div class="col mb-4 grants__content" v-for="grant in grants">
        <GrantCard :name="grant" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grants__content {
  padding-left: 1.25rem;
  padding-right: 1.26rem;
}
</style>

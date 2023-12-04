<script setup>
import Grant from '@/components/Grant.vue'
const grants = ['Грант имени П.Л. Капицы', 'Грант имени В.Е. Фортова']
</script>

<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Гранты</h2>
    <div v-for="grant in grants">
      <Grant :grantName="grant" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 6.25rem;
}
</style>

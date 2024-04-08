<script setup>
import Laboratory from '../components/Laboratory.vue'
</script>
<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Лаборатории</h2>
    <div class="search input-group d-flex">
      <input
        type="search"
        class="form-control border-end-0 view__input"
        aria-label="Text input with dropdown button"
        placeholder="Найти лабораторию"
      />
      <button class="border-start-0 search-button view__input"></button>
    </div>
    <div class="laboratories">
      <Laboratory v-for="i in 8" :key="i" class="laboratories__item" />
    </div>
    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>
<style lang="scss" scoped>
.laboratories {
  display: grid;
  gap: 3rem 2.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 13.75rem;
}

h2 {
  margin-top: 2.75rem;
}

.search {
  margin-bottom: 2.75rem;
}

@media (max-width: 576px) {
  .laboratories {
    grid-template-columns: 1fr;
  }
}
</style>

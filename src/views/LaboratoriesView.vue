<script setup>
import Laboratory from '../components/Laboratory.vue'
</script>
<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h1 class="view__title">Лаборатории</h1>
    <div class="search input-group d-flex">
      <input
        type="search"
        class="form-control border-end-0 view__input"
        aria-label="Text input with dropdown button"
        placeholder="Найти ученого"
      />
      <button class="border-start-0 search-button view__input"></button>
    </div>
    <div class="laboratories">
      <Laboratory class="laboratories__item--span2" />
      <Laboratory class="laboratories__item--dark" />
      <Laboratory />
      <Laboratory class="laboratories__item--span2 laboratories__item--dark" />
      <Laboratory class="laboratories__item--span2 laboratories__item--medium" />
      <Laboratory class="laboratories__item--medium" />
      <Laboratory />
      <Laboratory class="laboratories__item--span2 laboratories__item--dark" />
      <Laboratory class="laboratories__item--span2 laboratories__item--dark" />
      <Laboratory class="laboratories__item--medium" />
      <Laboratory />
    </div>
    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 13.75rem;
}
h1 {
  margin-top: 2.75rem;
}

.search {
  margin-bottom: 2.75rem;
}
.search-button {
  background: transparent url('../../public/searchIcon.svg') no-repeat center;
  width: 24px;
  cursor: pointer;
}

.laboratories {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  &__item {
    &--span2 {
      grid-column: span 2;
    }
    &--dark {
      background-color: #999999;
    }
    &--medium {
      background-color: #c2c2c2;
    }
  }
}
</style>
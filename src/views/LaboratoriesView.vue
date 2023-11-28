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
        placeholder="Найти ученого"
      />
      <button class="border-start-0 search-button view__input"></button>
    </div>
    <div class="laboratories">
      <Laboratory class="laboratories__item laboratories__item--span2" />
      <Laboratory class="laboratories__item laboratories__item--dark" />
      <Laboratory class="laboratories__item"/>
      <Laboratory class="laboratories__item laboratories__item--span2 laboratories__item--dark" />
      <Laboratory class="laboratories__item laboratories__item--span2 laboratories__item--medium" />
      <Laboratory class="laboratories__item laboratories__item--medium" />
      <Laboratory class="laboratories__item"/>
      <Laboratory class="laboratories__item laboratories__item--span2 laboratories__item--dark" />
      <Laboratory class="laboratories__item laboratories__item--span2 laboratories__item--dark" />
      <Laboratory class="laboratories__item laboratories__item--medium" />
      <Laboratory class="laboratories__item"/>
    </div>
    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>
<style lang="scss" scoped>
.laboratories {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  &__item {
    background-color: #d9d9d9;
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
.search-button {
  background: transparent url('../../public/searchIcon.svg') no-repeat center;
  width: 24px;
  cursor: pointer;
}
</style>
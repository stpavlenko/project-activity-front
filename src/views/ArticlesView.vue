<script setup>
import ArticleCard from '@/components/ArticleCard.vue'

function smallArticle(index) {
  return [2, 3, 4].includes(index)
}
</script>

<template>
  <div class="wrapper articles view__content-wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Статьи</h2>

    <div class="row g-5">
      <div class="col-8 search">
        <div class="d-flex">
          <input
            type="text"
            class="view__input form-control border-end-0"
            aria-label="Text input with dropdown button"
            placeholder="Найти статью"
          />
          <button class="border-start-0 search-button view__input"></button>
        </div>
      </div>
      <div class="custom-select col-4 d-flex select">
        <select class="col-4 form-control view__input" aria-label=".form-select-sm example">
          <option selected>По новизне</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <section class="articles__content">
      <div class="articles__block">
        <ArticleCard
          v-for="index in 4"
          :key="index"
          :horizontal="smallArticle(index)"
          :class="{ 'article--small': smallArticle(index) }"
          class="article"
        />
      </div>
      <div class="articles__block">
        <ArticleCard v-for="index in 7" :key="index" class="article" />
      </div>
    </section>

    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>
<style lang="scss" scoped>
.articles {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 3rem;
  }
  &__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(20, 1fr); */
    /* margin-top: 3rem; */
    gap: 2.5rem;
  }
}

.article {
  grid-row: span 4;
  /* &--small {
    grid-row: span 1;
  } */
}
@media (min-width: 767px) {
  .article {
    grid-row: span 4;
    &--small {
      grid-row: span 1;
    }
  }
}
@media (max-width: 768px) {
  .custom-select {
    display: none !important;
  }
  .search {
    width: 100%;
  }
  .articles {
    &__content {
      margin-top: 1rem;
    }
    &__block {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
}
</style>

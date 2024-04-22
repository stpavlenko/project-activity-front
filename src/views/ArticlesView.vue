<script setup>
import ArticleCard from '@/components/ArticleCard.vue'
import SearchForm from '@/components/UI/SearchForm.vue'

function smallArticle(index) {
  return [2, 3, 4, 5].includes(index)
}
</script>

<template>
  <div class="wrapper articles">
    <project-breadcrumb />

    <h2 class="view__title">Статьи</h2>

    <div class="row g-5">
      <div class="col-8 search">
        <search-form />
      </div>
      <div class="col-4 select">
        <select class="col-4 view__input form-control" aria-label=".form-select-sm example">
          <option selected>По новизне</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <section class="articles__content">
      <ArticleCard
        v-for="index in 13"
        :key="index"
        :horizontal="smallArticle(index)"
        :class="{ 'article--small': smallArticle(index) }"
        class="article"
      />
    </section>

    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>
<style lang="scss" scoped>
.articles {
  padding-top: 2.75rem;
  padding-bottom: 13.75rem;
}

.view__title {
  margin-top: 2.75rem;
}

.articles__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(20, 1fr); */
  margin-top: 3rem;
  gap: 2.5rem;
}

.article {
  grid-row: span 4;
  /* &--small {
    grid-row: span 1;
  } */
}

@media (min-width: 577px) {
  .article {
    grid-row: span 4;

    &--small {
      grid-row: span 1;
    }
  }
}

@media (max-width: 576px) {
  .select {
    display: none;
  }
  .search {
    width: 100%;
  }
  .articles__content {
    grid-template-columns: 1fr;
  }
}
</style>

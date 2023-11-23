<script setup>
import ArticleCard from '@/components/ArticleCard.vue'
</script>

<template>
  <div class="wrapper articles">
    <project-breadcrumb />
    <h2 class="view__title">Биология</h2>
    <div class="row g-5">
      <div class="col-8">
        <input
          type="text"
          class="view__input form-control"
          aria-label="Text input with dropdown button"
          placeholder="Введите запрос"
        />
      </div>
      <div class="col-4">
        <select class="col-4 view__input form-control" aria-label=".form-select-sm example">
          <option selected>По новизне</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <div class="sections">
      <section>
        <div class="row">
          <ArticleCard class="col" />
          <div class="col d-flex flex-column justify-content-between">
            <ArticleCard v-for="index in 5" :horizontal="true" :key="index" />
          </div>
        </div>
      </section>

      <section>
        <div class="row">
          <ArticleCard class="col" v-for="index in 3" />
        </div>
      </section>

      <section>
        <div class="row">
          <ArticleCard class="col" v-for="index in 2" />
        </div>
      </section>

      <section>
        <div class="row">
          <div class="col d-flex flex-column justify-content-between">
            <ArticleCard v-for="index in 5" :horizontal="true" />
          </div>
          <ArticleCard class="col" />
        </div>
      </section>

      <section>
        <div class="row">
          <ArticleCard class="col" v-for="index in 3" />
        </div>
      </section>
    </div>

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
.sections {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 7.875rem;
}
</style>

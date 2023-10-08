<script setup>
import ArticleCard from '@/components/ArticleCard.vue'
</script>
<template>
  <div>
    <h2 class="view__title">Биология</h2>
    <div class="input-group gap-6">
      <input
        type="text"
        class="form-control view__input"
        aria-label="Text input with dropdown button"
        placeholder="Введите запрос"
      />
      <button
        class="btn btn-outline-secondary dropdown-toggle ml-5 view__input"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        По новизне
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <div class="sections">
      <section>
        <div class="row">
          <ArticleCard class="col" />
          <div class="col d-flex flex-column justify-content-between">
            <ArticleCard v-for="index in 5" :horizontal="true" />
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
.sections {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 7.875rem;
}
</style>

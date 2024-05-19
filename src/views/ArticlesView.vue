<script setup>
import { onMounted, ref } from 'vue'
import axios from '@/helpers/axios'
import ArticleCard from '@/components/ArticleCard.vue'
import SearchForm from '@/components/UI/SearchForm.vue'

const articles = ref([])

onMounted(() => {
  getStateList()
})

async function getStateList() {
  try {
    const response = await axios.get('state_list/')
    articles.value = response.data
  } catch (e) {
    console.log(e)
  }
}

function isArticleSmall(index) {
  return [1, 2, 3].includes(index)
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

    <section class="articles__cards">
      <ArticleCard
        v-for="(article, index) in articles"
        :small=isArticleSmall(index)
        :article=article
        :key="article.id"
        class="article-card"
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

.articles__cards {
  margin-top: 3rem;
  gap: 2.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.article-card {
  grid-row: span 3;
}

@media (min-width: 577px) {
  .article-card {
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

  .articles__cards {
    grid-template-columns: 1fr;
  }
}
</style>

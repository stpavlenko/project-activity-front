<script setup>
</script>

<template>
  <div class="row flex-sm-row scientist-preview">
    <div class="scientist-preview__img col"></div>
    <div class="scientist-preview__info col">
      <h1 class="scientist-preview__name view__title">
        <span>Фамилия</span>
        <span>Имя Отчество</span>
      </h1>
      <div class="scientist-preview__subinfo">Ученая степень</div>
      <div class="scientist-preview__subinfo">Персональные идентификаторы (ID)</div>
      <ul class="id-list">
        <li class="id-list__item">Scopus AuthorID:</li>
        <li class="id-list__item">WoS ResearcherID:</li>
        <li class="id-list__item">ORCID:</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span {
  display: block;
}
.scientist-preview {
  list-style: none;
  gap: 2.5rem;
  padding-bottom: 4rem;
  padding-top: 2.75rem;
  margin: 0;
  &__img {
    padding: 0;
    max-width: 25rem;
    min-width: 16rem;
    height: 25rem;
    background-color: #c2c2c2;
  }
  &__info {
    padding: 0;
  }
  &__name {
    margin: 0;
  }
  &__subinfo {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;
    padding-top: 2rem;
  }
  .id-list {
    list-style: none;
    padding-left: 0;
    padding-top: 1rem;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
}
@media (max-width: 650px) {
}
</style>

<script setup></script>

<template>
  <div class="scientist-preview">
    <div class="scientist-preview__img-box">
      <img src="@/assets/images/profile-example.jpg" class="scientist-preview__img" alt="" />
    </div>
    <div class="scientist-preview__info">
      <h1 class="scientist-preview__name view__title">
        <span>Мошин</span>
        <span>Андрей Алексеевич</span>
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
  display: flex;
  list-style: none;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  padding-top: 2.75rem;
  margin: 0;
  &__img {
    padding: 0;
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
@media (max-width: 576px) {
  .scientist-preview {
    display: block;
  }
}
</style>

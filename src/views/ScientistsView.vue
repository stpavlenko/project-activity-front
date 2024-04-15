<template>
  <div>
    <div class="wrapper">
      <project-breadcrumb />
      <h2 class="view__title">Учёные</h2>
      <div class="sections input-group d-flex">
        <input
          type="search"
          class="form-control border-end-0 view__input"
          aria-label="Text input with dropdown button"
          placeholder="Поиск"
        />
        <button class="border-start-0 search-button view__input"></button>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div
          class="col mb-4 scientists__content"
          v-for="(scientist, index) in scientists"
          :key="index"
        >
          <ScientistCard :title="scientist.title" :text="scientist.text" />
        </div>
      </div>
      <button type="button" class="btn view__load-btn">Загрузить еще</button>
    </div>
  </div>
</template>

<script setup>
import ScientistCard from '../components/ScientistCard.vue'
const scientists = [
  { title: 'Володько Сергей Сергеевич', text: 'Доцент сектора научной деятельности' },
  { title: 'Воронин Станислав Сергеевич', text: 'Доцент сектора научной деятельности' },
  { title: 'Грибанев Дмитрий Андреевич', text: 'Доцент сектора научной деятельности' },
  { title: 'Кирсанкин Андрей Александрович', text: 'Доцент сектора научной деятельности' },
  { title: 'Комаров Иван Александрович', text: 'Доцент сектора научной деятельности' },
  { title: 'Орлов Максим Андреевич', text: 'Доцент сектора научной деятельности' },
  { title: 'Фомин Алексей Викторович', text: 'Доцент сектора научной деятельности' },
  { title: 'Шкаленко Анна Викторовна', text: 'Доцент сектора научной деятельности' },
  { title: 'Щегольков Алексей Викторович', text: 'Доцент сектора научной деятельности' },
  { title: 'Доронин Федор Александрович', text: 'Доцент сектора научной деятельности' },
  { title: 'Корячко Марина Валерьевна', text: 'Доцент сектора научной деятельности' },
  { title: 'Стрекалина Дарья Михайловна', text: 'Доцент сектора научной деятельности' }
]
</script>

<style lang="scss" scoped>
.sections {
  margin-bottom: 3rem;
}

.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 5rem;
}
.search-button {
  background: transparent url('/searchIcon.svg') no-repeat center;
  width: 24px;
  cursor: pointer;
}
.scientists__content {
  padding-left: 1.25rem;
  padding-right: 1.26rem;
}
</style>

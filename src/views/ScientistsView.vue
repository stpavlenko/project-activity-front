<template>
  <div>
    <div class="wrapper">
      <h2 class="view__title">Учёные</h2>

      <div class="sections input-group d-flex">
        <input
          type="search"
          class="form-control border-end-0 view__input"
          aria-label="Text input with dropdown button"
          placeholder="Найти ученого"
        />
        <button class="border-start-0 search-button view__input"></button>
      </div>
      <div class="row">
        <ScientistCard class="col" v-for="index in 3" />
      </div>
      <div class="row">
        <ScientistCard class="col" v-for="index in 3" />
      </div>
      <div class="row">
        <ScientistCard class="col" v-for="index in 3" />
      </div>
      <div class="row">
        <ScientistCard class="col" v-for="index in 3" />
      </div>
    </div>

    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>

<script setup>
import ScientistCard from '../components/ScientistCard.vue'
</script>

<style lang="scss" scoped>
.sections {
  margin-bottom: 3rem;
}
.search-button {
  background: transparent url('../../public/searchIcon.svg') no-repeat center;
  width: 24px;
  cursor: pointer;
}
</style>

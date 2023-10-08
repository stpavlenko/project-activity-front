<script setup>
import ScientistCard from '../components/ScientistCard.vue'
</script>
<template>
  <div>
    <div>
      <h2 class="view__title">Учёные</h2>
      <div class="input-group gap-6">
        <input
          type="text"
          class="form-control view__input"
          aria-label="Text input with dropdown button"
          placeholder="Найти ученого"
        />
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
<style lang="scss" scoped>
.sections {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 7.875rem;
}
</style>
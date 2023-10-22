<script setup>
// defineProps({
//   horizontal: Boolean
// })
const title =
  'Фамилия Имя Отчество'
const text =
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu. '
</script>
<template>
  <div>
    <div
      class="d-flex scientist-card flex-column"
    >
      <div
        class="scientist-card__image"
      ></div>
      <div class="scientist-card__text-content d-flex flex-column">
        <span class="scientist-card__title">
          {{ title }}
        </span>
        <p class="scientist-card__text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.scientist-card {
  gap: 1.5rem;
  &__image {
    background: #d9d9d9;
    height: 22.5rem;
    max-width: 35rem;
    &--horizontal {
      max-width: 13rem;
      flex-basis: 40%;
      height: 7.75rem;
    }
  }
  &__text-content {
    flex-shrink: 1;
    gap: 1.5rem;
  }
  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    &--small {
      font-size: 1rem;
    }
  }
}
</style>

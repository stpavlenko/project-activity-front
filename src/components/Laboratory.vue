<template>
  <RouterLink class="router-link-reset" :to="{ name: 'laboratory' }">
    <div class="laboratory">
      <div class="laboratory__img"></div>
      <span class="laboratory__title">Название лаборатории</span>
    </div>
  </RouterLink>
</template>
<style lang="scss" scoped>
@use '@/assets/style/variables' as *;

.laboratory {
  &:hover {
    .laboratory__title {
      transition: 0.5s;
      color: #4c6eb9;
    }
  }
  &__img {
    background-color: $bg-tertiary;
    height: 360px;
  }

  &__title {
    display: block;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
}
@media (max-width: 768px) {
  .laboratory {
    &__title {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
}
</style>

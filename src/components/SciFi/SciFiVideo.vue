<template>
  <div class="video">
    <div class="video__plug"></div>
    <h4 class="video__title">Название</h4>
    <div class="view__date">20 ноября 2023</div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/style/variables' as *;
.video {
  &__plug {
    background: $bg-tertiary;
    max-width: 22.5rem;
    min-height: 12.75rem;
  }
  &__title {
    margin-top: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>

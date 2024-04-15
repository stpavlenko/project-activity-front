<script setup>
defineProps(['name'])
</script>

<template>
  <div>
    <div class="d-flex flex-column grant-card">
      <div class="grant-card__scale-box">
        <img src="@/assets/images/article-example.png" class="grant-card__image" alt="" />
      </div>
      <div class="grant-card__title">
        <RouterLink class="router-link-reset" :to="{ name: 'grant' }">
          <span>{{ name }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grant-card {
  &:hover {
    .grant-card__scale-box > img {
      transform: scale(1.1);
    }
    .grant-card__title {
      color: #4c6eb9;
      transition: 0.5s;
    }
  }
  gap: 1.5;
  &__scale-box {
    display: inline-block;
    overflow: hidden;
    & > img {
      display: block;
      transition: 0.5s;
    }
  }
  &__image {
    background: #d9d9d9;
    height: 100%;
    max-width: 100%;
  }
  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
}

@media (max-width: 576px) {
  .grant-card__title {
    margin-top: 0rem;
  }
  .grant-card {
    gap: 0.5rem;
  }
}
</style>

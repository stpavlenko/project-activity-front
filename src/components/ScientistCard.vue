<script setup>
defineProps(['lastname', 'firstname', 'text'])
</script>
<template>
  <div>
    <div class="d-flex scientist-card flex-column">
      <div class="scientist-card__scale-box">
        <img class="scientist-card__image" src="@/assets/images/profile-example.jpg" />
      </div>
      <div class="scientist-card__text-content d-flex flex-column">
        <RouterLink class="router-link-reset" :to="{ name: 'scientist' }"
          ><span class="scientist-card__title"> {{ firstname }} </span>
          <span class="scientist-card__title"> {{ lastname }} </span></RouterLink
        >
        <p class="scientist-card__text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.scientist-card {
  &:hover {
    .scientist-card__scale-box > img {
      transform: scale(1.1);
    }
    .scientist-card__title {
      color: #4c6eb9;
    }
  }
  &__scale-box {
    display: inline-block;
    overflow: hidden;
    & > img {
      display: block;
      transition: 0.5s;
    }
  }
  gap: 1.5rem;
  &__image {
    background: #d9d9d9;
    object-fit: cover;
    max-width: 100%;
    &--horizontal {
      max-width: 13rem;
      flex-basis: 40%;
      height: 7.75rem;
    }
  }
  &__text-content {
    flex-shrink: 1;
    gap: 0.75rem;
  }
  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    display: block;
    line-height: 2rem;
    &--small {
      font-size: 1rem;
    }
  }
  &__text {
    margin-bottom: 0;
  }
}
@media (max-width: 576px) {
  .scientist-card {
    gap: 1rem;
  }
  .scientist-card__text-content {
    gap: 0.5rem;
  }
}
</style>

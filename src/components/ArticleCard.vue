<script setup>
defineProps({
  horizontal: Boolean
})
const title =
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu'
const text =
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed qu. Neque porro quisquam est, qui doloremipsum quia dolor sit amet, consectetur, adipisci velit, sed qu...'
const date = '22 сентября 2023'
const smallTitle = 'Excepteur sint occaecat cupidatat non proident'
</script>
<template>
  <div>
    <div
      class="d-flex article-card"
      :class="{ 'flex-row': horizontal, 'flex-column': !horizontal }"
    >
      <div
        class="article-card__image"
        :class="{ 'article-card__image--horizontal': horizontal }"
      ></div>
      <div class="article-card__text-content d-flex flex-column">
        <time class="article-card__date">{{ date }}</time>
        <span class="article-card__title" :class="{ 'article-card__title--small': horizontal }">
          {{ horizontal ? smallTitle : title }}
        </span>
        <p class="article-card__text" v-if="!horizontal">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article-card {
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
  &__date {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    color: #c2c2c2;
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

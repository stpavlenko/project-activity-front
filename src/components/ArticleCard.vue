<script setup>
import { getImgSrc } from '@/helpers/functions'

const props = defineProps({
  small: Boolean,
  article: Object
})
const title =
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu'
const text =
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit, sed qu. Neque porro quisquam est, qui doloremipsum quia dolor sit amet, consectetur, adipisci velit, sed qu...'
const date = '22 сентября 2023'
const smallTitle = 'Excepteur sint occaecat cupidatat non proident'
</script>
<template>
  <div
    class="d-flex article-card"
    :class="{ 'article-card--small': small, 'flex-column': !small }"
  >
    <div class="article-card__scale-box">
      <img
        class="article-card__image"
        :src="getImgSrc(article.photo)"
        :class="{ 'article-card__image--small': small }"
      />
    </div>

    <div class="article-card__text-content d-flex">
      <time class="view__date">{{ date }}</time>

      <router-link :to="{ name: 'article' }" class="router-link-reset">
          <span class="article-card__title" :class="{ 'article-card__title--small': small }">
<!--            {{ small ? smallTitle : title }}-->
            {{ props.article.title }}
          </span>
      </router-link>

      <!--      <p class="article-card__text" v-if="!small">{{ text }}</p>-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article-card {
  gap: 1.5rem;
  flex-direction: column;

  &:hover {
    .article-card__scale-box > img {
      transform: scale(1.15);
    }

    .article-card__title {
      color: #4c6eb9;
    }
  }

  &__scale-box {
    display: inline-block;
    overflow: hidden;
    //width: 200px;

    & > img {
      transition: 1s;
      display: block;
    }
  }

  &__image {
    height: 22.5rem;
    width: 100%;
    object-fit: cover;
    max-width: 35rem;

    &--small {
      width: 200px;
      height: 140px;
    }
  }

  &__text {
    display: none;
  }

  &__text-content {
    font-weight: 700;
    font-size: 1.5rem;
    flex-direction: column-reverse;
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
  }
}

@media (min-width: 577px) {
  .article-card {
    &--small {
      flex-direction: row;
    }

    &__title {
      &--small {
        font-size: 1rem;
      }
    }

    &__text {
      display: block;
    }

    &__text-content {
      flex-shrink: 1;
      gap: 1.5rem;
      flex-direction: column;
      font-weight: 400;
      font-size: 1rem;
    }
  }
}
</style>

<script setup>
defineProps({
  label: String,
  routerName: String
})
</script>
<template>
  <div class="view__card">
    <router-link :to="{ name: routerName }" class="router-link-reset">
      <div class="sci-fi__img"></div>
    </router-link>

    <router-link :to="{ name: routerName }" class="router-link-reset">
      <h3 class="view__card-title">
        {{ label }}
      </h3>
    </router-link>

    <p class="view__card-text">
      /превью/ на 2-3 строки . Московский политехнический университет приглашает молодых ученых
      (постдоков) в возрасте до 39 лет
    </p>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/style/variables' as *;

.sci-fi {
  &__img {
    min-height: 360px;
    background-color: $bg-tertiary;
  }
}
</style>

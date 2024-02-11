<script setup>
defineProps({
  label: String,
  routerName: String
})
</script>
<template>
  <div>
    <div class="sci-fi__img"></div>
    <h3 class="mt-4">
      <router-link :to="{ name: routerName }" class="router-link-reset">
        {{ label }}
      </router-link>
    </h3>
    <p class="mt-4">
      /превью/ на 2-3 строки . Московский политехнический университет приглашает молодых ученых
      (постдоков) в возрасте до 39 лет
    </p>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/style/variables' as *;

h3 {
  font-family: Gilroy;
  font-size: 1.5rem;
  font-weight: 800;
}

.sci-fi {
  &__img {
    min-height: 360px;
    background-color: $bg-tertiary;
  }
}
</style>

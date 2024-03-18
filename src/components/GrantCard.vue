<script setup>
defineProps(['name'])
</script>

<template>
  <div>
    <div class="d-flex flex-column grant-card">
      <div>
        <div class="grant-card__image"></div>
        <div class="grant-card__name">
          <RouterLink class="router-link-reset" :to="{ name: 'grant' }">
            <span>{{ name }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grant-card {
  gap: 2.5rem;
  &__image {
    background: #d9d9d9;
    height: 22.5rem;
    max-width: 35rem;
  }
  &__name {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
}
</style>

<script setup>
import SciFiPreview from '@/components/SciFi/SciFiPreview.vue'
</script>

<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Научно-популярные проекты</h2>

    <div class="previews">
      <SciFiPreview v-for="i in 2" :key="i" :id="i" class="preview" />
    </div>

    <button type="button" class="btn view__load-btn">Загрузить еще</button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 13.75rem;
}

h2 {
  margin-top: 2.75rem;
}
.previews {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>

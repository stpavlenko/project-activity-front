<script setup>
import SciFiPreview from '@/components/SciFi/SciFiPreview.vue'

const projects = [
  { label: 'Научная кухня', routerName: 'sciKitchen' },
  { label: 'Вопросы ученым', routerName: 'home' }
]
</script>

<template>
  <div class="view__content-wrapper wrapper">
    <project-breadcrumb />

    <h2 class="view__title">Научно-популярные проекты</h2>

    <input type="text" class="view__input form-control" />

    <div class="row mt-5">
      <div class="col-sm-12 col-md-6" v-for="project in projects" :key="project.routerName">
        <SciFiPreview :label="project.label" :routerName="project.routerName"></SciFiPreview>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.previews {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>

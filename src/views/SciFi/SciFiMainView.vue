<script setup>
import SciFiPreview from '@/components/SciFi/SciFiPreview.vue'
import SearchForm from '@/components/UI/SearchForm.vue'

const projects = [
  { label: 'Научная кухня', routerName: 'sciKitchen' },
  { label: 'Вопросы ученым', routerName: 'home' }
]
</script>

<template>
  <div class="view__content-wrapper wrapper">
    <project-breadcrumb />

    <h2 class="view__title">Научно-популярные проекты</h2>

    <search-form />

    <div class="row mt-5">
      <div class="col-sm-12 col-md-6" v-for="project in projects" :key="project.routerName">
        <SciFiPreview :label="project.label" :routerName="project.routerName"></SciFiPreview>
      </div>
    </div>
  </div>
</template>

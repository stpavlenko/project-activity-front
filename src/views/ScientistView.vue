<script setup>
import ScientistPreview from '../components/ScientistPreview.vue'
import ScientistInfo from '../components/ScientistInfo.vue'
</script>

<template>
  <div class="wrapper">
    <project-breadcrumb />
    <ScientistPreview />
    <ScientistInfo />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 13.75rem;
}
</style>

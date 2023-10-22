<script>
import ScientistPreview from '../components/ScientistPreview.vue'
import ScientistInfo from '../components/ScientistInfo.vue'
export default {
  name: 'ScientistView',
  components: { ScientistPreview, ScientistInfo }
}
</script>

<template>
  <div class="wrapper">
    <ScientistPreview />
    <ScientistInfo />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 13.75rem;
  padding-top: 6.125rem;
  font-weight: 700;
}

@media (max-width: 650px) {
  .wrapper {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>

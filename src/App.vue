
<script setup>
import ProjectHeader from './components/Header/ProjectHeader.vue'
import ProjectFooter from './components/Footer/ProjectFooter.vue'
</script>

<template>
  <ProjectHeader />
  <RouterView />
  <ProjectFooter />
</template>

<style lang="scss">
.view {
  &__title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 4rem;
  }
  
  body {
    font-family: 'Gilroy';
  }
  
  .wrapper {
    max-width: calc(1150px + 2rem);
    padding-inline: 1rem;
    margin-inline: auto;
  }

  &__submit-btn {
    background: #1e1e1e;
    color: #ffffff;
    font-weight: 700;
    width: fit-content;
    border-radius: 0;
    padding: 1rem 5rem;
  }
}

</style>


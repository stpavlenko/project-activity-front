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
@import '@/assets/fonts/stylesheet.css';

.router-link-reset {
  color: inherit;
  text-decoration: none;
}

.view {
  &__title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 4rem;
  }
  &__load-btn {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 900;
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0;
    padding-inline: 0;
    margin-top: 3.5rem;
  }
  &__input {
    border-radius: 0;
    border: 1px solid #1e1e1e;
    padding: 1rem 2rem;
  }
  &__submit-btn {
    background: #1e1e1e;
    color: #ffffff;
    font-weight: 700;
    width: fit-content;
    border-radius: 0;
    padding: 1rem 5rem;
  }
  &__date {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    color: #c2c2c2;
  }
}

body {
  font-family: 'Gilroy';
}

.wrapper {
  max-width: calc(1150px + 2rem);
  padding-inline: 1rem;
  margin-inline: auto;
}
</style>

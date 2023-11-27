<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const matchedRoutes = computed(() => route.matched)
console.log(matchedRoutes.value);
</script>

<template>
  <nav style="--bs-breadcrumb-divider: '-'" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="match in matchedRoutes" :key="match.path" class="breadcrumb-item">
        <router-link :to="match.path" class="breadcrumb">{{ match.meta.breadcrumb }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/style/variables' as *;
.breadcrumb {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.98px;
  color: $text-primary;
  font-size: 0.75rem;
  font-weight: 800;
  margin-bottom: 0;
}
</style>

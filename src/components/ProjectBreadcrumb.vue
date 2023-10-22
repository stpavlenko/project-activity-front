<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>
<template>
  <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
    {{ route }}
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</template>
<style lang="scss"></style>

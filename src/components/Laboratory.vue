<script setup></script>
<template>
  <RouterLink class="router-link-reset" :to="{ name: 'laboratory' }">
    <div class="laboratory">
      <span class="laboratory__title">Название</span>
    </div></RouterLink
  >
</template>
<style lang="scss" scoped>
.laboratory {
  padding: 100px 60px;
  min-height: 360px;
  display: flex;
  align-items: flex-end;
}
</style>
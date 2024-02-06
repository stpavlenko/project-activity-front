
<script setup>
import PanelElements from './PanelElements.vue'
</script>
<template>
  <div class="sno_gallery__container">
    <img
      class="sno_gallery__item"
      src="../assets/images/sno-photo-one.jpg"
      alt="Photo of students"
    />
    <img
      class="sno_gallery__item"
      src="../assets/images/sno-photo-two.jpg"
      alt="Photo of students"
    />
  </div>
  <PanelElements></PanelElements>
</template>
<style lang="scss" scoped>
.sno_gallery__container {
  margin-top: 48px;
  display: flex;
  width: 100%;
}

.sno_gallery__item {
  width: 50%;
  height: 410px;
}
</style>
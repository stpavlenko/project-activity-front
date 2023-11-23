<script setup>
import SciFiVideo from '@/components/SciFi/SciFiVideo.vue'
</script>
<template>
  <div>
    <h3><router-link to="/" class="router-link-reset">Научная кухня</router-link></h3>
    <p>
      Московский политехнический университет приглашает молодых ученых (постдоков) в возрасте до 39
      лет участвовать в конкурсном отборе на получение грантов имени П.Л. Капицы. Конкурс
      осуществляется в рамках реализации программы стратегического академического лидерства
      «Приоритет-2030» и проводится во второй раз.
    </p>
    <div class="row">
      <SciFiVideo v-for="i in 3" :key="i" class="col-4" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
h3 {
  font-family: Gilroy;
  font-size: 1.5rem;
  font-weight: 800;
}
</style>

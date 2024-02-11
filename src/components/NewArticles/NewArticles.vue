<script>
export default {
  name: 'NewArticles',
  components: { PanelElements }
}
import PanelElements from '../PanelElements.vue'
</script>

<template>
  <div class="main__new-articles">
    <h2 class="new-articles__heading">Новые статьи</h2>

    <div class="new-articles__container">
      <div class="new-articles__item first">
        <h3 class="new-article__heading">Название статьи</h3>
      </div>

      <div class="new-articles__item second">
        <h3 class="new-article__heading">Название статьи</h3>
      </div>
    </div>

    <PanelElements></PanelElements>
  </div>
</template>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', 'sans-serif';
}

.main__new-articles {
  margin: 120px 138px 0px;
}

.new-articles__heading {
  font-size: 32px;
  font-weight: 700;
}
.new-articles__container {
  margin: 48px 0px;
  display: flex;
  width: 100%;
}

.new-articles__item {
  width: 50%;
  height: 410px;
}

.first {
  background-color: #d9d9d9;
}

.second {
  background-color: #999;
}

.new-article__heading {
  color: #fff;
  font-size: 24px;
  margin-top: 273px;
  margin-left: 68px;
}
</style>

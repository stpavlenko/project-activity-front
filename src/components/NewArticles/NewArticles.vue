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
      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>

      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>
    </div>

    <PanelElements></PanelElements>
  </div>
</template>

<style scoped lang="css">
.new-articles__heading {
  font-size: 32px;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}
.new-articles__container {
  margin: 0px;
  margin-bottom: 1.5rem;
  display: flex;
  width: 100%;
}

.new-articles__img {
  width: 100%;
}
.new-articles__item {
  position: relative;
  &:hover {
    .new-articles__img-box > img {
      transform: scale(1.1);
    }
  }
}
.new-articles__img-box {
  display: block;
  overflow: hidden;
  & > img {
    display: block;
    transition: 0.5s;
  }
}
.new-articles__title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  display: block;
  bottom: 0px;
  margin: 2.75rem;
}
</style>

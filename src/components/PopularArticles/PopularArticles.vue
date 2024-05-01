<script>
// export default {
//   name: 'Spheres'
// }
</script>

<template>
  <div class="main__new-articles">
    <h2 class="new-articles__heading">Популярные статьи</h2>

    <div class="new-articles__container">
      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
          <div class="new-articles__gradient"></div>
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>

      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
          <div class="new-articles__gradient"></div>
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>

      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
          <div class="new-articles__gradient"></div>
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>

      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
          <div class="new-articles__gradient"></div>
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>

      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
          <div class="new-articles__gradient"></div>
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>

      <div class="new-articles__item">
        <div class="new-articles__img-box">
          <img src="@/assets/images/article-example.png" alt="" class="new-articles__img" />
          <div class="new-articles__gradient"></div>
        </div>
        <h3 class="new-articles__title">Название статьи</h3>
      </div>
    </div>
  </div>

  <button class="btn view__load-btn">Загрузить еще</button>
</template>

<style scoped lang="scss">
.main__new-articles {
  margin-bottom: 0;
}

.spheres-btn {
  margin-top: 56px;
  font-size: 12px;
  font-weight: 900;
  height: 25px;
  background: none;
  border: none;
  text-transform: uppercase;
  border-bottom: 2px solid #000;
  letter-spacing: 2px;
}

.new-articles__heading {
  font-size: 32px;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.new-articles__container {
  margin: 0px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.new-articles__img {
  width: 100%;
}

.new-articles__item {
  position: relative;
  margin: 0px 0px;
  width: 50%;

  &:hover {
    .new-articles__img-box > img {
      transform: scale(1.1);
    }
  }
}
.new-articles__gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(12, 12, 12, 0.85));
}
.new-articles__img-box {
  display: block;
  overflow: hidden;
  position: relative;
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
  bottom: 0;
  margin: 2.75rem;
}
</style>

<script>
// export default {
//   name: 'Spheres'
// }
</script>

<template>
  <div class="main__popular-articles">
    <h2 class="popular-articles__heading">Популярные статьи</h2>
    <div class="popular-articles__container">

      <div class="popular-articles__item first">
        <h3 class="popular-article__heading">Название статьи</h3>
      </div>

      <div class="popular-articles__item second">
        <h3 class="popular-article__heading">Название статьи</h3>
      </div>

      <div class="popular-articles__item second">
        <h3 class="popular-article__heading">Название статьи</h3>
      </div>

      <div class="popular-articles__item  first">
        <h3 class="popular-article__heading">Название статьи</h3>
      </div>

      <div class="popular-articles__item first">
        <h3 class="popular-article__heading">Название статьи</h3>
      </div>

      <div class="popular-articles__item second">
        <h3 class="popular-article__heading">Название статьи</h3>
      </div>
    </div>
   

    <button class="spheres-btn">Загрузить еще</button>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', 'sans-serif';
}
.main__popular-articles {
  margin-top: 120px;
  margin-left: 138px;
  margin-right: 138px;
}
.popular-articles__heading {
  font-size: 32px;
  font-weight: 700;
}
.popular-articles__container {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.popular-articles__item {
  width: 50%;
  height: 410px;
}

.popular-article__heading {
  color: #fff;
  font-size: 24px;
  margin-top: 273px;
  margin-left: 68px;
}

.first {
  background-color: #d9d9d9;
}

.second {
  background-color: #999;
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
</style>

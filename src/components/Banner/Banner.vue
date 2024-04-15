<script>
export default {
  name: 'Banner'
}
</script>

<template>
  <div class="main__banner">
    <!-- <img src="@/assets/images/new-article__1.jpg" alt="" class="banner__img" /> -->
    <h2 class="banner__heading">
      Приветствуем вас на странице научного
      <br />сектора Московского политеха!
    </h2>
    <p class="banner__text">
      Здесь мы объединяем студентов и учёных в интересном путешествии<br />по актуальным научным
      исследованиям.<br />
      Присоединяйтесь к научному обществу, где идеи преобразуются<br />
      в инновации, а знание становится ключом к современному прогрессу.
    </p>
  </div>
</template>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', 'sans-serif';
}
.main__banner {
  height: 826px;
  width: 100%;
  padding-top: 416px;
  padding-left: 138px;
  background-color: #999;
  /* background-image: url('@/assets/images/new-article__1.jpg'); */
}

.banner__heading {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
}

.banner__text {
  width: 628px;
  margin-top: 48px;
  font-size: 16px;
  line-height: 28px;
  color: #fff;
}
/* .banner__img {
  position: absolute;
  right: 0%;
  left: 0%;
  top: 0%;
} */
</style>

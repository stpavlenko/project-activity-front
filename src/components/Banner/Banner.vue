<script>
export default {
  name: 'Banner'
}
</script>

<template>
  <div class="main__banner">
    <h2 class="banner__heading">Название новости</h2>
    <p class="banner__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id es. Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit
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
  padding-top: 238px;
  padding-left: 68px;
  padding-right: 138px;
  background-color: #999;
}

.banner__heading {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
}

.banner__text {
  width: 628px;
  margin-top: 80px;
  font-size: 16px;
  line-height: 28px;
  color: #fff;
}
</style>

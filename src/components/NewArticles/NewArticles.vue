<script>
export default {
  name: 'NewArticles'
}
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

    <div class="new-articles__panel">
      <div class="panel__container">
        <p class="panel-text">01</p>
        <p class="panel-text">-</p>
        <p class="panel-text">06</p>
      </div>

      <div class="panel__btns">
        <button class="panel-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </button>
        <button class="panel-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
@font-face {
  font-family: 'Gilroy';
  src: local('Gliroy') url('../../assets/fonts/Gilroy-Extrabold.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', 'sans-serif';
}

.main__new-articles {
  margin-top: 120px;
  margin-left: 138px;
  margin-right: 138px;
}

.new-articles__heading {
  font-size: 32px;
  font-weight: 700;
}
.new-articles__container {
  margin-top: 48px;
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

.new-articles__panel {
  margin-top: 48px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 64px;
}

.panel__container {
  display: flex;
  gap: 8px;
}

.panel-text {
  font-size: 12px;
  color: #1e1e1e;
}

.panel__btns {
  display: flex;
  align-items: center;
  gap: 16px;
}

.panel-btn {
  width: 50px;
  height: 50px;
  background: none;
  border: none;
}
</style>

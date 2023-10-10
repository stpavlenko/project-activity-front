<script>
    export default {
        name: 'Spheres'
    }
</script>

<template>
       <div class="main__spheres">
      <h2 class="spheres__heading">Сферы</h2>
      <div class="spheres__container">
        <div class="spheres-item item1">
          <h3 class="sphere__heading">Математика</h3>
        </div>
        <div class="spheres-item item2">
          <h3 class="sphere__heading">Физика</h3>
        </div>
        <div class="spheres-item item3">
          <h3 class="sphere__heading">Химия</h3>
        </div>
        <div class="spheres-item item4">
          <h3 class="sphere__heading">География</h3>
        </div>
        <div class="spheres-item item5">
          <h3 class="sphere__heading">Социология</h3>
        </div>
        <div class="spheres-item item6">
          <h3 class="sphere__heading">Информатика</h3>
        </div>
        <div class="spheres-item item7">
          <h3 class="sphere__heading">История</h3>
        </div>
        <div class="spheres-item item8">
          <h3 class="sphere__heading">Экономика</h3>
        </div>
      </div>

      <button class="spheres-btn">Загрузить еще</button>
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
.main__spheres {
  margin-top: 122px;
  padding-left: 68px;
  padding-right: 138px;
}

.spheres__heading {
  font-size: 32px;
  font-weight: 700;
}

.spheres__container {
  margin-top: 48px;
  display: grid;
}


.spheres-item {
  height: 359px;
}
.item1 {
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: #d9d9d9;
}
.item2 {
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 3;
  grid-column-end: 4;
  background-color: #999;
}
.item3 {
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start:4;
  grid-column-end: 5;
  background-color: #d9d9d9;
}

.item4 {
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: #999;
}
.item5 {
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 5;
  background-color: #d9d9d9;
}
.item6 {
  grid-row-start: 3;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  background-color: #999;
}

.item7 {
  grid-row-start: 3;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  background-color: #d9d9d9;
}

.item8 {
  grid-row-start: 3;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 5;
  background-color: #999;
}

.sphere__heading {
  margin-top: 239px;
  margin-left: 68px;
  color: #fff;
  font-size: 24px;
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
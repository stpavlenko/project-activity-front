<script setup></script>
<template>
  <div class="wrapper article view__content-wrapper">
    <project-breadcrumb />

    <div class="article__card">
      <h2 class="view__title">Что такое объектно-ориентированное программирование?</h2>
    </div>
    <div class="article__content">
      <p class="article__text">
        Объектно-ориентированное программирование (ООП) является одним из наиболее популярных и
        мощных подходов к разработке программного обеспечения. В статье мы узнаем больше информации
        про ООП. ООП позволяет разрабатывать сложные системы, которые могут быть легко поняты,
        поддержаны и модифицированы.
      </p>
      <div class="article__block">
        <span class="article__title">Что такое объектно-ориентированное программирование?</span>
        <p class="article__text">
          ООП - это методология программирования, которая строится на концепции "объектов". Объекты
          представляют собой экземпляры классов, которые являются шаблонами для создания объектов. В
          ООП данные и функции, которые с ними работают, объединяются в единые сущности - объекты.
          Это позволяет абстрагировать сложные системы, делая их более модульными и понятными.
        </p>
      </div>
      <div class="article__block">
        <span class="article__title">Основные принципы ООП</span>
        <ol class="article__list">
          <li>
            <span class="article__title">Инкапсуляция</span>
            <p class="article__text"></p>
          </li>
          <li>
            <span class="article__title">Наследование</span>
            <p class="article__text">
              Инкапсуляция означает скрытие деталей реализации объекта и предоставление только
              интерфейса для взаимодействия с ним. Это позволяет изолировать изменения в одной части
              программы от других частей, что делает код более надежным и устойчивым к изменениям.
            </p>
          </li>
          <li>
            <span class="article__title">Полиморфизм</span>
            <p class="article__text">
              Наследование позволяет создавать новые классы на основе существующих. Это способствует
              повторному использованию кода и созданию иерархий классов. Наследование позволяет
              наследникам использовать свойства и методы предков и переопределять или расширять их,
              если это необходимо.
            </p>
          </li>
          <li>
            <span class="article__title">Абстракция</span>
            <p class="article__text">
              Полиморфизм означает способность объектов разных классов обладать общим интерфейсом.
              Это позволяет обрабатывать объекты разных типов с помощью общих методов и функций.
              Полиморфизм делает код более гибким и расширяемым.
            </p>
          </li>
        </ol>
      </div>
    </div>
    <button type="button" class="btn view__load-btn">Загрузить полностью</button>
  </div>
</template>
<style lang="scss" scoped>
.view__title {
  color: #ffff;
}
ol {
  padding: 0;
  margin: 0;
}
li {
  font-size: 0.75rem;
  font-weight: 800;
}
p {
  margin: 0;
}
.article {
  &__block {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style-position: inside;
  }
  &__card {
    padding: 64px;
    margin: 40px 0 64px 0;
    min-height: 660px;
    display: flex;
    align-items: flex-end;
    background-color: #999999;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__title {
    font-size: 0.75rem;
    font-weight: 900;
  }
  &__text {
    font-size: 0.75rem;
    font-weight: 400;
  }
}
</style>

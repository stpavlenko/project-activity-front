<script setup>
import SnoGallery from '../components/SnoGallery.vue'</script>
<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Студенческое научное общество</h2>
    <div class="sno-wrapper">
      <section class="sno">
        <div class="sno__info">
          <p class="sno__text">
            Студенческое научное общество – это объединение студентов, которые популяризируют науку
            и содействуют вовлечению обучающихся в научную деятельность. СНО объединяет студентов,
            интересующихся наукой, технологическим предпринимательством, популяризацией научной и
            инновационной деятельности, и рассказывает о науке просто.
          </p>
          <div><span>Задачи Студенческого научного общества:</span>
            <ul>
              <li>участие и организация студенческих научных мероприятий</li>
              <li>организация научно-популярных мероприятий</li>
              <li>ведение научно-популярной проектной деятельности</li>
              <li>сотрудничество со СНО других ВУЗов</li>
            </ul>
          </div>

          <p class="sno__text">Присоединяйся к нам, наука – это интересно!</p>

          <RouterLink class="router-link-reset" :to="{ name: 'reg-form' }">
            <button type="button" class="btn view__load-btn">
              Вступить в студенческое научное общество
            </button>
          </RouterLink>
        </div>
        <figure class="figure">
          <img src="@/assets/images/sno_picture.png" class="sno__image" alt="Председатель СНО" />
          <figcaption class="sno__image__caption">Председатель СНО - Александр Глинин</figcaption>
        </figure>
      </section>
      <SnoGallery></SnoGallery>
      <button type="button" class="view__link-btn btn provision-btn">
        <img src="@/assets/images/paperclip.png" alt="paperclip" />
        <span>Положение о Студенческом научном обществе</span>
      </button>
      <section class="contacts">
        <h3 class="contacts__title">Контакты</h3>
        <ul class="contacts__list">
          <li>
            <a href="https://vk.com/sno.mospolytech">
              <img src="@/assets/images/vk-black.svg" alt="vk" />
              <span>https://vk.com/sno.mospolytech</span>
            </a>
          </li>
          <li>
            <a href="https://vk.com/a.e.glinin">
              <img src="@/assets/images/vk-black.svg" alt="vk" />
              <span>https://vk.com/a.e.glinin</span>
            </a>
          </li>
          <li>
            <a href="tel:+7(495)223-05-23">
              <img src="@/assets/images/phone-black.svg" alt="phone" />
              <span>+7 (495) 223-05-23</span>
            </a>
          </li>
          <li>
            <a href="mailto:sno@mospolytech.ru">
              <img src="@/assets/images/mail-black.svg" alt="email" />
              <span>Email: sno@mospolytech.ru</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/style/variables' as *;

.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 13.75rem;
}

.provision-btn {
  transition: $transition-duration-default;

  &:hover {
    background-color: $bg-tertiary;
    color: #fff;
  }
}

.contacts {
  color: #1e1e1e;

  &__title {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
  }

  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    & > li {
      margin-top: 1rem;

      & > a {
        display: flex;
        flex-flow: row;
        gap: 0.5rem;
        color: #1e1e1e;
        text-decoration: none;
      }
    }
  }
}

.link {
  width: fit-content;
}

.view__load-btn {
  margin: 0;
}

.figure {
  margin: 0;
}

.view__link-btn {
  width: 50%;
}

.sno-wrapper {
  display: flex;
  flex-flow: column;
  gap: 64px;
}

.sno {
  display: flex;
  gap: 40px;

  &__info {
    display: flex;
    flex-flow: column;
    gap: 40px;
  }

  &__text {
    margin: 0;
  }


  &__image {
    width: 400px;
    height: 400px;

    &__caption {
      margin-top: 8px;
      font-size: 12px;
      color: #1e1e1e;
      text-align: center;
    }
  }
}
</style>

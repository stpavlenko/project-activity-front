<template>
  <header class="header">
    <div class="wrapper header__content">
      <div class="header__left">
        <RouterLink :to="{ name: 'home' }" class="navigation-link">
          <img class="header__logo" src="@/assets/images/mospolytech-logo-white.svg" alt="logo"
        /></RouterLink>
      </div>

      <div class="header__right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="menu-btn bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <nav class="header__navigation">
          <ul class="navigation-list">
            <li class="navigation-item">
              <RouterLink :to="{ name: 'sciFiMain' }" class="navigation-link">Научпоп</RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink :to="{ name: 'articles' }" class="navigation-link">Статьи</RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink :to="{ name: 'scientists' }" class="navigation-link">Учёные</RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink :to="{ name: 'sno' }" class="navigation-link">СНО</RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink :to="{ name: 'laboratories' }" class="navigation-link">
                Лаборатории
              </RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink :to="{ name: 'home' }" class="navigation-link">Научные гранты</RouterLink>
            </li>
            <!-- <li class="navigation-item">
              <RouterLink :to="{ name: 'reg-form' }" class="navigation-link">
                Стать участником
              </RouterLink>
            </li> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'Header',
  components: { RouterLink }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  background-color: rgb(30, 30, 30);
  &__content {
    min-height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header__logo {
  width: 159px;
  height: 45px;
}

.menu-btn {
  display: none;
}
.navigation-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
}

.navigation-link {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-style: normal;
  font-weight: 800; //????
  line-height: normal;
  letter-spacing: 1.4px;
}

@media (max-width: 1020px) {
  .header {
    padding-right: 68px;
  }
  .header__logo {
    width: 100px;
    height: 31px;
  }
  .navigation-list {
    gap: 22px;
  }
}

@media (max-width: 785px) {
  .menu-btn {
    width: 31px;
    height: 31px;
    display: block;
    color: #fff;
  }

  .header__navigation {
    display: none;
  }
}
</style>

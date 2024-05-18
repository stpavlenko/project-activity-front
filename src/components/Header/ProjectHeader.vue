<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="wrapper header__wrapper">
        <button class="btn header__search-button">
          <i class="bi bi-search fs-5"></i>
        </button>

        <RouterLink :to="{ name: 'home' }" class="navigation-link">
          <img class="header__logo" src="@/assets/images/mospolytech-logo-black.svg" alt="logo"
          /></RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavbar"
                aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-5"></i>
        </button>

        <div class="collapse navbar-collapse" id="headerNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink :to="{ name: 'sciFiMain' }" class="navigation-link">Научпоп</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'articles' }" class="navigation-link">Статьи</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'scientists' }" class="navigation-link">Учёные</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'sno' }" class="navigation-link">СНО</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'laboratories' }" class="navigation-link">
                Лаборатории
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'grants' }" class="navigation-link">Научные гранты</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/style/variables' as *;

.navbar-toggler {
  border: none;
}

.navbar {
  min-height: 104px;
}

.navbar-collapse {
  flex-grow: 0;
}

.navbar-nav {
  gap: 2.5rem;
}

.header {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 159px;
    height: 45px;
  }

  &__search-button {
    display: none;
  }
}

.navigation-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 44px;
}

.navigation-link {
  color: $text-primary;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-style: normal;
  font-weight: 800; //????
  line-height: normal;
  letter-spacing: 1.4px;

  &:hover {
    color: $text-secondary;
  }
}

@media (max-width: 768px) {
  .navbar {
    min-height: auto;
  }

  .navbar-nav {
    gap: .5rem;
  }

  .header {
    &__logo {
      width: 5.25rem;
    }

    &__search-button {
      display: block;
    }
  }
}
</style>

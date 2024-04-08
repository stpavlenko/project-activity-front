<template>
  <footer class="footer">
    <div class="footer__content wrapper">
      <div class="footer__left">
        <RouterLink :to="{ name: 'home' }" class="navigation-link">
          <img class="footer__logo" src="@/assets/images/mospolytech-logo-white.svg" alt="logo" />
        </RouterLink>
        <nav class="footer__navigation">
          <ul class="navigation-list">
            <li
              class="navigation-item"
              v-for="route in appStore.routes"
              :key="route.name"
              @click="scroll"
            >
              <RouterLink :to="{ name: route.name }" class="navigation-link">
                {{ route.text }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="social-media">
        <a href="#">
          <img
            src="@/assets/images/akar-icons_vk-fill.svg"
            alt="vk icon"
            class="social-media__icon"
          />
        </a>
        <a href="#">
          <img
            src="@/assets/images/akar-icons_gmail-fill.svg"
            alt="gmail icon"
            class="social-media__icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()

function scroll() {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  })
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gilroy', 'sans-serif';
  font-weight: 900;
}

.footer {
  background-color: rgb(30, 30, 30);
}

.footer__content {
  padding-block: 6rem;
  min-height: 396px;
  display: flex;
  justify-content: space-between;
}

.footer__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.social-media {
  display: flex;
  flex-direction: column;
  gap: 18px;
  opacity: 50%;
}

.navigation-list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 6rem;
  row-gap: 1rem;
  list-style: none;
}

.navigation-link {
  color: rgba(255, 255, 255, 0.5);
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.98px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    color: #ffffff;
  }
}

@media (max-width: 1020px) {
  .footer {
    padding-right: 68px;
  }

  .footer__logo {
    width: 100px;
    height: 31px;
  }

  .social-media__icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 550px) {
  .footer {
    height: auto;
    padding-bottom: 96px;
  }

  .navigation-link {
    font-size: 10px;
  }
}
</style>

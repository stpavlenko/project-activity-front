<template>
  <footer class="footer">
    <div class="footer__content wrapper">
      <div class="footer__top">
        <RouterLink to="/" class="navigation-link">
          <img class="footer__logo" src="@/assets/images/mospolytech-logo-white.svg" alt="logo" />
        </RouterLink>

        <div class="social-media">
          <a href="#">
            <img
              src="@/assets/images/akar-icons_vk-fill.svg"
              alt="vk icon"
              class="social-media__icon"
          /></a>
          <a href="#"
            ><img
              src="@/assets/images/akar-icons_tg-fill.svg"
              alt="telegram icon"
              class="social-media__icon"
          /></a>
          <a href="#"
            ><img
              src="@/assets/images/akar-icons_gmail-fill.svg"
              alt="gmail icon"
              class="social-media__icon"
          /></a>
        </div>
      </div>

      <div class="footer__bottom">
        <nav class="footer__navigation">
          <ul class="navigation-list">
            <li class="navigation-item">
              <RouterLink to="/articles" class="navigation-link">Статьи</RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink to="/scientists" class="navigation-link">Учёные</RouterLink>
            </li>
            <li class="navigation-item">
              <RouterLink to="/reg-form" class="navigation-link">Стать участником</RouterLink>
            </li>
          </ul>
        </nav>

        <form class="footer__form">
          <label class="form__label">
            Подписаться на новостную рассылку
            <div>
              <input type="text" placeholder="Email" class="form__input" />
              <button class="form__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
  &__content {
    min-height: 396px;
  }
  background-color: rgb(30, 30, 30);
}

.footer__top {
  padding-top: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-media {
  display: flex;
  gap: 18px;
  opacity: 50%;
}

.footer__bottom {
  margin-top: 92px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.navigation-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 18px;
}

.navigation-link {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 50%;
}

.footer__form {
  width: 468px;
  opacity: 50%;
}

.form__label {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 38px;
  font-size: 12px;
}

.form__input {
  position: relative;
  width: 100%;
  background: none;
  color: #fff;
}
.form__input::placeholder {
  color: #fff;
  font-size: 8px;
}

.form__btn {
  width: 12px;
  position: absolute;
  right: 148px;
  background: none;
  border: none;
  color: #fff;
}

@media (max-width: 1020px) {
  .footer {
    padding-right: 68px;
  }

  .form__btn {
    right: 78px;
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

@media (max-width: 785px) {
  .footer__form {
    width: 234px;
    opacity: 50%;
  }
}

@media (max-width: 550px) {
  .footer {
    height: auto;
    padding-bottom: 96px;
  }
  .footer__top {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .footer__bottom {
    flex-direction: column;
    margin-top: 30px;
  }

  .form__btn {
    left: 280px;
  }

  .footer__form {
    margin-top: 30px;
  }

  .form__label {
    gap: 15px;
  }

  .navigation-link {
    font-size: 10px;
  }

  .form__label {
    font-size: 10px;
  }
}
</style>

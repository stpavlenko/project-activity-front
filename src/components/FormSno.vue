<script setup>
import { ref } from 'vue'

const radioChecked = ref('show')
</script>
<template>
  <form class="form">
    <fieldset class="form__wrapper">
      <div class="form__grid">
        <input type="text" class="form-control view__input" placeholder="Фамилия" />
        <input type="text" class="form-control view__input" placeholder="Имя" />
        <input type="text" class="form-control view__input" placeholder="Отчество" />
        <input
          type="text"
          class="form__grid--two-columns form-control view__input"
          placeholder="Факультет/ Институт"
        />
        <input type="text" class="form-control view__input" placeholder="Группа" />
        <input type="text" class="form-control view__input" placeholder="Гражданство" />
        <input type="text" class="form-control view__input" placeholder="Контактный телефон" />
        <input type="text" class="form-control view__input" placeholder="Электронная почта" />
      </div>

      <div class="form__flex">
        <label for="commentary">Сфера интересов</label>
        <textarea
          id="commentary"
          class="form-control view__input"
          placeholder="Ваш комментарий"
          rows="4"
          style="resize: none"
        />
      </div>

      <div class="form__flex">
        <label for="skills">Навыки и умения</label>
        <textarea
          id="skills"
          class="form-control view__input"
          placeholder="Ваш комментарий"
          rows="4"
          style="resize: none"
        />
      </div>

      <div class="form__flex">
        <label for="experience"> Наличие опыта в организации и проведении мероприятий </label>
        <div class="d-flex flex-row gap-2">
          <div id="radio" class="form-check">
            <input
              v-model="radioChecked"
              value="show"
              class="form-check-input"
              type="radio"
              name="exp"
              id="show"
            />
            <label for="show">Да</label>
          </div>
          <div class="form-check">
            <input
              v-model="radioChecked"
              value="hide"
              class="form-check-input"
              type="radio"
              name="exp"
              id="hide"
            />
            <label for="hide">Нет</label>
          </div>
        </div>
        <textarea
          v-if="radioChecked === 'show'"
          id="experience"
          class="form-control view__input"
          placeholder="Ваш комментарий"
          rows="4"
          style="resize: none"
        />
      </div>

      <button type="submit" class="w-100 btn view__submit-btn align-self-end mt-4 form__submit">
        Отправить заявку
      </button>
    </fieldset>
  </form>
</template>
<style lang="scss">
@use '@/assets/style/variables' as *;

.form {
  &__wrapper {
    box-sizing: content-box;
    border: 1px solid #1e1e1e;
    padding: 3.5rem 2.5rem;
    display: flex;
    margin: 0 auto;
    max-width: 1168px;
    flex-flow: column;
    gap: 1.24rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 12px;

    &--two-columns {
      grid-column: 1/3;
    }
  }

  &__flex {
    display: flex;
    flex-flow: column;
    gap: 1.2rem;
  }

  &__submit {
    transition: $transition-duration-default;

    &:hover {
      color: #fff;
      background-color: $bg-tertiary;
    }
  }

}

.form-check-input:checked {
  background-color: #000000;
  border-color: #000000;
}

.form-check-input:focus {
  border-color: none;
  box-shadow: none;
}
</style>

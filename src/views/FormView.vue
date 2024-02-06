<script setup>
import { ref } from 'vue'

const radioChecked = ref('show')
</script>

<template>
  <div class="wrapper">
    <project-breadcrumb />
    <h2 class="view__title">Стать участником Студенческого научного общества</h2>
    <div class="form__wrapper">
      <section class="section">
        <input type="text" class="form-control view__input" placeholder="Фамилия" />
        <input type="text" class="form-control view__input" placeholder="Имя" />
        <input type="text" class="form-control view__input" placeholder="Отчество" />
      </section>

      <section class="section">
        <input type="text" class="form-control view__input" placeholder="Факультет/ Институт" />
        <input type="text" class="form-control view__input" placeholder="Группа" />
      </section>

      <section class="section">
        <input type="text" class="form-control view__input" placeholder="Гражданство" />
        <input type="text" class="form-control view__input" placeholder="Контактный телефон" />
        <input type="text" class="form-control view__input" placeholder="Электронная почта" />
      </section>

      <section class="section">
        <label for="commentary" class="form-label">Сфера интересов</label>
        <textarea
          id="commentary"
          class="form-control view__input"
          placeholder="Ваш комментарий"
          rows="4"
          style="resize: none"
        />
      </section>

      <section class="section">
        <label for="skills" class="form-label">Навыки и умения</label>
        <textarea
          id="skills"
          class="form-control view__input"
          placeholder="Ваш комментарий"
          rows="4"
          style="resize: none"
        />
      </section>

      <section class="section">
        <label for="experience" class="form-label">
          Наличие опыта в организации и проведении мероприятий
        </label>
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
            <label class="form-check-label" for="show">Да</label>
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
            <label class="form-check-label" for="hide">Нет</label>
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
      </section>

      <button type="button" class="btn view__submit-btn align-self-end">Отправить заявку</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-top: 2.75rem;
  margin-bottom: 13.75rem;
}

.form__wrapper {
  box-sizing: content-box;
  border: 1px solid #1e1e1e;
  padding: 3.5rem 2.5rem;
  display: flex;
  margin: 0 auto;
  max-width: 504px;
  flex-flow: column;
  gap: 2.5rem;
}

.form-label {
  margin-bottom: 0;
}

.section {
  display: flex;
  flex-flow: column;
  gap: 1.25rem;
}
</style>

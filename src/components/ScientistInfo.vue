<script setup></script>

<template>
  <ul class="scientist-info">
    <li class="scientist-info__item">
      <h2 class="scientist-info__title">Должность</h2>
      <div class="scientist-info__text">
        <p class="scientist-info__paragraph">Работает в лаборатории.</p>
      </div>
    </li>

    <li class="scientist-info__item">
      <h2 class="scientist-info__title">Биография</h2>
      <div class="scientist-info__text">
        <p class="scientist-info__paragraph">Родилась 08 июля 1980 года в г. Москва.</p>
        <h3 class="scientist-info__subtitle">Образование</h3>
        <p class="scientist-info__paragraph">
          В 2003 году окончила Московский государственный вечерний металлургический институт (МГВМИ)
          по специальности «Металловедение и термическая обработка металлов», в 2009 по
          специальности «Экономика и управление на предприятии». В 2008 году защитила диссертацию на
          соискание ученой степени кандидата технических наук.
        </p>
        <h3 class="scientist-info__subtitle">Опыт работы и награды</h3>
        <p class="scientist-info__paragraph">
          С 1998 по 2008 год занимала должности лаборанта, учебного мастера, старшего преподавателя
          кафедры «Металловедение и термообработка металлов»<br />
          С 2009 по 2013 год – доцент кафедры «Материаловедение» Московского государственного
          технического университета «МАМИ», Московского государственного машиностроительного
          университета (МАМИ). В 2013 году получила ученое звание доцента.<br />
          С марта 2013 по май 2013 – и. о. заместителя директора Технологического института
          Московского государственного машиностроительного университета (МАМИ).<br />
          С мая 2013 по сентябрь 2015 год – и.о. ректора Федерального государственного бюджетного
          образовательного учреждения высшего профессионального образования Московский
          государственный вечерний металлургический институт (МГВМИ).<br />
          В 2015 году награждена почетной грамотой Министерства образования и науки Российской
          Федерации за многолетнюю плодотворную работу по развитию и совершенствованию учебного
          процесса, за значительный вклад в дело подготовки высококвалифицированных специалистов.<br />
          С сентября 2015 по август 2016 – директор Инженерно-конструкторского института
          Университета машиностроения.<br />
          С февраля 2016 по декабрь 2016 – проректор по развитию, первый проректор-проректор по
          учебной работе, проректор по учебно-методической работе Федерального государственного
          образовательного учреждения высшего образования «Московский автомобильно-дорожный
          государственный технический университет (МАДИ)».<br />
          C января 2017 года – директор по образовательным и научным проектам Московского
          политехнического университета.<br />
          С мая 2019 года – проректор по учебной работе Московского политехнического университета.
          Занимается научно-педагогической деятельностью, является доцентом кафедры «Металлургия»,
          руководителем образовательной программы «Инновации в металлургии» Московского
          политехнического университета.
        </p>
      </div>
    </li>

    <li class="scientist-info__item">
      <h2 class="scientist-info__title">Контакты</h2>
      <ul class="contacts">
        <li class="contacts__item">
          <img src="@/assets/images/email-black.svg" alt="gmail icon" class="social-media__icon" />
          Email: familiaIO@gmail.com
        </li>
        <li class="contacts__item">
          <img
            src="@/assets/images/adress-black.svg"
            alt="adress icon"
            class="social-media__icon"
          />
          Адрес: ул. Большая Семеновская, д.38
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.scientist-info {
  padding: 0;
  list-style: none;
  font-family: Gilroy;
  &__item {
    padding-bottom: 1.5rem;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 800;
    padding-bottom: 0.75rem;
    margin: 0;
    line-height: 1.875rem;
  }
  &__subtitle {
    font-size: 1rem;
    font-weight: 800;
    padding-bottom: 0.75rem;
    padding-top: 1.5rem;
    margin: 0;
    line-height: 1rem;
  }
  &__paragraph {
    margin-bottom: 0;
    line-height: 1.75rem;
  }

  .contacts {
    list-style: none;
    padding-left: 0;
    padding-top: 0.4rem;
    &__item {
      line-height: 1.2rem;
      &:not(:last-of-type) {
        padding-bottom: 0.75rem;
      }
    }
    img {
      padding-right: 0.5rem;
    }
  }

  @media (max-width: 576px) {
    .scientist-info {
      &__title {
        font-size: 1.2rem;
        padding-bottom: 0;
      }
    }
  }
}
</style>

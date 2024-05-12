<script></script>

<template>
  <div class="wrapper laboratory view__content-wrapper">
    <h1 class="laboratory__heading">Название лаборатории</h1>

    <video class="laboratory__video">
      <!-- <source src="video.mp4" type="video/mp4"> rollup ругается, кривой источник -->
      Your browser does not support the video tag
    </video>

    <div class="laboratory__description">
      <h2 class="description__heading">Описание лаборатории</h2>
      <div class="paragraph">
        <h3 class="paragraph__heading">Заголовок описания</h3>
        <p class="paragraph__text">
          В 2003 году окончила Московский государственный вечерний металлургический институт (МГВМИ)
          по специальности «Металловедение и термическая обработка металлов», в 2009 по
          специальности «Экономика и управление на предприятии». В 2008 году защитила диссертацию на
          соискание ученой степени кандидата технических наук.
        </p>
      </div>

      <div class="paragraph">
        <h3 class="paragraph__heading">Заголовок описания</h3>
        <p class="paragraph__text">
          С 1998 по 2008 год занимала должности лаборанта, учебного мастера, старшего преподавателя
          кафедры «Металловедение и термообработка металлов» <br />
          С 2009 по 2013 год – доцент кафедры «Материаловедение» Московского государственного
          технического университета «МАМИ», Московского государственного машиностроительного
          университета (МАМИ).<br />
          В 2013 году получила ученое звание доцента.<br />
          С марта 2013 по май 2013 – и. о. заместителя директора Технологического института
          Московского государственного машиностроительного университета (МАМИ).<br />
          С мая 2013 по сентябрь 2015 год – и.о. ректора Федерального государственного бюджетного
          образовательного учреждения высшего профессионального образования Московский
          государственный вечерний металлургический институт (МГВМИ). <br />
          В 2015 году награждена почетной грамотой Министерства образования и науки Российской
          Федерации за многолетнюю плодотворную работу по развитию и совершенствованию учебного
          процесса, за значительный вклад в дело подготовки высококвалифицированных специалистов.
          <br />
          С сентября 2015 по август 2016 – директор Инженерно-конструкторского института
          Университета машиностроения. <br />
          С февраля 2016 по декабрь 2016 – проректор по развитию, первый проректор-проректор по
          учебной работе, проректор по учебно-методической работе Федерального государственного
          образовательного учреждения высшего образования «Московский автомобильно-дорожный
          государственный технический университет (МАДИ)».<br />
          C января 2017 года – директор по образовательным и научным проектам Московского
          политехнического университета.<br />
          С мая 2019 года – проректор по учебной работе Московского политехнического университета.
          <br />
          Занимается научно-педагогической деятельностью, является доцентом кафедры «Металлургия»,
          руководителем образовательной программы «Инновации в металлургии» Московского
          политехнического университета.
        </p>
      </div>

      <button class="load-more__btn">Загрузить еще</button>
    </div>

    <div class="laboratory__scientiests">
      <h2 class="scientiests__header">Учёные лаборатории</h2>
      <div class="slider">
        <div class="slider__container">
          <div class="scientiest__card">
            <img src="" class="scientiest__img" />
            <p class="scientiest__name">Фамилия Имя Отчество</p>
          </div>

          <div class="scientiest__card">
            <img src="" class="scientiest__img" />
            <p class="scientiest__name">Фамилия Имя Отчество</p>
          </div>

          <div class="scientiest__card">
            <img src="" class="scientiest__img" />
            <p class="scientiest__name">Фамилия Имя Отчество</p>
          </div>

          <div class="scientiest__card">
            <img src="" class="scientiest__img" />
            <p class="scientiest__name">Фамилия Имя Отчество</p>
          </div>
        </div>

        <div class="slider__panel">
          <div class="panel__info">
            <p class="info__text">01</p>
            <p class="info__text">-</p>
            <p class="info__text">06</p>
          </div>

          <div class="panel__btns">
            <button class="panel__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
            </button>
            <button class="panel__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .laboratory {
    margin-left: 136px;
    margin-right: 136px;
    margin-top: 40px;
    margin-bottom: 220px;
} */

.laboratory__heading {
  color: #1e1e1e;
  font-size: 40px;
  font-weight: 900;
}

.laboratory__video {
  width: 100%;
  margin-top: 40px;
  background-color: #d9d9d9;
}

.description__heading {
  display: none;
}

.paragraph__heading {
  margin-top: 24px;
  font-size: 16px;
  font-weight: 900;
}

.paragraph__text {
  margin-top: 12px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 28px;
}

.load-more__btn {
  margin-top: 40px;
  font-size: 12px;
  font-weight: 900;
  height: 25px;
  background: none;
  border: none;
  text-transform: uppercase;
  border-bottom: 2px solid #000;
  letter-spacing: 2px;
}

.scientiests__header {
  margin-top: 64px;
  font-size: 30px;
  font-weight: 900;
}

.slider {
  margin-top: 24px;
}

.slider__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.scientiest__card {
  width: 262px;
  height: 354px;
}

.scientiest__img {
  width: 262px;
  height: 262px;
  background-color: #d9d9d9;
}

.scientiest__name {
  margin-top: 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.slider__panel {
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 64px;
}

.panel__info {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.panel__btns {
  display: flex;
  align-items: center;
  gap: 16px;
}

.panel__btn {
  width: 50px;
  height: 50px;
  background: none;
  border: none;
}

.info__text {
  margin: 0;
  font-size: 12px;
}
</style>

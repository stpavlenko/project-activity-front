<script>
import ScientistNews from '../components/ScientistNews.vue'
export default {
    name: 'ScientistInfo',
    components: { ScientistNews }
}
</script>

<template>
    <ol class="scientist-info">
        <li class="scientist-info__item">
            <h3 id="biography">Биография</h3>
            <div>
                <p>Родилась 08 июля 1980 года в г. Москва.</p>
                <p class="biography__title">Образование</p>
                <p>В 2003 году окончила Московский государственный вечерний металлургический институт (МГВМИ) по
                    специальности «Металловедение и термическая обработка металлов», в 2009 по специальности «Экономика
                    и управление на предприятии».
                    В 2008 году защитила диссертацию на соискание ученой степени кандидата технических наук.</p>
                <p class="biography__title">Опыт работы и награды</p>
                <p>С 1998 по 2008 год занимала должности лаборанта, учебного мастера, старшего преподавателя кафедры
                    «Металловедение и термообработка металлов»
                    С 2009 по 2013 год – доцент кафедры «Материаловедение» Московского государственного технического
                    университета «МАМИ», Московского государственного машиностроительного университета (МАМИ).
                    В 2013 году получила ученое звание доцента.
                    С марта 2013 по май 2013 – и. о. заместителя директора Технологического института Московского
                    государственного машиностроительного университета (МАМИ).
                    С мая 2013 по сентябрь 2015 год – и.о. ректора Федерального государственного бюджетного
                    образовательного учреждения высшего профессионального образования Московский государственный
                    вечерний металлургический институт (МГВМИ).
                    В 2015 году награждена почетной грамотой Министерства образования и науки Российской Федерации за
                    многолетнюю плодотворную работу по развитию и совершенствованию учебного процесса, за значительный
                    вклад в дело подготовки высококвалифицированных специалистов.
                    С сентября 2015 по август 2016 – директор Инженерно-конструкторского института Университета
                    машиностроения.
                    С февраля 2016 по декабрь 2016 – проректор по развитию, первый проректор-проректор по учебной
                    работе, проректор по учебно-методической работе Федерального государственного образовательного
                    учреждения высшего образования «Московский автомобильно-дорожный государственный технический
                    университет (МАДИ)».
                    C января 2017 года – директор по образовательным и научным проектам Московского политехнического
                    университета.
                    С мая 2019 года – проректор по учебной работе Московского политехнического университета.
                    Занимается научно-педагогической деятельностью, является доцентом кафедры «Металлургия»,
                    руководителем образовательной программы «Инновации в металлургии» Московского политехнического
                    университета.</p>
                <button class="load-btn">Загрузить еще</button>
            </div>
        </li>
        <li class="scientist-info__item">
            <h3 id="interview">Интервью</h3>
            <div class="scientist-info__video">
                <div class="video"></div>
            </div>
        </li>
        <li class="scientist-info__item">
            <h3 id="researches">Научные работы</h3>
            <div>
                <ul class="researches">
                    <li class="researches__item" v-for="index in 5">Lorem ipsum dolor sit amet consectetur,
                        adipisicingelit. Magnamarchitecto modi ratione dolorum iste at.</li>
                </ul>
                <button class="load-btn">Загрузить еще</button>
            </div>
        </li>
        <li class="scientist-info__item">
            <h3 id="books">Книги</h3>
            <div>
                <ul class="books">
                    <li class="books__item" v-for="index in 5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magnam
                        architecto modi ratione dolorum iste at.</li>
                </ul>
            </div>
        </li>
        <li class="scientist-info__item">
            <h3 id="news">Новости</h3>
            <ScientistNews />
        </li>
    </ol>
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.scientist-info {
    list-style-position: inside;
    font-size: 1.5rem;

    &__item {
        div {
            font-size: 1rem;
            font-weight: 400;
            padding-bottom: 4rem;
            line-height: 1.5rem;
        }

        h3 {
            padding-bottom: 1.5rem;
            display: inline-block;
            font-weight: 700;
        }

        .books,
        .researches {
            list-style: disc;
            list-style-position: inside;
        }

        .biography {
            &__title {
                padding-bottom: 0.75rem;
                padding-top: 0.75rem;
                font-weight: 700;
            }
        }
    }

    &__video {
        min-width: 100%;
        padding-top: 56.25%;
        background-color: #c2c2c2;
        margin-bottom: 4rem;
    }
}
.load-btn {
    margin-top: 3.5rem;
    font-weight: 900;
    height: 1.5rem;
    background: none;
    border: none;
    text-transform: uppercase;
    border-bottom: 0.125px solid #000;
    letter-spacing: 0.125rem;
}

@media(max-width:650px){
    .scientist-info__item div {
        padding-bottom: 3rem;
    }
}
</style>
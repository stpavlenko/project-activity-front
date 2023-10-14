<script>
export default {
    name: 'ScientistPreview',
}
</script>

<template>
    <div class="scientist-identity">
        <h2 class="view__title scientist-identity__name">Фамилия Имя Отчество</h2>
        <div class="scientist-identity__post">Должность, ученая степень</div>
    </div>
    <ul class="scientist-profil">
        <li class="scientist-profil__photo">
            <div class="scientist-profil__img"></div>
        </li>
        <li class="scientist-profil__plan">
            <ol class="plan">
                <li class="plan__item"><a href="#biography">Биография</a></li>
                <li class="plan__item"><a href="#interview">Интервью</a></li>
                <li class="plan__item"><a href="#researches">Научные работы</a></li>
                <li class="plan__item"><a href="#books">Книги</a></li>
                <li class="plan__item"><a href="#news">Новости</a></li>
            </ol>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 700;
}
a {
    color: inherit;
    text-decoration: none;
}
.scientist-identity {
    &__name {
        padding-bottom: 2.5rem;
    }

    &__post {
        font-size: 1.5rem;
        padding-bottom: 2.5rem;
    }
}

.plan {
    letter-spacing: 0.165rem;
    color: #C2C2C2;
    list-style-position: inside;

    &__item {
        padding-bottom: 1.5rem;

        &:hover {
            color: #000;
        }
    }
}

.scientist-profil {
    display: flex;
    list-style: none;
    gap: 4.5rem;
    padding-bottom: 4rem;

    &__img {
        width: 25rem;
        height: 35rem;
        background-color: #C2C2C2;
    }

    &__item {
        line-height: 1.5rem;
    }
}

@media(max-width:650px){
    .scientist-identity__name {
        padding-bottom: 1rem;
    }

    .scientist-profil {
        flex-direction: column;
        gap: 2rem;

        &__img {
            max-width: 90vw;
            max-height: 126vw;
        }
    }
        .plan__item {
            padding-bottom: 1rem;
        }
    }

</style>
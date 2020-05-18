'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

            // функция по старому паттерну
            // function showMyDB() {
            //     if (personalMovieDB.privat == false) {
            //         console.log(personalMovieDB);
            //     } else {
            //         console.log('DB is privat');
            //     }
            // }
            //showMyDB();


//Функция по новому паттерну
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('DB is privat');
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {

        // const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

        if (genre != null && genre != '' && genre.length < 25) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ''); // expression
            //console.log('genre added');

            // personalMovieDB.genres[i - 1] = genre;

            // expression - удалить переменную и написать прямо в функцию. Она чуть быстрее, потому, что
            //не подтягивает каждый раз функцию c более высокого уровня. Оставил её.
        } else {
            console.log('genre error');
            i--;
        }
    }
}

writeYourGenres();

//console.log(personalMovieDB);
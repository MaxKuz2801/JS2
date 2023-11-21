// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [11,22,33,44,55,66,77,88,98,99]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title : 'Kobzar',
    pageCount : 120,
    genre : 'virshi'
}
console.log(book)

let book_1 = {
    title : 'World',
    pageCount : 90,
    genre : 'kazku'
}
console.log(book_1)

let book_2 = {
    title : 'River',
    pageCount : 70,
    genre : 'water'
}
console.log(book_2)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books = {
    title : 'Red', pageCount1 : 130, genree : 'baika', authors  : ['name', 'age'],
    title : 'Yellow', pageCount2 : 150, genrre : 'sonce', authors  : ['name', 'age'],
    title : 'Black', pageCount : 140, genres : 'valker', authors  : ['name', 'age']

}
console.log(books)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user_1 = {
    name : 'max',
    username : 'kuz',
    password : '123456789'
}
console.log(user_1.password)

let user_2 = {
    name : 'yana',
    username : 'zahakailo',
    password : '123456'
}
console.log(user_2.password)

let user_3 = {
    name : 'bodia',
    username : 'papizh',
    password : '12345678'
}
console.log(user_3.password)

let user_4 = {
    name: 'bodia',
    username : 'struk',
    password : '150399'
}
console.log(user_4.password)

let user_5 = {
    name: 'vika',
    username: 'sakovska',
    password: '123498'
}
console.log(user_5.password)

let user_6 = {
    name: 'anna',
    username: 'kuz',
    password: '161203'
}
console.log(user_6.password)

let user_7 = {
    name: 'ostap',
    username: 'kuz',
    password: '300573'
}
console.log(user_7.password)


let user_8 = {
    name: 'denys',
    username: 'komarnytskiy',
    password: '201196'
}
console.log(user_8.password)

let user_9 = {
    name: 'halyna',
    username: 'komarnytska',
    password: '300574'
}
console.log(user_9.password)

let user_10 = {
    name: 'vitaliy',
    username: 'komarnitskiy',
    password: '120472'
}
console.log(user_10.password)
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;

if (x != '0') {
    console.log('Вірно')
} else if (x === 0) {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 25;

if (0 <= time && time < 15){
    console.log('I')
} else if (15 < time && time < 30){
    console.log('II')
} else if (30 < time && time < 45){
    console.log('III')
} else if (45 < time && time < 59){
    console.log('IV')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 28;
if (1 <= day && day < 11){
    console.log('I')
} else if (11 <= day && day < 20){
    console.log('II')
} else if (20 <= day && day < 31){
    console.log('III')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let weekend = prompt('enter day')

switch (weekend) {
    case '1':
        console.log('Moday');
        break;

    case '2':
        console.log('Tuesday');
        break;

    case '3':
        console.log('Wednesday');
        break;

    case '4':
        console.log('Thursday');
        break;

    case '5':
        console.log('Friday');
        break;

    case '6':
        console.log('Saturday');
        break;

    case '7':
        console.log('Sunday');
        break;

    default:
        console.log();

}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x

if (x === null || x === 'underfiend' || x === 'Nan' || x === false || x === "" ){
    console.log("default")
}else {
    console.log(x)
}
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер')
} else if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер')
} else if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер')
} else if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Не супер')
} else if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Cупер')
} else if (coursesAndDurationArray[5].monthDuration < 5){
    console.log(' Не Cупер')
}
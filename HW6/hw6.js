// - Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'
const str = ['hello world', 'lorem ipsum', 'javascript is cool'];
str.map((item) => console.log(item.length));
// - Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
const rte = ['hello world', 'lorem ipsum', 'javascript is cool'];
rte.map((urty) => console.log(urty.toUpperCase()));
// - Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const yer = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
yer.map((hty) => console.log(hty.toLowerCase()));
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strr = ' dirty string   '
console.log(strr.replaceAll(' ',' ',''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let sstr = 'Ревуть воли як ясла повні';
let split = sstr.split(' ');
console.log(split);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let maped = [10,8,-7,55,987,-1011,0,1050,0];

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((month1, month2) => {
    return month2.monthDuration - month1.monthDuration;
});
console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtercours = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filtercours);
console.log(coursesAndDurationArray)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// coursesAndDurationArray.map(value, index) => {}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
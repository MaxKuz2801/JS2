// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let nu = (f,l) => f * l
console.log(nu(7, 5))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let rad = (p,r) => p * r * 2
console.log(rad(6,3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilin = (h, r) => 2 * Math.PI * r * (r * h)
console.log(cilin(8, 4))
// - створити функцію яка приймає масив та виводить кожен його елемент
let masiv = (a, b, ...arrrf) =>
console.log(masiv(5, 6, 34))
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let pr = (arrr) => {
    document.write(
    `
    <p>${arrr}</p>
    `
    )
}
console.log(pr('Karpaty'))
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const uli = (text2) => {
    document.write(
        `
        <ul>
        <li>${text2}</li>
        <li>${text2}</li>
        <li>${text2}</li>
</ul>
        `
    )
}
console.log(uli('Lviv'))
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const iku = (text3, chislo) =>{
    document.write(`<ul>`);
    for ( let i = 0; i < chislo; i++) {
        document.write(`<li>${text3}</li>`)
    }
    document.write(`</ul>`);
    }

iku('dnipro', 5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const hfd = (hjj) =>{
    document.write(`<ul>`)
    {
        for (const hjjElement of hjj)
            document.write(<li>${hjj}</li>);
    }
    document.write('</ul>')
}
console.log(hfd([124,254,352423,'ghf','fgd','rgege', true]))
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const user = [
    {id: 12, name: 'max', age:23},
    {id: 13, name: 'yana', age:21},
    {id: 14, name: 'ostap', age:50},
    {id: 15, name: 'anna', age:19},
    {id: 16, name: 'karol', age:73}
];
const ina = (arr) => {
    for (const user of arr) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
    }
}
        ina(user);
// - створити функцію яка повертає найменьше число з масиву
const morre = [3,6,9,13,56,76,87];
const mn = (arttt) =>{
    let vb = arttt[0]
    for (const mn of arttt) {
        if (vb > mn) ;
        {
            vb = mn;
        }
    }
    return vb;
}
console.log(mn(morre))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arrrrr) => {
    let ch = 0
    for (const arrelf of arrrrr) {
        ch += arrelf
    }
    return ch;
}
console.log(sum([1,2,10]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// let swap (arr, index1, index2) =>
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap= (arr,index1,index2) => {
    const num1 = arr[index1];
    const num2 = arr[index2];

    arr[index1] = num2
    arr[index2] = num1
    return arr
}
console.log(swap([11,22,33,44], 0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
 const exchange = (sumUAH, currencyValues, exchangeCurrency)=> {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}

const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));

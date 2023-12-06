//+ // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function pl (a,b){
    let ple =  a * b;
    return  ple;

}
let x = pl(3, 6)
console.log(x)
//
//+ // - створити функцію яка обчислює та повертає площу кола з радіусом r
function cycr(p, r){
    let cyc = p * r * 2;
    return cyc;
}
let y = cycr(4,8);
console.log(y)
// +// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cil(h, r){
    let cily = 2 * Math.PI * r * (r * h);
    return cily;
}
let z = cil(5,9)
console.log(z)
// +// - створити функцію яка приймає масив та виводить кожен його елемент
function masiv (a,b, ...afg){
    console.log(afg)
}
masiv(22,44,55,66,77);
//+ // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(Text){
    document.write(
        `
    <div>
        <p>${Text}</p>
    </div>
    `
    );
}
paragraf('Ukraine')

// +- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function creatUl3(text1) {
    document.write(
        `
        <ul>
        <li>${text1}</li>, 
        <li>${text1}</li>, 
        <li>${text1} </li>
        /<ul>
        `
    );

}
creatUl3('friend');

//- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function iku  (text3, chislo){
    document.write(`<ul>`);
    for ( let i = 0; i < chislo; i++) {
        document.write(`<li>${text3}</li>`)
    }
    document.write(`</ul>`);
}

iku('dnipro', 5)
//- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function srt (frg){
    document.write(`<ul>`)
    for (const frgElement of frg) {
        document.write(`<li>${frg}</li>`)
    }
    document.write(`</ul>`)
}
srt([5,342,'sdt','sfgsdf','gfss', true, false])
//+ - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function more(id, name, age){
    document.write(
    `
    <div>
    ${id},${name},${age}
</div>
    `
    );
}
more('28', 'max', 23);
more(24, 'ivan', 24 );
more(12, 'vasya', 33)
//- - створити функцію яка повертає найменьше число з масиву
const morre = [3,6,9,13,56,76,87];

function num (arr) {
    let min = arr[0]
    for (const num of arr) {
        if (min > num){
            min = num;
        }
    }
    return min;
}
console.log(num(morre))
//- // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let result = 0
    for (const arrElement of arr) {
        result += arrElement
    }
    return result
}
console.log(sum([1,2,10]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    const num1 = arr[index1];
    const num2 = arr[index2];

    arr[index1] = num2;
    arr[index2] = num1

    return arr
}
console.log(swap([11,22,33,44], 0, 1))
//- - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}

const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone  = phone;
    console.log(this)
}
let Usser = []
Usser.push(
new User(1,'max', 'kuz', 'max@gmail.com', '05343442'),
new User(2,'max', 'kuzttt', 'ma12x@gmail.com', '05346742'),
new User(8,'ostap', 'kkdd', 'ostap@gmail.com', '06743442'),
new User(6,'anna', 'ksdf', 'anna@gmail.com', '065343442'),
new User(5,'yana', 'zahak', 'yana@gmail.com', '05343652'),
new User(4,'bodia', 'papizh', 'bodia@gmail.com', '05343311'),
new User(7,'vika', 'sakov', 'vika@gmail.com', '05343442'),
new User(3,'denys', 'komar', 'denus@gmail.com', '05343442'),
new User(9,'pavlo', 'onatsko', 'pavlo@gmail.com', '05343442'),
new User(10,'yura', 'klofa', 'yura@gmail.com', '05343442')
)
console.log(Usser)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = Usser.filter((item) =>
item.id % 2 ===0);
console.log(filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = Usser.sort((u1, u2) =>{
    return u1.id - u2.id;
});
console.log(sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

    }
let client = []
client.push(
new Client(1,'max','kuz','max@gmail.com', '0424232', 4),
new Client(2,'max', 'kuzttt', 'ma12x@gmail.com', '05346742', 12),
new Client(3,'ostap', 'kkdd', 'ostap@gmail.com', '06743442', 33),
new Client(4,'anna', 'ksdf', 'anna@gmail.com', '065343442', 1),
new Client(5,'yana', 'zahak', 'yana@gmail.com', '05343652',23),
new Client(6,'bodia', 'papizh', 'bodia@gmail.com', '05343311',55),
new Client(7,'vika', 'sakov', 'vika@gmail.com', '05343442',12),
new Client(8,'denys', 'komar', 'denus@gmail.com', '05343442',19),
new Client(9,'pavlo', 'onatsko', 'pavlo@gmail.com', '05343442',20),
new Client(10,'yura', 'klofa', 'yura@gmail.com', '05343442',45)
)
console.log(client);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorrt = client.sort((u3,u4) => {
    return u3.order - u4.order;
});
console.log(sorrt)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Carr(model, vurobnik, year, maxspeed, obyem_dv){
   this.model = model;
   this.vurobnik = vurobnik;
   this.year = year;
   this.maxspeed = maxspeed;
   this.obyem_dv = obyem_dv;
   this.driver = "Відсутній"

   this.drive = () =>{
       console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
   }
}
    this.info = function () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.vurobnik}`);
        console.log(`Рік Випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxspeed}`);
        console.log(`Обєм двигуна: ${this.obyem_dv}`);
        console.log('Водій' ,this.driver)
        }

    this.increaseMaxSpeed = function(newSpeed){
    this.maxspeed += newSpeed;
    return console.log(`Швикість зросла до ${this.maxspeed}`)
};

    this.changeYear = function (newValue) {
        this.year === newValue;
        return console.log(`Змінює рік випуску на значення: ${this.newValue}`)
};
    this.addDriver = function (driver) {
        this.driver = driver;
}
const car = new Carr('B8', 'VW', 2010, 200,2);

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, vurobnik, year, maxspeed, obyem_dv) {
        this.model = model;
        this.vurobnik = vurobnik;
        this.year = year;
        this.maxspeed = maxspeed;
        this.obyem_dv = obyem_dv;
        this.driver = 'Відстуній'
    }
    drive(){
        console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    info(){
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.vurobnik}`);
        console.log(`Рік Випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxspeed}`);
        console.log(`Обєм двигуна: ${this.obyem_dv}`);
        console.log('Водій' ,this.driver)
    }
    increaseMaxSpeed (newSpeed){
        this.maxspeed += newSpeed
    }
    changeYear (newValue){
        this.year === newValue
    }
    addDriver (driver){
        this.driver = driver
    }
}
const cars = new Car('B8', 'VW', 2010, 200,2);


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelyshka{
    constructor(name, year, rozmir) {
        this.name = name;
        this.year = year;
        this.rozmir = rozmir;
    }
}
let popelyshka = [
    new Popelyshka('Yana', 22, 39),
    new Popelyshka('Vika', 23, 39),
    new Popelyshka('Anna', 20, 38),
    new Popelyshka('Natalia', 46, 39),
    new Popelyshka('Halyna', 49, 40),
    new Popelyshka('Yana', 22, 39),
    new Popelyshka('Yana', 22, 39),
    new Popelyshka('Yana', 22, 39),
    new Popelyshka('Yana', 22, 39),
    new Popelyshka('Yana', 22, 39)
    ]
console.log(popelyshka);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [   new User(1, 'Petro', 'Ivas', 'petrusik@gmail.com', 2352352355),
                new User(9, 'Rostislav', 'Lopata', 'lopata@gmail.com', 9994453434),
                new User(4, 'Orest', 'Povor', 'Povor@gmail.com', 7032294556),
                new User(5, 'Paul', 'Some', 'Some@gmail.com', 3400125545),
                new User(3, 'Vasyl', 'Cus', 'cus@gmail.com', 5968321034),
                new User(6, 'Oscar', 'Gig', 'gig@gmail.com', 9569432004),
                new User(10, 'Io', 'Lom', 'lomik@gmail.com', 5670012284),
                new User(2, 'Ivan', 'Ded', 'ded@gmail.com', 4858323845),
                new User(8, 'Oleg', 'Gus', 'gus@gmail.com', 9832012388),
                new User(7, 'Sasha', 'Korech', 'korch@gmail.com', 1034855677)
            ];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

users.filter(user =>{
    if(user.id % 2 === 0){
        console.log(user);
    }
})
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

 let sorted = users.sort((a,b) =>a.id - b.id);
console.log(sorted);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [new Client(1, 'Petro', 'Ivas', 'petrusik@gmail.com', 2352352355, ['bread', 'ice cream', 'apple', 'juice', 'pineapple', 'bear', 'vodka']),
    new Client(9, 'Rostislav', 'Lopata', 'lopata@gmail.com', 9994453434, ['bread', 'ice cream', 'apple', 'juice', 'pineapple', 'bear', 'vodka', 'chips', 'tea', 'pizza']),
    new Client(4, 'Orest', 'Povor', 'Povor@gmail.com', 7032294556, ['bread', 'ice cream']),
    new Client(5, 'Paul', 'Some', 'Some@gmail.com', 3400125545, ['bread', 'ice cream', 'apple', 'juice', 'pineapple', 'bear']),
    new Client(3, 'Vasyl', 'Cus', 'cus@gmail.com', 5968321034, ['bread', 'ice cream', 'apple', 'juice', 'pineapple', 'bear', 'vodka', 'chips', 'tea']),
    new Client(6, 'Oscar', 'Gig', 'gig@gmail.com', 9569432004, ['bread', 'ice cream', 'apple', 'juice', 'pineapple']),
    new Client(10, 'Io', 'Lom', 'lomik@gmail.com', 5670012284, ['bread']),
    new Client(2, 'Ivan', 'Ded', 'ded@gmail.com', 4858323845, ['bread', 'ice cream', 'apple']),
    new Client(8, 'Oleg', 'Gus', 'gus@gmail.com', 9832012388, ['bread', 'ice cream', 'apple', 'juice']),
    new Client(7, 'Sasha', 'Korech', 'korch@gmail.com', 1034855677, ['bread', 'ice cream', 'apple', 'juice', 'pineapple', 'bear', 'vodka', 'chips'])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let ordered = clients.sort((a,b) =>a.order.length - b.order.length )
console.log(ordered);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 function Car(model,producer,year,maxSpeed,engineCapacity) {
     this.model = model;
     this.producer = producer;
     this.year = year;
     this.maxSpeed = maxSpeed;
     this.engineCapacity = engineCapacity;
     this.drive = function () {console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)};
     this.addDriver = function (driver) {this.driver = driver};
     this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed = newSpeed};
     this.changeYear = function (newYear) {this.year = newYear};
     this.info = function (){
         for (const argument in this) {
             if(typeof this[argument]!=='function') {
                 console.log(`${argument} - ${JSON.stringify(this[argument])}`)
             }
         }
     }
 }
let audi =  new Car('quatro','Audi',2005,270,2)
audi.drive()
audi.info()
audi.addDriver()
audi.addDriver({name:'Orest',age:23})
audi.increaseMaxSpeed(260)
audi.changeYear(2007)
console.log(audi);
 audi.info()
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
     constructor(model,year,maxSpeed,engineCapacity,producer,drivers) {
         this.year = year;
         this.model = model;
         this.engineCapacity = engineCapacity;
         this.producer = producer;
         this.maxSpeed = maxSpeed;
         this.changeYear = function (newYear) {this.year = newYear};
         this.drive = function () {`їдемо зі швидкістю ${maxSpeed} на годину`};
         this.increaseMaxSpeed = function (newSpeed) { this.maxSpeed = newSpeed};
         this.addDriver = function (...rest) {this.driver = rest};
         this.info = function () {
             for (const argument in this) {
                 if(typeof this[argument] !== 'function'){
                     console.log(`${argument} - ${JSON.stringify(this[argument])}`);
                 }
             }
         }
     }
 }
 let driver = new Cars('SuperB',2005,270,1.8,'Shkoda',);
 driver.addDriver({name:'Ivan',age:23},{name:'Paul',age:23},{name:'Oleg',age:23});
 driver.drive();
driver.increaseMaxSpeed(340);
driver.changeYear(2020)
console.log(driver);
driver.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Princess {
    constructor(name,age,gender,size) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
    }
}
class Prince {
    constructor(name,age,foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
 let Princesses = [
     new Princess('Gabriella',22,'female',41),
     new Princess('Gabriella',18,'female',35),
     new Princess('Gabriella',23,'male',40),
     new Princess('Gabriella',34,'male',37),
     new Princess('Gabriella',45,'male',39),
     new Princess('Gabriella',16,'female',38),
     new Princess('Gabriella',26,'male',42),
     new Princess('Gabriella',28,'female',41),
     new Princess('Gabriella',33,'male',45),
     new Princess('Gabriella',29,'female',40),
     new Princess('Gabriella',18,'male',38)
 ]
let prince = new Prince('Petro Schur',31,35)

for (const princess of Princesses) {
    if(princess.age === 18){
        if(princess.gender === 'female'){
           if (princess.size === prince.foundShoe){
               console.log(princess);
           }
        }
    }
}
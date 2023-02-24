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
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

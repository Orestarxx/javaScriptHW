
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [12,`hey`,13,true,false,`zero`,23,34,125,223]
console.log(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8],array[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookArray = [
    {title:'aaaaaaa',pageCount:342,genre:`horror`},
    {title:'bbbbbbb',pageCount:555,genre:`comedy`},
    {title:'cccccccc',pageCount:666,genre:`thriller`}
]
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books = [
    {   title: 'aaa',
        pageCount: 342,
        genre: `horror`,
        author: [
            {   name:`Petro`,
                age:34}
        ]},
    {   title: 'bbb',
        pageCount: 555,
        genre: `horror`,
        author: [
            {
                name:`ivan`,
                age:43}
        ]},
    {   title: 'ccc',
        pageCount: 666,
        genre: `horror`,
        author: [
            {
                name:`Anna`,
                age:61}
        ]}
]
console.log(books[0].author[0].name);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
 let users = [
     {name:'Petro',username:'geggf',password:'13222215112'},
     {name:'Anna',username:'sgsdgdggg',password:'13222215100'},
     {name:'Ivan',username:'afsgabfb',password:'13222215199'},
     {name:'Orest',username:'sbsbababd',password:'13222215188'},
     {name:'Oleg',username:'ababafbfb',password:'1322221513'},
     {name:'Evgeny',username:'SDGfrewf',password:'1322221511'},
     {name:'Katia',username:'llhlhjhg',password:'132222157'},
     {name:'Sony',username:'wergghdfhf',password:'132222156'},
     {name:'Oscar',username:'gfdftjjd',password:'13222215122'},
     {name:'David',username:'wetrjtds',password:'132222151222'},
 ]
for (user of users){
    console.log(user.password);
}

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 12;
// let a = 1;
// let a = 0;
let a = -3;
if(a !== 0){
    console.log(`Correct`);
}else {
    console.log(`Incorrect`);
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 60;
if(time => 0 && time <= 15 ){
    console.log(`first`);
}else if(time > 15 && time <= 30){
    console.log(`second`);
}else if(time > 30 && time <= 45){
    console.log(`third`);
}else if(time >45 && time <= 59){
    console.log(`forth`);
}else{
    console.log(`none of them`);
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1 ;
if(day => 1 && day <= 10){
    console.log(`first`);
}else if(day > 10 && day <= 20){
    console.log(`second`);
}else if(day > 20 && day <= 31){
    console.log(`third`);
}else{
    console.log(`none of them`);
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek =`Sunday`;
switch (dayOfWeek){
    case 'Monday':
        console.log(`go to gym`);
        break;
    case 'Tuesday':
        console.log(`go to walk`);
        break;
    case 'Wednesday':
        console.log(`play Xbox`);
        break;
    case 'Thursday':
        console.log(`to code`);
        break;
    case 'Friday':
        console.log(`play football`);
        break;
    case 'Saturday':
        console.log(`learn code`);
        break;
    case 'Sunday':
        console.log(`be ready to next week`);
        break;
    default:
        console.log(`write the current day`);
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
 let numberOne = 1;
 let numberTwo = 1;
 if(numberOne > numberTwo){
     console.log(numberOne);
 }else if(numberTwo > numberOne){
     console.log(numberTwo);
 }else if (numberTwo === numberOne){
     console.log(`equal`);
 }else {
     console.log(`only numbers`);
 }
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'Java Complex', monthDuration: 6},
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 for (course of coursesAndDurationArray){
     if(course.monthDuration > 5){
         console.log(`супер`);
     }else {
         console.log(`тоже не погано`);
     }
 }
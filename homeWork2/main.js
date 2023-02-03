
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
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

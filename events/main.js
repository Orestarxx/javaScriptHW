//
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
let form = document.forms[0];
let fatherDiv = document.createElement('div');
fatherDiv.classList.add('father');
document.body.append(fatherDiv);


form.addEventListener('submit', function (eo) {
    eo.preventDefault()
    let userName = document.forms[0].userName.value;
    let surName = document.forms[0].surname.value;
    let age = document.forms[0].age.value;

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('main')
    fatherDiv.append(mainDiv)

    let nameDiv = document.createElement('div');
    nameDiv.innerText = ` NAME: ${userName}`;

    let surNameDiv = document.createElement('div');
    surNameDiv.innerText = `SURNAME: ${surName}`;

    let ageDiv = document.createElement('div');
    ageDiv.innerText = `AGE: ${age}`;
    mainDiv.append(nameDiv, surNameDiv, ageDiv);


    document.forms[0].reset()
})


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//
const today = new Date();

const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let dateTime = [date, time];

localStorage.setItem('time', JSON.stringify(dateTime));

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let count = 0;

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

count++;

localStorage.setItem("count", count.toString());

let countEl = document.getElementById("count");
countEl.textContent = count.toString();
    console.log(countEl);
// ==========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const objectsArray = [{name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Ores', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Ore', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Ort', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'st', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23},
    {name: 'Orest', age: 23}


];
const itemsPerPage = 10;
let currentPage = 1;


const totalPages = Math.ceil(objectsArray.length / itemsPerPage);


function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;
    const itemsOnPage = objectsArray.slice(startIndex, endIndex);


    const itemsContainer = document.getElementById("items-container");
    itemsContainer.innerHTML = "";
    itemsOnPage.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = ` Name: ${item.name} Age: ${item.age} `
        itemsContainer.appendChild(itemElement);
    });
}

function updatePagination() {
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";

    const previousButton = document.createElement("button");
    previousButton.textContent = "Previous";
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayItems();
            updatePagination();
        }
    });
    paginationContainer.appendChild(previousButton);


    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = `${i}`;
        pageButton.disabled = i === currentPage;
        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayItems();
            updatePagination();
        });
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayItems();
            updatePagination();
        }
    });
    paginationContainer.appendChild(nextButton);
}

displayItems();

const paginationContainer = document.createElement("div");
paginationContainer.id = "pagination-container";
document.body.appendChild(paginationContainer);
updatePagination();


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//
function createTable() {
    let in1 = document.getElementById(`in1`);
    let in2 = document.getElementById(`in2`);
    let in3 = document.getElementById(`in3`);
    let b1 = document.getElementById(`b1`);
    let find = document.getElementById(`tb`);
    if (find !== null) {
        find.remove();
    }
    let table = document.createElement(`table`);
    table.setAttribute(`id`, `tb`)

    document.body.appendChild(table);
    for (let i = 0; i < in1.value; i++) {
        let tr = document.createElement(`tr`);
        table.appendChild(tr);
        for (let j = 0; j < in2.value; j++) {
            let td = document.createElement(`td`);
            td.innerText = in3.value;
            tr.appendChild(td);
        }
    }
    fatherDiv.append(table)
}
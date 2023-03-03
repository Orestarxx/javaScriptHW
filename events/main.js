//
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
// let form = document.forms[0];
// let fatherDiv = document.createElement('div');
// fatherDiv.classList.add('father');
// document.body.append(fatherDiv);
// form.addEventListener('submit', function (eo) {
//     eo.preventDefault()
//
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('main')
//     fatherDiv.append(mainDiv)
//
//
//     let nameDiv = document.createElement('div');
//     nameDiv.innerText = ` NAME: ${document.forms[0].userName.value}`;
//
//     let surNameDiv = document.createElement('div');
//     surNameDiv.innerText = `SURNAME: ${document.forms[0].surname.value}`;
//
//     let ageDiv = document.createElement('div');
//     ageDiv.innerText = `AGE: ${document.forms[0].age.value}`;
//
//     mainDiv.append(nameDiv, surNameDiv, ageDiv);
//     document.forms[0].reset()
// })

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//
// const today = new Date();
//
// const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//
// let dateTime = [date, time];
//
// localStorage.setItem('time', JSON.stringify(dateTime));

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
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
    {name: 'Orest', age: 23}
];
const itemsPerPage = 10; // Number of items to display per page
let currentPage = 1; // Current page of the pagination


// Calculate the total number of pages needed for the pagination
const totalPages = Math.ceil(objectsArray.length / itemsPerPage);

// Function to display items for the current page
function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsOnPage = objectsArray.slice(startIndex, endIndex);

    // Code to display the items on the current page
    // For example:
    const itemsContainer = document.getElementById("items-container");
    itemsContainer.innerHTML = "";
    itemsOnPage.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = item.name; // Or any other property of your objects
        itemsContainer.appendChild(itemElement);
    });
}

// Function to update the pagination buttons
function updatePagination() {
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";

    // Create the Previous button
    const previousButton = document.createElement("button");
    previousButton.textContent = "Previous";
    previousButton.disabled = currentPage === 1; // Disable the button if it's the first page
    previousButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayItems();
            updatePagination();
        }
    });
    paginationContainer.appendChild(previousButton);

    // Create a button for each page
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = `${i}`;
        pageButton.disabled = i === currentPage; // Disable the button if it's the current page
        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayItems();
            updatePagination();
        });
        paginationContainer.appendChild(pageButton);
    }

    // Create the Next button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = currentPage === totalPages; // Disable the button if it's the last page
    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayItems();
            updatePagination();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Initial display of the first page
displayItems();

// Create the pagination UI
const paginationContainer = document.createElement("div");
paginationContainer.id = "pagination-container";
document.body.appendChild(paginationContainer);
updatePagination();

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

//
// function createTable() {
//     let in1 = document.getElementById(`in1`);
//     let in2 = document.getElementById(`in2`);
//     let in3 = document.getElementById(`in3`);
//     let b1 = document.getElementById(`b1`);
//     let find = document.getElementById(`tb`);
//     if (find !== null) {
//         find.remove();
//     }
//     let table = document.createElement(`table`);
//     table.setAttribute(`id`, `tb`)
//
//     document.body.appendChild(table);
//     for (let i = 0; i < in1.value; i++) {
//         let tr = document.createElement(`tr`);
//         table.appendChild(tr);
//         for (let j = 0; j < in2.value; j++) {
//             let td = document.createElement(`td`);
//             td.innerText = in3.value;
//             tr.appendChild(td);
//         }
//     }
//     fatherDiv.append(table)
// }
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
let jsonParse = localStorage.getItem('time');
let timeArray = JSON.parse(jsonParse);
console.log(timeArray);

let division = document.createElement('div');
division.innerText = `Date: ${timeArray[0]}  Time: ${timeArray[1]}`
document.body.append(division)

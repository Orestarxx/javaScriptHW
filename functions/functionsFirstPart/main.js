// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function f(a,b) {
    return a + b
}
console.log(f(300, 500));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleCounter(pi,r) {
    return  pi*r*r;
}
console.log(circleCounter(3.14, 40));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
 let acceptArr = [1,2,3,'rey','hi',true,false];
function accepter(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
accepter(acceptArr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(text) {
    let paragraph = `<div><p>${text}</p></div>`
    document.write(paragraph);
}
writer('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, possimus!')
writer('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at dignissimos eos, error eum inventore, ipsa laudantium odio possimus qui tempora, vel. Adipisci aspernatur dolorum illo perspiciatis quos repudiandae sunt.')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function creatorUl(text) {
    let ul = `<div><ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
</div>`
    document.write(ul)
}
creatorUl('hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
 const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
 function numberFinder(arr,symbol) {
       if (symbol === '+'){
         let result =Math.max(...arr);
         return result
     }else if (symbol === '-'){
         let result = Math.min(...arr);
           return result
     }
 }
 console.log(numberFinder(array,'+'));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arr = [10,31,22];
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i+= 1) {
        const element = array[i];
        sum += array[i];
    }
    return sum
}

console.log(sum(arr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swapElements = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

let myArray = [11, 22, 33, 44, 80];
swapElements(myArray, 0, 2);
console.log(myArray);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)





// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    if(exchangeCurrency === 'USD' && currencyValues[1].currency === 'USD'){
       let exchangeUSD = [{currency:'USD',value:currencyValues[1].value}];
       return sumUAH / exchangeUSD[0].value
    }
    if(exchangeCurrency === 'EUR'){
       let exchangeEUR = [{currency:'EUR',value:currencyValues[0].value}];
        return sumUAH / exchangeEUR[0].value
    }
}

console.log(exchange(100000, [{currency: 'EUR', value: 42},{currency: 'USD',value: 40}], 'USD'));
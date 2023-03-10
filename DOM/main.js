// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let division = document.createElement('div');
// division.classList.add('wrap');
// division.classList.add('alpha');
// division.classList.add('beta');
// division.classList.add('collapse');
// division.style.background = 'violet';
// division.style.width = '200px';
// division.style.height = '200px';
// document.body.appendChild(division);
// document.body.appendChild(division.cloneNode(true));


// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


//    let arr =  ['Main','Products','About us','Contacts'];
// let ulTag = document.createElement('ul');
// document.body.appendChild(ulTag);
// for (const item of arr) {
//     let liTag = document.createElement('li');
//     liTag.innerText = `${item}`;
//     ulTag.appendChild(liTag);
// }


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// let courses = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of courses) {
//     let courseDiv = document.createElement('div');
//     courseDiv.innerText = ` TITLE: ${course.title} - MONTH DURATION: ${course.monthDuration}`;
//     document.body.appendChild(courseDiv);
// }


// =========================
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let divCourse = document.createElement('div');
//     divCourse.classList.add('item');
//     document.body.appendChild(divCourse);
//
//     let h1Course = document.createElement('h1');
//     h1Course.classList.add('heading');
//     h1Course.innerText = `${item.title}`;
//     divCourse.appendChild(h1Course);
//
//     let pCourse = document.createElement('p');
//     pCourse.classList.add('description');
//     pCourse.innerHTML = ` <b>Month duration:</b> ${item.monthDuration}`;
//     divCourse.appendChild(pCourse)
// }


// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];// {name,surname,age,info,photo}

// let mainDiv = document.createElement('div');
// mainDiv.classList.add('father');
// document.body.appendChild(mainDiv);
//
// for (const simpson of simpsons) {
//     let simpsonDiv = document.createElement('div');
//     simpsonDiv.classList.add('simpsonDiv');
//     mainDiv.appendChild(simpsonDiv);
//
//     let imgSimpson = document.createElement('img');
//     imgSimpson.src = simpson.photo;
//     simpsonDiv.appendChild(imgSimpson);
//
//     let h3Simpson = document.createElement('h3');
//     h3Simpson.innerText = `${simpson.name} ${simpson.surname}`;
//     simpsonDiv.appendChild(h3Simpson);
//
//     let ageDiv = document.createElement('div');
//     ageDiv.innerHTML = `<b>age:</b> ${simpson.age}`;
//     simpsonDiv.appendChild(ageDiv);
//
//     let pSimpson = document.createElement('p');
//     pSimpson.innerText = simpson.info;
//     simpsonDiv.appendChild(pSimpson);
// }


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом


let arrayCourses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];  //{title,monthDuration,hourDuration,modules:[string,string]}

// let coursesHolder = document.createElement('div');
// coursesHolder.classList.add('main');
// document.body.appendChild(coursesHolder);
//
// for (const course of arrayCourses) {
//
//     let courseDiv = document.createElement('div');
//     courseDiv.classList.add('infoDiv');
//     coursesHolder.appendChild(courseDiv);
//
//     let titleDiv = document.createElement('div');
//     titleDiv.classList.add('titleDiv');
//     courseDiv.appendChild(titleDiv);
//
//     let title = document.createElement('h2');
//     title.innerText = course.title;
//     titleDiv.appendChild(title);
//
//     let monthHourHolder = document.createElement('div');
//     monthHourHolder.classList.add('monthHour');
//     courseDiv.appendChild(monthHourHolder);
//
//     let monthDiv = document.createElement('div');
//     monthDiv.classList.add('month');
//     monthDiv.innerHTML = `<b>month Duration:</b> ${course.monthDuration}`
//     monthHourHolder.appendChild(monthDiv);
//
//     let hourDiv = document.createElement('div');
//     hourDiv.classList.add('hour');
//     hourDiv.innerHTML = `<b>hour Duration:</b> ${course.hourDuration}`
//     monthHourHolder.appendChild(hourDiv);
//
//     let ulDivHolder = document.createElement('div');
//     ulDivHolder.classList.add('ulHolder');
//     courseDiv.appendChild(ulDivHolder);
//
//     let ulTag = document.createElement('ul');
//     ulDivHolder.appendChild(ulTag);
//     for (const module of course.modules) {
//         let liModule = document.createElement('li');
//         liModule.innerText = module;
//         ulTag.appendChild(liModule)
//     }
//
//
// }

// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// const button = document.getElementById('button');
// const element = document.getElementById('void');
//
// button.addEventListener('click', function() {
//     element.classList.toggle('color');
// });


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// const form = document.querySelector('form');
// const submitButton = document.getElementById('submitButton');
// submitButton.addEventListener('click', function(event) {
//     const nameInput = document.getElementById('name');
//     if(nameInput.value !== 18 && nameInput.value < 18){
//         console.log('підрости')
//     }else{
//     console.log(`велкам`);
//     }
//     form.reset();
//     event.preventDefault();
// });


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


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


}
'use strict';

/* lesson 2 - Plagins.

Beautify - делает код красивым,выделяем участок кода, пкм и Format Document(shift+alt+F);
JS(ES6) code snippets - сокращение кода:
    con - конструктор;
    cdi - console.dir;
    clg - console.log;
jshint - отлавливает ошибки. */


/* lesson 5 - Use strict.

var(глобальная) and let(блочная); 
Проблема var,в том что она существует в коде,еще до её объявления,т.е. ==undefined;
hoisting - всплытие переменной - использование переменной до её объявления(var);
use strict - говорит о том,что работа ведется в современном режиме и некоторые неточности,которые были в старых
стандартах работать не будут. */


/* lesson 6 - Data Type.

1.Number;
2.String;
3.Boolean;
4.null;
5.undefined;
6.NaN; - действие,неподлежащие математической логике
7.BigInt;
8.Infinity and -Infinity;
9.Object([], function, {}, Date, regular expressions, errors) and Symbol; 
Массив - это частный случай объекта,просто с фиксированной нумирацией.*/


/* lesson 7 - Simple communication with user.

alert();
confirm();
prompt();
document.write(); - все изменяет на странице,на надпись - аргумент команды */


/* lesson 8 - Interpolation.

Интерполяция - внутрь строки,можно помещать выражение - `${выражение}`; */


/* lesson 9 - Operators in JS.

Смотреть таблицу приоритета операторов!!!
Инкримент(++) и Декримент(--): Префиксная и Постфиксная форма.
&& - || - и - или;
! - отрицание; */


/* lesson 10 - Git and GitHub.

Git - система контроля версий,создания репозиториев;
GitHub - сервис, онлайн хранилище репозиторие;

Инструкция:     
1) открыть папку проекта в терминале;
2) git init (установка,будет следить за проектом);
3) git config --global user.name "Nikita"
   git config --global user.email example@mail.ru

Cостояния файлов в git:
1)только создан;
2)гит следит за ним;
    git add -A; -добавить все файлы;
    git add *.css;
3)создал коммит(контрольная точка);
    git commit -a -m""; m - описание коммита,в ковычках без пробела

На сайте GitHub создаем новый репозиторий и push его.
В следующий раз,нужно просто ввести git push; */


/* lesson 11 - GitHub, gitignore and Git Kraken.

Как получить репозиторий:
1)скачать архив с GitHub;
2)получить клон,через командную строку; (более правильный)
    из папки: git clone путьизGitHuba названиепапки;
    клонированный репозиторий,сразу связан с удаленным;
git pull; - обновляет
gitignore - файл,ложится в проект. не будет пушить файлы,которые там прописаны.
Git Kraken - сервис,для удобного просмотра репозиториев; */


// lesson 12 - Practice part 1.


/* lesson 13 - Conditions.

1)if;
2)тернарный оператор(3 аргумента): () ? условие_правды : условие_лжы;
3)switch (===) {
    case x:
        console.log(alert());
        break;
    case y:
        ...;
    default:
        ...;
} */


/* lesson 14 - Cycle.

1)for;
2)while;
3)do while;
4)break;
5)continue;
6)label(метка);
do {

}
while (); */


// lesson 15 - Practice part 2.


/* lesson 16 - Function.

1)function declaration
2)function expression
3)() => {}; - не имеет своего контекста(this);

Замыкания - функция со всеми её переменными,которые ей доступны. Функция, вначале ище переменные внутри себя,
а потом на уровень выше. 
Когда вы объявляете новую функцию и присваиваете её переменной, то в этой переменной вы храните не только
определение функции, но и её замыкание. Замыкание содержит все переменные, которые находятся в области видимости
во время создания функции. Это аналогично рюкзаку.*/


/* lesson 17 - Methods and property String and Number.

Методы - вспомогательные Функции. Свойства - вспомогательные значения.

String:
.lengh; .toUpperCase(); .toLowerCase();
.indexOf(); - поиск строки и его индекс,аргумент строка;
.slice(); - возвращаем часть строки,аргументы индексы;
.substring(); - примерно тоже самое,что и .slice();
.substr(); - возвращаем часть строки,аргументы откуда и сколько символов;

Number:
Math; - встроенная математическая библиотека;
Math.round(num); - округляем до ближайщего целого;
parseInt(); parseFloat(); - переводит в другую систему исчисления,но со строкой работает по другому,возвращает
числа и строки,запинается на букве. */


// lesson 18 - Practice part 3.


/* lesson 19 - Callback function.

Callback - функция,которая должна быть выполнена,после того как другая функция завершила свое время выполнения. */


/* lesson 20 - Object and Destructurization objects.

delete obj.key;
for (key in obj) {} - перебор ключей объекта.
Object.keys(); - передает объект и на основании его ключей делает массив,можно применить потом length;
Деструкторизация объекта - вытаскивание свойств объекта в переменные.
Н-р:
const x = {
    a: 1,
    b: 2,
    c: {
        f: 3,
        g: 4
    }
};

const {f, g} = x.c;
console.log(f);
console.log(g); */


/* lesson 21 - Array.

delete array[i];
array.pop(); - удаляет;
array.push(); - добавляет;
array.shift(); - удаляет;
array.unshift(); - добавляет;
for (let value of array) {} - перебор массива, можно использовать обычный for;
array.forEach(); перебирает массив. аргумент callback функция,у функции может быть 3 аргумента(item, i, array);
array.map(); array.filter(); array.reduce(); - тоже перебирают массив,при этом как-то модифицируя его.
str.spilt(); - разбивает строку на массив, аргумент разделитель
array.join(); - разбивает массив на строку, аргумент разделитель
array.sort(); - сортировка ,но как строк; может принимать callback функцию
function compareNum(a, b) {
    return a - b;
} передаем её как аргумент array.sort(compareNum) и цифры,будет сортироваться нормально
Псевдомассив - тоже самое,что и массив,но без каких-либо методов
for in - идет по ключам;
for of - идет по свойствам; */


/* lesson 22 - Передача по ссылке или значению, Spread.

Поверхностное и глубокое копирование;
Копирование через for in;
Object.assign(); аргументы (куда помещаем,что помещаем);
array.slice(); делает копию массива;
spread...; - разворачивает структуру; */


/* lesson 23 - Основы ООП.

JS - прототипно-ориентированный язык(частный случай ООП);
[1, 2, 3] ==>(__proto__) Array.prototype ==>(__proto__) Object.prototype ==>(__proto__) null
1 ==>(__proto__) Number.prototype ==>(__proto__) Object.prototype ==>(__proto__) null
'1' ==>(__proto__) String.prototype ==>(__proto__) Object.prototype ==>(__proto__) null
and so on...
Object.setPrototypeOf();  создает прототип. аргументы(кто унаследован, от кого);
Object.create(); - создает новый объект, от прототипа. аргумент(прототип);

Н-р:
const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

// Устаревший способ:
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);

Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);  */


// lesson 24 - Practice part 4.


// lessons 25 Console of developer.


/* lesson 26 - Динамическая типизация в JS.

to String:
1)String();
2)конкатинация '' + ...;

to Number:
1)Number();
2)+;
3)parseInt & parseFloat;

to Boolean:
1)Boolean();
2)false - null, undefined, 0, '', NaN;
3)!! - console.log(typeof(!!'4')); */


/* lesson 27 - Tasks with interview.

•)Какое будет выведено значение: let x = 5; alert( x++ ); - 5
•)Чему равно такое выражение: [ ] + false - null + true - NaN
•)Что выведет этот код: let y = 1; let x = y = 2; alert(x); - 2
•)Чему равна сумма [ ] + 1 + 2? - '12'
•)Что выведет этот код: alert( "1"[0] ) - '1'
•)Чему равно 2 && 1 && null && 0 && undefined  - null
•)Есть ли разница между выражениями? !!( a && b ) и (a && b) - да,1ое булиновое значение.
•)Что выведет этот код: alert( null || 2 && 3 || 4 );  - 3
•)a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? - нет
•)Что выведет этот код: alert( +"Infinity" ); - Infinity,тип число
•)Верно ли сравнение: "Ёжик" > "яблоко"? - нет
•)Чему равно 0 || "" || 2 || undefined || true || falsе - 2 
*/


/* lesson 28 - Get elements with page.

document.getElementById('');
document.getElementsByClassName('');
document.getElementsByTagName('');
document.querySelector('');
document.querySelectorAll(''); 
window/document.addEventListener('DOMContentLoaded', ''); - все DOM узлы прогрузились, дерево html;*/

/* lesson 29 - Действия с элементами на странице.

element.style.backgroundColor = 'red';
element.style.cssText = 'background-color: red; width: 500px';
document.createElement('');
document.createTextNode(''); - текстовый узел;
element.classList.add('');
element.classList.remove('');
element.append(); - добавляет во внутрь в самый конец;
element.prepend(); - добавляет во внутрь в самое начало;
element.after(); - добавляет после;
element.before(); - добавляет до;
element.remove(); 
element.replaceWith(); - заменяем element аргументом;

element.innerHTML = ''; - можно вставлять html структуру;
element.textContent = '';

element.insertAdjacentHTML('', ''); 2аргумента:
1)куда ставить(beforebegin, afterbegin, beforeend, afterend);
2)что вставляем(какой-то тег например); */


// lesson 30 - Practice.


/* lesson 31 - Events.
Способы повешать событие:
1)html аттрибут;
2)в js code; - element.onclick = function() {};
    проблема,нельзя переназначить событие и норм удалить
3)в js code - element.addEventListener(); - есть 3аргумент,например once;
element.removeEventListener(); - событие и функция должны быть такими же как у удаляемого события;
Всплытие событий - когда обработчик срабатывает сначала на самом вложенном элементе и идет вверх;
event.preventDefault(); - отменяет событие по умолчанию(действие браузера) у объекта,помещается в самое начало;

Н-р:
element.addEventListener('click', () => {}, {once: true}); */


/* lesson 32 - Навигация по DOM, обращение в элементам.

console.log(document.body);
console.log(document.documentElement); - это весь <html></html>;
console.log(document.body.childNodes); - псевдомассив nodes, включая текстовые ноды;
Не каждый узел будет элементом!
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);

console.log(document.querySelector('').parentNode/parentNode.parentNode/parentElementNode);
Дата аттрибут.
document.querySelector('[data-attribut]'.nextSibling/previousSibling/nextElementSibling/previousElementSibling); */


/* lesson 33 - Events in mobile.

1)touchstart; - при касании элемента;
2)touchmove; - при касании и смещения пальца;
3)touchend; - убрали палец;
4)touchenter; - палец вошел на пределы элемента;
5)touchleave; - сколзил по элементу и ушел с него;
6)touchcancel; - выйти за границу обработки; */


/* lesson 35 - Async, Defer, динамические скрипты.

Аттрибуты:
1)Async - загрузка в фоновом режиме и запускается,как только был загружен,также не соблюдается очередь скриптов;
2)Defer - загрузка скрипта в фоновом режиме,начает работать после полной загрузки DOM, также сохраняется порядок
загрузки скриптов;

Можно поместить скрипт,прямо через JS.
const script = document.createElement('script');
script.src = 'js/scritp.js'
document.body.append(script);
script.async = false; */


/* lesson 37 - classList и делегирование событий.

element.classList.length; - кол-во классов;
element.classList.item() - возвращает класс,под индексом. Аргумент - индекс.
element.classList.add('');
element.classList.remove('');
element.classList.toggle('') - если класс есть,то удаляет его,если нет то добавляет;
element.classList.contains('') - проверяет на наличие класса,возвращает true or false;

Делегирование событий - событие назначается не на сам эдемент,а на его родителя.
element.target.matches('button.red'); - вернёт true или false, в зависимости от того, соответствует ли элемент
указанному css-селектору. */


/* lesson 38 - Practice Create Tabs in a new project.

Задачи:
1)Скрыть ненужные табы.
2)Показать нужный таб.
3)Назначить обработчик события,который будет манипулировать табами. */


/* lesson 39 - Скрипты и время их выполнения, setTimeout and setInterval.

setTimeout(); Аргументы: 1ый функция,2ой время в милисекундах, 3ый аргумент, может быть аргумень функции,например
текст. setTimeout задается в переменную,чтобы легче с ним было работать,например потом его очистить.
clearInterval(time); - очищает таймер;
setInterval(); - тоже самое;

const time = setTimeout(function () {}, 2000);

Рекурсия или setInterval, проблема setInterval  в том,что таймер не учитывает время выполнения функции,первый раз
сработает норм,а потом будут пролемы.
let id = setTimeout(function log() {
    console.log(`hello`);
    let id = setTimeout(log, 500);
}, 500); */


/* lesson 40 - Work wiht a Date.

Милисекунды отчитываются сначала 1970г, январь - 0 месяц.
const now = new Date(); Аргументы, например дату в виде строки.
Методы:
getFullYear(); - получение года;
getMonth();
getDate(); 1 - 31;
getDay(); 0 - воскресенье;
getTimezoneOffset(); - разница между часовым поясов и UTC в минутах;
getTime(); - милисекунды с января 1970г;
setHours(); устанвка часов;
Date.parse(); - разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970;


const now1 = new Date('2020-11-13');
const now2 = new Date(0);
console.log(now1);
console.log(new Date.parse('2020-11-13')); */


/* lesson 41 - Создаем таймер обратного отчета на сайте.

Задачи:
1)Функция расчета таймера;
2)Функция установки разницы времени;
3)Функция обновления нашего таймера; 
Дополнения: подставлялся нолик,*/


/* lesson 42 - Параметры документа, окна и работа с ними.

window - видимое окно пользователя;
screen - видимая часть монитора;
Параметры элемента страницы:
1)clientWidth and clientHeight - ширина и высота элемента с учетом padding. Без margin and border.
2)offsetWidth and offsetHeight - ширина и высота элемента с учетом padding, margin, border.
3)scrollWidth and scrollHeight - ширина и высота элемента с учетом scrollа.
4)scrollTop и др. - показывает скроллинное значение top;
5)getBoundingClientRect(); - получает координаты элемента; координаты рассчитываются по другому.
6)window.getComputedStyle(); - аргумент - элемент,получаем стили применяемые к элементу.

По правилам верстки инлайн стили приоритетнее,чем СSS стили.

console.log(document.documentElement.scrollTop);
window.scrollBy() - 2аргумента (x,y). Изменение положения страницы,от текущего положения.
window.scrollTo() - 2аргумента (x,y). Изменение положения страницы,относительно всей страницы. */


/* lesson 43 - Create modal window.

Триггер - элемент,который вызывает последующие действия. Н-р: триггер - связатся с нами, вызовет модальное окно.
Дата аттрибуты - помогают в объединении тегов. Н-р: data-modal. data-close. 
Событие scroll,keydown,event.code,pageYOffset*/


/* lesson 44 - Модификации модального окна.
Задач:
1)Открытие и закрытие модального окна.
2)Прокрутка страницы,при открытом окне
3)Закрытие окна по клику на подложку и Esc.
4)Открытие окна после пролистонного сайта и промежуток времени */


/* lesson 45  - Функции-конструкторы.

Название функции-конструктора с большой буквы. Предназначена для констуирования объектов и создания
множества копий.

const num = new Function(3);
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex); */


/* lesson 46 - Контекст вызова - This.

4 способа вызова функции и ее контекст:

1)обычный вызов: this = window, если стоит use strict - undefined.

Н-р:
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);


2)метод объекта: контекст вызова метода объекта - сам объект.

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

3)функция-конструктор и классах: контекст вызова - созданный функцией,классом объект.

4)ручное присвоение.

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith') - аргумент-контекст вызова. Дополнительный аргумент - аргумент функции.
sayName.apply(user, ['Smith']) - аргумент-контекст вызова. Тоже самое,только аргументы функции передаются в массиве.
.bind- создает новую функцию и под нее подвязывает контекст. аргумент - контекст.

function count(num) {
    return this * num;
}

const double = count.bind(2);

this обработчика события = если использовалась обычная функция,не стрелочная,то = самому элементу вызова(event.target)
а если используется стрелочная функция - то undefined.
У стрелочной функции, нет своего контекста вызова,она всегда берет его у родителя.

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2; */


/* lesson 47 - Class (ES6).

Классы - обертка функции-конструктора. Также еще их называют синктаскический сахар.
Название класса с большой буквы. в конструкторе передаются аргументы.
extends - наследование классов.
super(); - вызывает теже аргументы,что были и у родителя. всегда идет вначале конструктора.
Принципы ООП:
1)абстракция - отделяем концепцию от ее экземпляра.
2)наследование - способность объекта или класса базироваться на другом объекте или классе.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Тексn: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello world', 'red');
div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea()); */


/* lesson 48 - Используем классы на практике.

Задачи:
1)Карточки заполнялись динамически.
2)урок с rest доработать */


/* lesson 49 - Rest оператор и параметры по умолчанию.

Rest противоположное spread, объединяет элементы в массив.
rest: ...название; прописывается последним;

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'useage');

function calcOrDouble(num, basis = 2) {1
    // basis = basis || 2; - параметр по умолчанию,старый вариант;
    console.log(num * basis);
}

calcOrDouble(3, 5); */

/* lesson 50 - Локальный сервера.

Сервер - бэкэнд часть.
Локальный сервера - простые и комплексные. Нужны для того,чтобы тестировать проект перед реальным сервером.
http запросы,деляться на  категории,самые популярные из них - гет(получение данных с сервера) и пост(постит данные 
на сервер) запросы. Простые сервера в основном не умеют обрабатывать пост запросы.
OpenServer and MAMP - полноценные локальные сервера. */


/* lesson 51 - JSON формат передачи данных, глубокое клонирование объектов.

http - протокол передачи гипертекста
tcp - транспортный протокол работает на 80 порту.
JSON(JavaScriptObjectNotation) - формат передачи и хранения данных,текстовый формат. Набор пар: ключ-значения.
Все строки должны быть в двойных кавычках.
Допустим объект необходимо отправить на сервер,но такой тип сервер не поймет,поэтому нужно транспортировать.
JSON.stringify(); - преобразует объект в нужный формат;
JSON.parse(); - преобраует JSON формат обратно в объект;
Глубокое копирование создается с помощью JSON;

const persone = {
    name: 'Alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone, clone); */


/* lesson 52 AJAX и общение с сервером.

AJAX(Asynchronous Javascript and XML) - ассинхронный JS.
события:
change - когда ввели в инпут,а потом убрали с него фокус;
input - происходит,когда что-то вводится, удаляется в инпуте;
XMLHttpRequest() - это API, который предоставляет клиенту функциональность для обмена данными между
 клиентом и сервером;

const request = new XMLHttpRequest();

request.open(method, url, async, ); - собирает настройки для запроса; 
Аргументы: 1)метод(гет,пост). 2)путь(url) 3)async(как работает код,асинхронно или нет) 4)login 5)pass.
request.setRequestHeader(); - http заголовок, несут в себе информацию,о чем запрос
request.send(); - отправляем запрос
status - статус запроса(100,200,300,400 и т.д.)
statusText - текстовое описание ответа
response - ответ от сервера
readyState - текущие состояние запроса(0-объект создан,но опен не вызывался.1-open вызван.2-send вызван.
    3-загрузка.4-завр.)
событие readystatechange - отслеживает статус запрос в текущий момент;(readyState)
событие load - когда запрос загрузился и мы получили результат 
.toFixed(n); - округление до n знаков после запятой;
Задачи:
1)Повешать обработчик события на инпут конвертации валют
2)сделать гет запрос на значение валюты в базу данных
*/


/* lesson 53 - Реализация скрипта отправки данных на сервер.

событие submit - срабатывает каждый раз,когда мы отправляем форму.
new FormData() - собирает данные из формы,аргумент форма.
Для input нужна всегда указывать аттрибут name,чтобы FormData смогла норм работать.
Если используем FormData,то заголовок request.setRequestHeader() не нужен,он его сам устанавливает,иначе ошибка.
Задачи:
1)Найти все формы отправки;
2)Повешать на них протокол отправки;
3)данные отправки должны быть в json формате;
4)выводить сообщения статуса; */
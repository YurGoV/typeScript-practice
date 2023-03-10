// Задайте правильні ts типи для класичних js;
/*
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a };
*/
var age = 50;
var simpleName = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
/*
let anything = -20;
anything = 'Text';
anything = {};
*/
var anything = -20;
anything = 'Text';
anything = {};
// Виправте код зі змінною unknown, щоб у нього
// можна було зберегти змінну з текстом.
/*
let some:unknown;
some = 'Text';

let str: string;

str = some;
*/
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
/*
let person = ['Max', 21];
*/
var person;
person = ['Max', 21];
// Опишіть enum умову наступну: він повинен відображати
// статус завантаження. Завантажується (LOADING) та завантажена (READY).
var IsLoaded;
(function (IsLoaded) {
    IsLoaded[IsLoaded["LOADING"] = 0] = "LOADING";
    IsLoaded[IsLoaded["READY"] = 1] = "READY";
})(IsLoaded || (IsLoaded = {}));
;
// Зробіть змінну, яка може приймати або рядок, або число.
var variable;
variable = 'ddd';
variable = 5;
// variable = false;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var literalVar;
// Вкажіть типи для наступних функцій
/*
function showMessage(message) {
    console.log(message);
}

function calc(num1, num2) {
    return num1 + num2;
}

function customError() {
    throw new Error('Error');
}
*/
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};

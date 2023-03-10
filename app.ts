// Задайте правильні ts типи для класичних js;
/*
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a };
*/
let age:number = 50;
let simpleName:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:undefined = undefined;
let callback = (a:number): number => { return 100 + a };


// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
/*
let anything = -20;
anything = 'Text';
anything = {};
*/
let anything:unknown = -20;
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
let some:unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
    str = some;
}

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
/*
let person = ['Max', 21];
*/
let person: [string, number];
person = ['Max', 21];


// Опишіть enum умову наступну: він повинен відображати
// статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum IsLoaded {LOADING, READY};

// Зробіть змінну, яка може приймати або рядок, або число.
let variable: string | number;
variable = 'ddd';
variable = 5;
// variable = false;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let literalVar: 'enable' | 'disable';


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
function showMessage(message): void {
    console.log(message);
}

function calc(num1, num2): number {
    return num1 + num2;
}

function customError(): never {
    throw new Error('Error');
}

// Створіть свій тип даних на основі наявних даних.
/*
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
*/

type MyType = {
    title: string,
    likes: number,
    accounts: string [],
    status: string,
    details?: {
        createAt: string,
        updateAt: string,
    }
}

const page1: MyType = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
}

const page2: MyType = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}


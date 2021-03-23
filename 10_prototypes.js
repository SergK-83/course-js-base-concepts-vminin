// __proto__ ES6 синтаксис
// Object.getPrototypeOf() ES5 синтаксис

function Cat(name, color) { // Данная функция по сути выступает в роли класса.
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function () { // Расширяем функционал класса Cat.
  console.log(`Cat ${this.name} says myauu`);
}

const cat = new Cat('Max', 'grey');

// cat.voice();
//
// console.log(Cat.prototype); // { voice: [Function (anonymous)] }
// console.log(cat); // Cat { name: 'Max', color: 'grey' }
// console.log(cat.__proto__ === Cat.prototype); // true
// console.log(cat.constructor); // [Function: Cat]. Указывает на конструкторский родительский класс

// Собственные свойства объектов или свойства, которые доступны в прототипе
//============================================

function Person() {}

Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Max'; // Обращаемся к самому объекту, а не к прототипу

// console.log('skin' in person); // true
// console.log(person.name); // Max
//
// // Как нам определить какие свойства собственные, а какие в прототипе ?
// console.log(person.hasOwnProperty('name')); // true
// console.log(person.hasOwnProperty('legs')); // false

// Object.create() - создает новый объект, используя существующий прототип
// =========================================

let obj = {
  year: 2021
};
const myYear = Object.create(obj);

console.log(myYear.year); // 2021
// console.log(myYear.hasOwnProperty('year')); // false
// console.log(myYear.__proto__ === obj); // true

obj.year = 2100;

console.log(myYear.year); // 2100

obj = {year: 999};

console.log(myYear.year); // 2100

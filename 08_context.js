/*
Контекст выполнения (execution context) — это, если говорить упрощённо, концепция, описывающая окружение, в котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.

Контекст описывает окружение в котором выполняется код (любой код имеет контекст выполнения). В каждый момент времени только один контекст выполнения выполняет код. Несколько популярных видов контекста:

Global контекст
Function контекст
Стрелочные функции
В методе объекта
В конструкторе
В методах call, apply и bind
В браузере:

Как обработчик событий DOM
В инлайновом обработчике событий
Одна и та же функция может быть вызвана с разным контекстом.

Контекстом еще часто называют значение переменной this внутри функции.  Значение переменной this чаще всего определяется тем, как вызывается функция.
 */

// const person = {
//   surname: 'Старк',
//   knows: function (what, name) {
//     console.log(`Ты ${what} знаешь, ${name} ${this.surname}`); // в данном случае this совпадает с объектом person
//   }
// }
//
// function hello() {
//   console.log('Hello', this); // this = объект Window
// }
//
// const john = {surname: 'Сноу'};
//
// person.knows('все', 'Бран');
//
// person.knows.call(john, 'call', 'John'); // Вызываем метод knows (объекта person) в контексте объекта John
//
// person.knows.call(john, ...['call with operator spread', 'Джон'])
//
// person.knows.apply(john, ['apply', 'Джон']);
//
// person.knows.bind(john, 'bind', 'Джон')(); // метод bind() возвращает новую функцию, не вызывая её

// ===========================

// function Person(name, age) { // Данная функция является классом
//   this.name = name;
//   this.age = age;
//
//   console.log(this);
// }
//
// const max = new Person('Max', 25); // Person { name: 'Max', age: 25 }. Объект является инстансом класса Person.

// ===========================
// Явный байндинг - указывает, с каким контекстом нужно вызывать функцию
// function logThis() {
//   console.log(this);
// }
//
// const obj = {num: 36};
//
// logThis.apply(obj); // {num: 36}
// logThis.call(obj); // {num: 36}
// logThis.bind(obj)(); // {num: 36}

// ===========================
// Неявный байндинг - implicit
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this);
//   }
// }
//
// animal.logThis(); // { legs: 4, logThis: [Function: logThis] }. Здесь получаем объект, в контексте которого был вызван данный метод.

// ===========================
// Стрелочные функции

// function Cat(color) {
//   this.color = color;
//   console.log('This', this);
//   (() => console.log('Arrow this', this))();
// }
//
// // в обоих случаях получаем контекст this, который относится к конструктору Cat. Стрелочная функция не создает свой контекст.
//
// new Cat('red');

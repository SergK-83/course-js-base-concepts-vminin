// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof 'JavaScript');
// console.log(typeof undefined);
// console.log(typeof Math);
// console.log(typeof Symbol('JS'));
// console.log(typeof null); // выводится "object" (здесь это неточность). Тип данных null - это и есть null.
//
// console.log(typeof function () {}); // для удобства выводится function (вообще нет такого типа данных в js)
// console.log(typeof ('string' * 5)); // typeof NaN = number

/*
 Разница между null и undefined.
 ==============================

 null
 - показывает, что переменная «пустая»;
 - null должен быть присвоен.

 undefined
 - что переменная объявлена, но не имеет присвоенного значения;
 - при поиске несуществующих свойств объекта вы получите undefined;
 - функция без return возвращает undefined.
 */

// Приведение типов
// ================

// '', 0, null, undefined, NaN, false - falsy value

// console.log(Boolean('')); // false
// console.log(Boolean(' ')); // true
// console.log(Boolean('Hello')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function (){})); // true

// Строки и числа
// ==============

// console.log(1 + '2'); // 12 - string
// console.log('' + 1 + 0); // 10 - string
// console.log('' - 1 + 0); // -1 - number
// console.log('3' * '8') // 24 - number
// console.log(4 + 10 + 'px') // 14px - string. Важен порядок!!!
// console.log('42' - 40) // 2 - number. Для строк нет оперетора "-".
// console.log('42px' - 40) // NaN
// console.log(null + 2) // 2 - number. null при преведении к числу равен 0.
// console.log(undefined + 5) // NaN. undefined невозпожно привести к числу.

// "==" vs "==="
// =============

/*
"==" - сравнивает значения с приведением типов
"===" - сравнивает значения без приведения типов. Рекомендуется.
 */

// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log('0' == false); // true. Значения приводятся к числу.
// console.log('0' == 0); // true

// =================================

// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false

// console.log('' == 0) // true
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false

// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false

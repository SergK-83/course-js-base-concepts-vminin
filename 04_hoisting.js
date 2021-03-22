// console.log(sum(5, 35)); // здесь мы уже можем вызвать sum(a, b). Произошло поднятие.
//
// function sum(a, b) {
//   return a + b;
// }

// console.log(i); // undefined. Переменная i создана, но еще неопределена.
// var i = 35;
// console.log(i); // 35

// Переменнные let и const не подвержены hoisting
// ==============================================

// console.log(i); // ReferenceError: Cannot access 'i' before initialization
// let i = 35;
// console.log(i); // 35

// Function Expression & Function Declaration
// ==========================================

// console.log(squareDeclaration(5)); // 25
// console.log(squareExpression(5)); // ReferenceError: Cannot access 'squareExpression' before initialization
//
//
// function squareDeclaration(num) {
//   return num ** 2;
// }
//
// const squareExpression = function (num) {
//   return num ** 2;
// }

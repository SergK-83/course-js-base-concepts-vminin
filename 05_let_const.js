// let
// ===

// let a = 'var a';
// let b = 'var b';
//
// { // блок scope
//   a = 'new var a';
//   let b = 'local var b';
//
//   console.log('scope a:', a);
//   console.log('scope b:', b);
// }
//
// console.log('a:', a); // a: new var a
// console.log('b:', b); // b: var b

// const
// =====

// const PORT = 8080;
// PORT = 2000; // TypeError: Assignment to constant variable.
//
// const arr = ['Javascript', 'is', 'awesome'];
//
// arr.push('!!!');
// arr[0] = 'JS';
//
// // arr = ''; // TypeError: Assignment to constant variable.
//
// console.log(arr); // [ 'JS', 'is', 'awesome', '!!!' ]

// const obj = {};
//
// obj.name = 'Serg';
// obj.age = 35;
//
// obj.name = 'Max';
// delete obj.name;
//
// console.log(obj); // { age: 35 }
//
// obj = 23; // TypeError: Assignment to constant variable.



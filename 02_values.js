// let a = 37;
// let b = a;
// b++;
// console.log('a:', a); // 37
// console.log('b:', b); // 38

let arr1 = [1, 2, 3];
let arr2 = arr1; // здесь копируется ссылка на массив
arr2.push(4);

let arr3 = arr1.concat(); // здесь получаем копию массива
let arr4 = [1, 2, 3, 4];

console.log('arr1', arr1); // [ 1, 2, 3, 4 ]
console.log('arr2', arr2); // [ 1, 2, 3, 4 ]
console.log('arr3', arr3); // [ 1, 2, 3]

console.log(arr1 === arr2); // true
console.log(arr1 === arr4); // false

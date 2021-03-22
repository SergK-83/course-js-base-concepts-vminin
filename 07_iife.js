// Immediate Invoked Function Expression (iife) - это некоторый Function Expression, который моментально выпольняется.

let result = [];

// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i);
//   });
// }
//
// result[1](); // 5
// result[4](); // 5

for (var i = 0; i < 5; i++) {
  (function (j) { // создаем копию пременной i, используя iife
    // или var j = i вместо параметров функций
    result.push(function () {
      console.log(j);
    });
  })(i);
}

result[1](); // 1
result[4](); // 4

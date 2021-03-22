// Замыкания
// Функция замыкает в себе значения из вышестоящего scope

function sayHelloTo(name) {
  const message = 'Hello ' + name;

  return function () {
    console.log(message);
  }
}

const hello = sayHelloTo('Jon');

// console.log(hello);
// hello();


function createFrameworkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function () {
      console.log(fw);
    },
    add: function (framework) {
      fw.push(framework);
    }
  }
}

const manager = createFrameworkManager();

// console.log(manager);

// переменная fw недоступне из вне, но она доступна в замыкании для вложенной анонимной функции

// manager.print();
// manager.add('Vue');
// manager.print();

// setTimeout - пример на собеседовании
const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 0);
} // 6 раз выведет fib[6] = undefined

for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 0);
} // 6 раз выведет соответствующие i и значения, т.к. при каждой итерации для анонимной функции (в setTimout) в замыкании будет свое значение i (i создана через let - {block scope} ).

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 0);
  })(i);

} // 6 раз выведет соответствующие i и значения, т.к. при каждой итерации для анонимной функции (в setTimout) в замыкании будет свое значение j.

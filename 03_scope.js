/*
Scope – область видимости
 scope говорит нам о доступности переменных в функциях в коде.
 Есть глобальный и локальный scope.
 */

function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;
      console.log('funcC:', a, b, c);
    }

    funcC();
    console.log('funcB:', a, b);
  }

  funcB();
  console.log('funcA:', a);
}

funcA();

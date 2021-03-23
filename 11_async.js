const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

first(); // Интерпретатор закидывает в callStack функцию first, которая выполняется, вызывая console.log. Далее Интерпретатор выкидывает из callStack функцию first.
// callStack сейчас пуст.
setTimeout(second, 0); // Интерпретатор закидывает эту конструкцию на сторонний API. Интерпретатор очищает callStack.

third(); // Интерпретатор закидывает в callStack функцию third, которая выполняется, вызывая console.log. Далее Интерпретатор выкидывает из callStack функцию third.
// callStack сейчас пуст.

// Пока выполнялась функция third, сторонний API определил, что данный setTimeout моментальный и помещает функцию second в специальную очередь callback queue ( здесь работает Event Loop ). Далее, когда callStack очищается, функция second из callback queue перемещается в callStack и выполняется. callStack очищается.



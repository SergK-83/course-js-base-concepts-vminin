function Cat(color, name) {
  this.color = color;
  this.name = name;
}

// const cat = new Cat('grey', 'Кот'); // Получаем инстанс класса Cat
// console.log(cat);

// Реализация своего new в ES5 синтаксисе
//========================================

// function myNew(constructor, ...args) {
//   const obj = {};
//
//   Object.setPrototypeOf(obj, constructor.prototype); // устанавливает свойство [[Prototype]] объекта obj как constructor.prototype
//
//   return constructor.apply(obj, args) || obj;
// }
//
// const cat2 = myNew(Cat, 'black', 'Кеша');
// console.log(cat2); // Cat { color: 'black', name: 'Кеша' }



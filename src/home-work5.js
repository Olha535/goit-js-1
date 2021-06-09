//  1.
/*const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;*/

//  2.
/*const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;*/

//   3.  Функция Car должна создавать объект с одноимёнными свойствами
//brand, model и price, значениями которых должны быть переданные аргументы
//во время её вызова с оператором new.

/*function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const brand = new Car();

const model = new Car();

const price = new Car();*/

//   4.  Выполни рефакторинг функции-конструктора Car так,
//чтобы она принимала один параметр - объект со свойсвами brand, model и price.
//Деструктуризируй объект в сигнатуре (подписи) функции.

/*function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}*/

//   5.   Свойство prototype

/*function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function() {
return this.price;
};

Car.prototype.changePrice = function(newPrice) {
this.price = newPrice;
};*/

//   6.    С помощью Function Declaration напиши функцию-конструктор Storage,
//которая будет создавать объекты для управления складом товаров. Функция ожидает
//только один аргумент - начальный массив товаров, который записывается на
//создаваемый объект в свойство items.

/*function Storage(items) {
  this.items = items;
}
Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  return this.items.splice(this.items.indexOf(item), 1);
};

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]*/

//   7.   Конструктор строк

//С помощью Function Declaration напиши функцию-конструктор StringBuilder,
//которая принимает один параметр baseValue - произвольную строку, которая
//записывается на создаваемый объект в свойство value.

/*function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
};
StringBuilder.prototype.padStart = function (str) {
  this.value = `${str}${this.value}`;
};
StringBuilder.prototype.padBoth = function (str) {
  this.value = `${str}${this.value}${str}`;
};

// Пиши код выше этой строки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // '.'
builder.padStart("^");
console.log(builder.getValue()); // '^.'
builder.padEnd("^");
console.log(builder.getValue()); // '^.^'
builder.padBoth("=");
console.log(builder.getValue()); // '=^.^='*/

//   8.    Объявление класса
/*class Car {

}*/

//   9.  Конструктор класса

/*class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}*/

//      10.  Методы класса

//  Добавь классу Car две метода.

//getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
//changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

/*class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getPrice() {
  return this.price;
  }
  
  changePrice(newPrice) {
  this.price = newPrice;
  }
  
}*/

//    11.  Приватные свойства
//Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и
//добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

//getBrand() - возвращает значение приватного свойства brand.
//changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

/*class Car {
  #brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
 getBrand() {
  return this.#brand;
 } 
  
 changeBrand(newBrand) {
 this.#brand = newBrand;
 } 
}*/

//   12.  Задача. Хранилище 2.0

/*class Storage {
  #items;
  
 constructor(items) {
    this.#items = items;
}

getItems() {
  return this.#items;
};

addItem(newItem) {
  this.#items.push(newItem);
};

removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
};
}

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]*/

//  13.  Задача. Конструктор строк 2.0

/*class StringBuilder {
  #value;
  constructor(baseValue) {
    this.#value = baseValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Пиши код выше этой строки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // '.'
builder.padStart("^");
console.log(builder.getValue()); // '^.'
builder.padEnd("^");
console.log(builder.getValue()); // '^.^'
builder.padBoth("=");
console.log(builder.getValue()); // '=^.^='*/

//   14.  Геттеры и сеттеры
//Выполни рефакторинг класса Car. Сделай свойства model и price приватными,
//также как #brand. Стандартизируй публичный интерфейс класса заменив уже
//объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

/*class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}*/

//    15.   Статические свойства
//    Добавь сеттеру price проверку передаваемого значения параметра newPrice.
//Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно,
//то перезаписывает цену автомобиля.

/*class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
    this.#price = newPrice;
    }
    return this.#price;
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000*/

//  16.   Статические методы

/*class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки

  static checkPrice(price) {
  if (price > Car.#MAX_PRICE) {
    return 'Внимание! Цена превышает допустимую.'
  }
    return 'Всё хорошо, цена в порядке.'
  }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.*/

//   17.  Наследование классов

//В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

//Объяви класс Admin, который наследует от класса User.
//Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа),
//значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User {
static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}*/

//   18.  Конструктор дочернего класса

//   Добавь классу Admin метод constructor, который принимает один параметр -
//объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin
//публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

//Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра
//под объявлением класса.

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
 constructor({ email, accessLevel }) {
 super(email);
   this.accessLevel = accessLevel;
 }
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser*/

//   19.  Методы дочернего класса

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
blacklistedEmails = [];
  
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
blacklist(email) {
this.blacklistedEmails.push(email);
}
  
  isBlacklisted(email) {
  return this.blacklistedEmails.includes(email);
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true */

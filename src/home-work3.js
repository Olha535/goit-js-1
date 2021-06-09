"use strict";

// 1.  Создание объекта
/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};*/

//2.  Вложенные свойства

/*const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],

owner: {
name: "Henry",
 phone: "982-126-1588",
email: "henry.carter@aptmail.com",
 },
};*/

// 3.  Доступ к свойствам через точку

/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
 descr: "Spacious apartment in the city centre",
 rating: 4,
 price: 2153,
 tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;*/

//   4.  Доступ к вложенным свойствам
// Дополни код присвоив объявленным переменным выражения обращения
//к соответствующим свойствам обьекта apartment.

/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
 descr: "Spacious apartment in the city centre",
 rating: 4,
 price: 2153,
 tags: ["premium", "promoted", "top"],
 owner: {
  name: "Henry",
  phone: "982-126-1588",
 email: "henry.carter@aptmail.com",
 },
};

 //Change code below this line
const ownerName = apartment.owner.name;

const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];*/

//5.  Доступ к свойствам через квадратные скобки

/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city centre",
 rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};

 //Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];*/

//6. Изменение значения свойства

/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city centre",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");*/

//7.  Добавление свойств

/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city centre",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;

apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};*/

//  8. Короткие свойства

/*const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};*/

//  9.  Вычисляемые свойства

/*const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
}; */

//10.  Цикл for...in

/*const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
keys.push(key);
values.push(apartment[key]);  
}*/

//11. Метод hasOwnProperty()

/*const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city centre";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
  
}*/

//12.  Задача. Подсчёт свойств

/*function countProps(object) {
  let propCount = 0;
  
  propCount = Object.keys(object).length;
  
  return propCount;
}*/

// 13.  Метод Object.keys()

//Перебери объект apartment используя метод Object.keys() и цикл for...of.
//Запиши в переменную keys массив ключей собственных свойств объекта apartment,
//и добавь в массив values все значения его свойств.

/*const apartment = {
  descr: "Spacious apartment in the city centre",
  rating: 4,
  price: 2153,
};
const values = [];

const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}*/

//14.

/*function countProps(object) {
  
  let propCount = 0;
  propCount = Object.keys(object).length;
  return propCount;
  
}*/

//15.  Метод Object.values()

/*const apartment = {
  descr: "Spacious apartment in the city centre",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);*/

//16.  Задача. Расходы на зарплату

//Напиши функцию countTotalSalary(salaries) которая принимает
//объект зарплат, где имя свойства это имя сотрудника, а значение
//свойства это зарплата. Функция должна рассчитать общую сумму
//зарплат сотрудников и вернуть её. Используй переменную totalSalary
//для хранения общей суммы зарплаты.

/*function countTotalSalary(salaries) {
  let totalSalary = 0;
 
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
 
  return totalSalary;
}*/

//  17.  Массив объектов
//Перебери массив объектов colors используя цикл for...of.
//Добавь в массив hexColors значения свойств hex, а в массив
//rgbColors значения свойств rgb из всех объектов массива colors.

/*const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
  
};*/

//18.  Задача. Поиск объекта по значению свойства.
//Напиши функцию getProductPrice(productName) которая принимает
//один параметр productName - название продукта. Функция ищет
//объект продукта с таким именем (свойство name) в массиве products
//и возвращает его цену (свойство price). Если продукт с таким названием
//не найден, функция должна возвращать null.

/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    let name = product.name;
    if (productName === name) {
      return product.price;
    }
  }
  return null;
}*/

//19. Задача. Коллекция значений свойства

//Напиши функцию getAllPropValues(propName) которая принимает один параметр
//propName - имя (ключ) свойства. Функция должна вернуть массив всех значений
//свойства с таким именем из каждого объекта в массиве products. Если в объектах нет
//свойства с таким именем, функция должна вернуть пустой массив.

/*const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];


function getAllPropValues(propName) {
  // Change code below this line
 const array = []; 
  for (const product of products) {
   if (product.hasOwnProperty(propName)) {
       array.push(product[propName]);
       }
    
  }
  return array;
   
}*/

// 20. Задача. Общая стоимость товара

//Напиши функцию calculateTotalPrice(productName) которая принимает
//один параметр productName - название товара. Функция должна вернуть общую
//стоимость (цена * количество) товара с таким именем из массива products.

/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  
  let result = 0;
  for (const product of products) {
    if (product.name === productName) {
      result = product.price * product.quantity;
      return result;
    }
  }
  return result;
}*/

//21.  Деструктуризация объектов

//Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю
//температуру за три дня (meanTemperature). Замени объявления переменных yesterday,
//today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;*/

//22.  Значения по умолчанию
// В прогнозе максимальных температур также может быть необязательное свойство
//icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon
//одной операцией деструктуризации свойств объекта highTemperatures. Задай значение
//по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;


const meanTemperature = (yesterday + today + tomorrow) / 3;*/

// 23.  Изменение имени переменной
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon
//одной операцией деструктуризации свойств объекта highTemperatures.
//Задай значение по умолчанию для highIcon - строку
//"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};


const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, 
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;*/

//  24.  Деструктуризация в циклах
//  Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}*/

//25. Глубокая деструктуризация
//Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
//а также необязательными иконками. Замени объявления всех переменных одной операцией
//деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок,
//переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

/*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;*/

//26.  Паттерн «Объект настроек»
//Если функция принимает более двух-трёх аргументов, очень просто запутаться
//в какой последовательности что передавать. В результате получается очень
//неочевидный код в месте её вызова.
//Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров
//всего одним - объектом с именованными свойствами.
//Функция calculateMeanTemperature(forecast) принимает один параметр forecast -
//объект температур на два дня следующего формата.

// Change code below this line
/*function calculateMeanTemperature(forecast) {
//  const todayLow = forecast.today.low;
//  const todayHigh = forecast.today.high;
//  const tomorrowLow = forecast.tomorrow.low;
//  const tomorrowHigh = forecast.tomorrow.high;
   const {today: {low: todayLow, high: todayHigh},
          tomorrow: {low: tomorrowLow, high: tomorrowHigh}
   } = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}*/

//27.  Операция spread при передаче аргументов
//В переменной scores хранится массив результатов тестирования.
//Используя распыление и методы Math.max() и Math.min() дополни код так,
//чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

/*const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);*/

//28. Операция spread при создании нового массива
//В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты
//тестирования отдельных групп. Используя распыление дополни код так, чтобы:
//В переменной allScores хранился массив всех результатов от первой до третьей группы.
//В переменной bestScore был самый высокий общий балл.
//В переменной worstScore был самый низкий общий балл.

/*const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);*/

//29.  Операция spread при создании нового объекта
//В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые
//хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно
//переопределить, они хранятся в переменной overrideSettings.

//Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию
//и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной
//finalSettings получился объект финальных настроек теста.

/*const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };*/

//30.  Карточки задач
//Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
//В новом объекте должно быть свойство completed, значение которого хранится в одноимённой
//локальной переменной.

/*function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  
  const newData = { completed, category, priority, ...data };
  return newData;
  
}*/

//31. Операция rest для сбора всех аргументов функции
//Имя параметра может быть произвольным. Чаще всего его называют args,
//restArgs или otherArgs, сокращённое от arguments.

//Используя операцию rest дополни код функции add() так, чтобы она принимала
//любое количество аргументов, считала и возвращала их сумму.

/*function add(...args) {
  let value = 0;
  for (arg of args) {
    value += arg;
  }
  return value;
}*/

//32.  Операция rest для сбора части аргументов функции
//Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело
//функции addOverNum() так, чтобы она считала сумму только тех аргументов,
//которые больше чем заданное число. Это число должно быть первым параметром функции.

/*
function addOverNum(values, ...args) {
  let total = 0;

  for (const arg of args) {
    if (values < arg)
    total += arg;
  }

  return total;
  
}*/

//  33. Задача. Массив совпадений
//Дополни код функции так, чтобы она возвращала новый массив matches,
//в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

/*function findMatches(...args) {
  const matches = []; 
 for (let i = 1; i < args.length; i += 1) {
 if (args[0].includes(args[i])) {
     matches.push(args[i]);
 }
}
  
  return matches;
}*/

//   34.  Методы объекта

/*const bookShelf = {
  
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`;
  },
  
};*/

//   35.  Доступ к свойствам объекта в его методах
//Дополни метод updateBook(oldName, newName) так, чтобы он изменял
//название книги с oldName на newName в свойстве books.Используй indexOf() для того,
//чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

/*const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    
    const arr = this.books.indexOf(newName);
    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
  },
};*/

//  36.  К нам обратилась владелица лавки зелий «У старой жабы» и
//заказала программу для ведения инвентаря - добавления, удаления,
//поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions,
//значением которого сделай пустой массив.

/*const atTheOldToad = {
  
  potions: [],
};*/

//  37.  Получаем все зелья
//Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

/*const atTheOldToad = {
  
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions(){
    return this.potions;
  }
   
};*/

//   38.  Добавляем новое зелье
//Дополни метод addPotion(potionName) так, чтобы он добавлял зелье
//potionName в конец массива зелий в свойстве potions.

/*const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    
   this.potions.push(potionName);
    
   return this.potions;
  },
};*/

//   39.   Удаляем зелье
//   Дополни метод removePotion(potionName) так, чтобы он удалял зелье
//potionName из массива зелий в свойстве potions.

/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
  
    this.potions.splice(this.potions.indexOf(potionName), 1);
      
    
  },
};*/

//40.  Обновляем зелье
//  Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял
//название зелья с oldName на newName, в массиве зелий в свойстве potions.

/*const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    
    const arr = this.potions.indexOf(newName);
    const index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);
   
  },
};*/

//    41.   Задача. Расширяем инвентарь
//    Выполни рефакторинг методов объекта atTheOldToad так,
//чтобы они работали не с массивом строк, а с массивом объектов.
//getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
//addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
//removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName
//на newName в массиве potions.

/*const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    const { potions } = this;
    const { name } = potionName;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === name) {
        return `Potion ${name} is already equipped!`;
      }

      potions.push(potionName);
    }
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};*/

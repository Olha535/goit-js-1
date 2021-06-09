//  1.  Функция как значение
//   Дополни код так, чтобы в переменной result был результат выполнения
//функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

/*function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza();
const pointer = makePizza;

console.log(makePizza(result));
console.log(makePizza(pointer));*/

//   2.  Колбэк-функции
//Дополни функцию makeMessage так, чтобы она ожидала вторым параметром
//(параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza
//или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

/*function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
    
  return callback(pizzaName);
}*/

//   3.   Инлайн-колбэки
//Дополни второй вызов функции makePizza(pizzaName, callback),
//передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName),
//которая логирует строку 'Едим пиццу <имя пиццы>'.

/*function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza("Роял гранд", function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});


makePizza("Ультрасыр", function eatPizza(pizzaName) {
  console.log(`Едим пиццу ${pizzaName}`);
});*/

//    4.  Несколько колбэков
//
/*const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
  
  if (this.pizzas.includes(pizzaName)) {
    return onSuccess(pizzaName);
  }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);*/

//   5.  Контекст вызова функции

/*const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};*/

//   6.   Задача. Аккаунт пользователя

/*const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']*/

//    7.  Метод call
//Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта,
//при этом функция не является его методом. Для этого у функций есть методы call и apply.
//Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

//Используй call для вызова функции в контексте одного объекта-заказа.
//Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
//Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.

/*const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
 return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
}

const messages = [];

for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i + 1));
}

console.log(messages);*/

//    8.   Метод apply

//  Метод apply это аналог метода call за исключением того, что синтаксис
//передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

/*const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}*/

//    9.  Метод bind
//  Функция composeMessage(customerName) создаёт приветственные
//сообщения для ресторанов. Дополни код так, чтобы в переменных
//pizzaPalaceComposer и burgerShackComposer были её копии с привязанным
//контекстом к соответствующим объектам.

/*const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');*/

//   10.  Метод bind и методы объекта
//  Сервису рассылки электронной почты необходимо добавить логирование
//действий для сбора статистики. Функция logAndInvokeAction(email, action)
//ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service.
// Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.

/*const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
/*const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']*/

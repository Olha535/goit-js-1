//   1.   Метод forEach(callback)

/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  
  orderedItems.forEach(function(orderedItem){
   totalPrice += orderedItem;
  });                 
   
  return totalPrice;
}*/

//    2.  Функция filterArray(numbers, value) принимает массив чисел numbers
//и возвращает новый массив, в котором будут только те элементы оригинального массива,
//которые больше чем значение параметра value.

/*function filterArray(numbers, value) {
    const filteredNumbers = [];
   
  
  numbers.forEach(number =>  {
 if (value < number) {
 filteredNumbers.push(number);
 }
  });    
    return filteredNumbers;
  }*/

//   3.  Задача. Общие элементы

//  Функция getCommonElements(firstArray, secondArray) принимает два массива
//произвольной длины в параметры firstArray и secondArray, и возвращает новый
//массив их общих элементов, то есть тех которые есть в обоих массивах.

/*function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  firstArray.forEach(firstArray => {
    
      if (secondArray.includes(firstArray)) {
        commonElements.push(firstArray);
      }
    });
  
    return commonElements;
    // Пиши код выше этой строки
  }*/

//   4.  Стрелочные функции.

/*const calculateTotalPrice = (quantity, pricePerItem) => {
 
  return quantity * pricePerItem;
}*/

//     5.    Неявный возврат

/*const calculateTotalPrice = (quantity, pricePerItem) => 
   quantity * pricePerItem;*/

//    6.  Стрелочные функции как коллбеки
//Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив
//её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую
//в метод forEach() на стрелочную функцию.

/*const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((orderedItem) => {
    totalPrice += orderedItem;
  });

  return totalPrice;
}*/

//   7.    Задача. Фильтрация массива чисел

/*const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });  
    
    return filteredNumbers;
  }*/

//   8.  Задача. Общие элементы

/*const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    
    return commonElements;
  }*/

//   9.   Чистые функции

//   Пример

/*const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]*/

//   Функция dirtyMultiply(array, value) умножает каждый элемент
//массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.
//Чистая функция (pure function) - это функция результат которой зависит только от
//значений переданных аргументов.

//  Задание.     Функция changeEven(numbers, value) принимает массив чисел numbers
//и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

/*function changeEven(numbers, value) {
    
const newNumbers = [];  
  numbers.forEach((number) => {
    
      if (number % 2 === 0) {
        newNumbers.push(number + value);
      } else {
      newNumbers.push(number);
      }
      
    });
  return newNumbers;*/

//    10.   Метод map()
/*const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map((planet) => planet.length);*/

//    11.  Метод map() и массив объектов

//Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг
//(свойство title) из всех объектов массива books.

/*const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const titles = books.map(book => book.title);*/

//   12.   Метод flatMap()
//  Используя метод flatMap() сделай так, чтобы в переменной genres
//получился массив всех жанров книг (свойство genres) из массива книг books.

/*const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books.flatMap((genry) => genry.genres);*/

//   13.  Задача. Имена пользователей
//  Дополни функцию getUserNames(users) так, чтобы она возвращала массив
//имён пользователей (свойство name) из массива объектов в параметре users.

/*const getUserNames = users => {
    return users.map(user => user.name);

  };*/

//    14.   Задача. Почты пользователей
//  Дополни функцию getUserEmails(users) так, чтобы она возвращала массив
//почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

/*const getUserEmails = users => {
   return users.map(user => user.email); 

  };*/

//   15.   Методы filter и find
//   Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел
//из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно
//используй метод filter().

/*const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);*/

//    16.  Фильтрация уникальных элементов
//  Дополни код так, чтобы в переменной allGenres был массив всех жанров
//книг (свойство genres) из массива books, а в переменной uniqueGenres
//массив уникальных жанров - без повторений.

/*const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
    (books, index, array) => array.indexOf(books) === index
  );*/

//    17.  Метод filter() и массив объектов

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);*/

//   18.  Пользователи с цветом глаз
/*const getUsersWithEyeColor = (users, color) => {
 return users.filter((user) => user.eyeColor === color)

};*/

//  19.  Пользователи в возрастной категории
//   Дополни функцию getUsersWithAge(users, minAge, maxAge) так,
//чтобы она возвращала массив пользователей, возраст которых (свойство age)
//попадает в промежуток от minAge до maxAge.

/*const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter((user) => user.age > minAge && user.age < maxAge)

};*/

//  20.  Пользователи с другом
//  Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она
//возвращала массив пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.

/*const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName)) 
};*/

//   21.  Список друзей
//   Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей
//всех пользователей (свойство friends). У нескольких пользователей могут быть
//одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

/*const getFriends = (users) => {
   return users = users.flatMap((user) => user.friends).filter((elem, ind, arr) => arr.indexOf(elem) === ind);
};*/

//   22.  Активные пользователи
//Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных
//пользователей, значение свойства isActive которых true.

/*const getActiveUsers = (users) => {
 return users.filter((user) => user.isActive === true)  
};*/

//   23.  Неактивные пользователи

/*const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false) 
};*/

//   24.  Метод find()
//  Используя метод find() дополни код так, чтобы:

//В переменной bookWithTitle получился объект книги название которой (свойство title)
//совпадает со значением переменной BOOK_TITLE.
//В переменной bookByAuthor получился объект книги автор который (свойство author)
//совпадает со значением переменной AUTHOR.

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);*/

//   25.  Пользователь с почтой
//  Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала
//объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

/*const getUserWithEmail = (users, email) => {
   return users.find((user) => user.email === email)
};*/

//  26.  Метод every()

/*const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);*/

//     27.  Все ли пользователи активны

//Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли
//пользователи сейчас активны (свойство isActive) и возвращала true или false.

/*const isEveryUserActive = (users) => {
  return users.every(user => user.isActive) 
};*/

//   28.  Метод some()
/*const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);*/

//   29.  Есть ли активные пользователи

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие
//активных пользователей (свойство isActive) и возвращала true или false.

/*const isAnyUserActive = users => {
   return users.some(user => user.isActive) 
};*/

//  30.  Метод reduce()
//   Игровому сервису необходим функционал подсчёта среднего времени проведённого
//в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое
// время из массива playtimes.

/*const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) => { return previousValue + number;
                                                                  }, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;*/

//   31.  Метод reduce() и массив объектов
//   Нашему сервису необходимо рассчитать среднее время проведённое в одной игре
//для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого
//из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

/*const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((time, player) => {
return time + player.playtime / player.gamesPlayed
}, 0);*/

//   32.   Общий баланс пользователей
//  Дополни функцию calculateTotalBalance(users) так, чтобы она считала и
//возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

/*const calculateTotalBalance = users => {
  return users.reduce((acc, number) => acc + number.balance, 0); 
};*/

//   33.  Общее количество друзей

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала
//и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

/*const getTotalFriendCount = (users) => {
  return users.reduce((acc, value) => 
  acc + value.friends.length, 0);
};*/

//    34.  Метод sort()
//Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
//по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия
//массива имён авторов authors отсортированная в по алфавиту.

/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();*/

//   35.  Свой порядок сортировки чисел
//Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
//по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates
//получилась отсортированная по возрастанию копия массива releaseDates, а в переменной
//descendingReleaseDates копия отсортированная по убыванию.

/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);*/

//    36.   Свой порядок сортировки строк
//    Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
//в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной
//authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
//а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

/*const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));*/

//   37.  Сортировка объектов

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);*/

//   38.  Сортировка по балансу
//   Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив
//пользователей отсортированный по возрастанию их баланса (свойство balance).

/*const sortByAscendingBalance = users => {
  return [...users].sort((a, b) => a.balance - b.balance) 
};*/

//    39.  Сортировка по количеству друзей
//    Дополни функцию sortByDescendingFriendCount(users) так,
//чтобы она возвращала массив пользователей отсортированный по убыванию
//количества их друзей (свойство friends).

/*const sortByDescendingFriendCount = users => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length)
};*/

//   40.  Сортировка по имени
//   Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
//отсортированный по их имени (свойство name) в алфавитном порядке.

/*const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name))
};*/

//   41.  Цепочки методов (чейнинг, chaining)
//Дополни код так, чтобы в переменной names получился массив имён авторов в
//алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

/*const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
.filter((book) => book.rating > MIN_BOOK_RATING)
.map((book)=> book.author)
.sort((a,b) => a.localeCompare(b));*/

//   42.  Пользователи и друзья
//   Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она
//возвращала массив имён пользователей отсортированный по возрастанию количества
//их друзей (свойство friends).

/*const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)

    .map((user) => user.name);
};*/

//  43.  Имена друзей
//   Дополни функцию getSortedFriends(users) так, чтобы она возвращала
//массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

/*const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((elem, ind, arr) => arr.indexOf(elem) === ind)
    .sort((a, b) => a.localeCompare(b));
};*/
//   44.    Общий баланс
//   Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала
//общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает
//со значением параметра gender.

/*const getTotalBalanceByGender = (users, gender) => {
  return users.filter((user) => user.gender === gender)
   .reduce((acc, number) =>
   acc + number.balance, 0)
};*/

//Задача: фильтрация массива чисел
//Напиши функцию filterArray(numbers, value),
//которая принимает массив чисел(параметр numbers)
//и возвращает новый массив, в котором будут только
//те элементы массива numbers, которые больше чем
//значение параметра value(число).

function filterArray(numbers, value) {
  let bigNumber = [];

  for (const num of numbers) {
    if (value < num) {
      bigNumber.push(num);
    }
  }

  return bigNumber;
}

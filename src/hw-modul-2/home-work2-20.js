//Задача: подсчёт суммы покупки
//Напиши функцию calculateTotalPrice(order), которая принимает
//один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
//Общая сумма элементов должна сохраняться в переменной total,
//которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const argument of order) {
    total += argument;
  }
  // Change code above this line
  return total;
}

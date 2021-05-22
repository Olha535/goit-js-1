//Задача: чётные числа
//Напиши функцию getEvenNumbers(start, end)
//которая возвращает массив всех чётных чисел от
//start до end. Чётным считается число которое
//делится на 2 без остатка (10 % 2 === 0).

function getEvenNumbers(start, end) {
  let total = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      total.push(i);
    }
  }

  return total;
}

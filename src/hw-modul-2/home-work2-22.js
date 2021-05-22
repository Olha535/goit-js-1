//Метод push()

//Метод push() позволяет добавить один или несколько
//элементов в конец массива, без необходимости
//указывать индексы добавляемых элементов.

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

//Метод includes(value) проверяет есть ли в массиве
//элемент со значением value и возвращает true или
//false соответственно. Область применения этого метода
//сводится к ситуациям, когда необходимо проверить есть ли
//элемент в массиве и не важна его позиция (индекс).

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
}

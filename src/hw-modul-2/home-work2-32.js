//Задача: функция includes() без includes
function includes(array, value) {
  for (i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

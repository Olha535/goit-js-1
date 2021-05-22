function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let array = firstArray.concat(secondArray);
  if (array.length > maxLength) {
    array.length = maxLength;
    return array;
  }

  return array.slice(0);
}

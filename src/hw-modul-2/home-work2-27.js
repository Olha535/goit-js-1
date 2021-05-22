function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (value < number) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

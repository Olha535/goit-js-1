function checkForSpam(message) {
  message = message.toLowerCase();
  let result;

  // Change code below this line
  result = message.includes("spam") || message.includes("sale");
  // Change code above this line
  return result;
}

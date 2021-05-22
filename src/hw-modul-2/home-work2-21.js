//Задача: поиск самого длинного слова
//Напиши функцию findLongestWord(string) которая
// принимает произвольную строку состоящую только
//из слов разделённых пробелом (параметр string)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const allString = string.split(" ");
  let say = allString[0];
  for (let i = 0; i < allString.length; i += 1) {
    if (say.length < allString[i].length) {
      say = allString[i];
    }
  }

  return say;
}

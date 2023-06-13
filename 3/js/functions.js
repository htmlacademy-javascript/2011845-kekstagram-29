//1

const getLengthString = (string, length) => (string.length <= length);
getLengthString('проверяемая строка', 20);

//2
const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reversString = ''; //объявляем переменную с помощью которой будем считывать слово в обратном порядке
  for (let i = tempString.length - 1; i >= 0; i--) {
    reversString += tempString.at(i);
  }
  return tempString === reversString;
};

isPalindrom('Лёша на полке клопа нашёл ');

//3

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) { //ф-я parseInt принимает строку в качестве аргумента и возвращает целое число с указанной системой счисления
      result += string.at(i); //в result записываем очередной символ
    }
  }

  return parseInt(result, 10);
};

extractNumber('2023 год');

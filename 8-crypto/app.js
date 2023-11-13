// Можно было бы работать и напрямую со строками, но ради демонстрации использую массивы. Также не учитываю регистр.
const ALPHABET = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ё',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ы',
  'Ь',
  'Э',
  'Ю',
  'Я',
];

const getShiftedChar = (char, shift) => {
  const currentIndex = ALPHABET.indexOf(char);

  if (currentIndex < 0) return char;

  let targetIndex = currentIndex + shift;

  if (targetIndex > ALPHABET.length - 1) {
    targetIndex = targetIndex - ALPHABET.length;
  }

  if (targetIndex < 0) {
    targetIndex = ALPHABET.length - targetIndex;
  }

  return ALPHABET[targetIndex];
};

const shiftChars = (str, shift = 3) => {
  return str
    .toUpperCase()
    .split('')
    .map((char) => {
      return getShiftedChar(char, shift);
    })
    .join('')
    .toLowerCase();
};

const check = (encryptedStr, str, shift = 3) => {
  return shiftChars(str, shift) === encryptedStr;
};

console.log(shiftChars('Зашифрованное сообщение')); // log: кгылчусегррсз фссдьзрлз
console.log(shiftChars('жзылчусегррсз фссдьзрлз', -3)); // log: дешифрованное сообщение
console.log(check('фссдьзрлз ф тусдзогпл', 'Сообщение с пробелами')); // log: true
console.log(check('фссдьзрлз ф тусдзогпл', 'Сообщение спробелами')); // log: false

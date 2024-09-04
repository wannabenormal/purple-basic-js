const availableLanguages = ['EN', 'RU', 'FI', 'JP', 'ZH'];
const userLanguage = prompt(`Please select langage from: ${availableLanguages.join(', ')}`);

switch (userLanguage) {
  case 'EN':
    console.log('Hello!');
    break;
  case 'RU':
    console.log('Привет!');
    break;
  case 'FI':
    console.log('Hei!');
    break;
  case 'JP':
    console.log('こんにちは');
    break;
  case 'ZH':
    console.log('你好');
    break;
  default:
    console.log("We're sorry, but we don't know this language.");
}

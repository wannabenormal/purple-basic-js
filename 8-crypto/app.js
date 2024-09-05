const crypto = (psw) => {
  const splittedPsw = psw.split('').reverse();
  const firstHalf = splittedPsw.splice(0, Math.round(splittedPsw.length / 2));

  return splittedPsw.concat(firstHalf).join('');
};

const check = (encryptedPsw, psw) => crypto(psw) === encryptedPsw;

console.log(crypto('password')); // ssapdrow
console.log(check('ssapdrow', 'password')); // true

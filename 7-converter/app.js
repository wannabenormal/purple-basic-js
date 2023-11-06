const convertCurrency = (sum, currency = 'RUB', targetCurrency = 'USD') => {
  // Я бы это вынес из функции, но по условию задачи ставки должны храниться внутри.
  const exchangeRates = {
    RUB: {
      USD: 0.00935,
      EUR: 0.00995,
    },
    USD: {
      RUB: 93.5,
      EUR: 0.93,
    },
    EUR: {
      RUB: 99.5,
      USD: 1.07,
    },
  };

  if (!exchangeRates[currency] || !exchangeRates[currency][targetCurrency]) {
    return null;
  }

  return sum * exchangeRates[currency][targetCurrency];
};

console.log(convertCurrency(1000, 'USD', 'RUB'));

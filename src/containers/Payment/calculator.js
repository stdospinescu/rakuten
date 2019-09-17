export default (country) => {
  const countriesPrice = {
    de: '2,5€',
    at: '3€',
    es: '5,45€',
    fr: '2€',
    uk: '2,75GBP',
  };

  if (!countriesPrice.hasOwnProperty) {
    throw new Error('Country problem');
  }

  return countriesPrice[country];
};

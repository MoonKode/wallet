const formatCurrency = (current: number):string => current.toLocaleString(
  'pt-pt',
  {
    style: 'currency',
    currency: 'EUR',
  },
);

export default formatCurrency;

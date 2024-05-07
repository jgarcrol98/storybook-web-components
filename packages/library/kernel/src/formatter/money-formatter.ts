export const formatMoneyEUR = (value: number) => {
  if (isNaN(value)) return '';
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};

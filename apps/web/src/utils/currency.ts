const formatter = new Intl.NumberFormat('pt-br', {
  currency: 'BRL',
  style: 'currency',
}).format;

export function toCurrency(number: number) {
  return formatter(number);
}

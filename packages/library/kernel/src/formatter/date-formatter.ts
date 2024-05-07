const toLocaleDateString = (date: string | Date, options: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString('es-ES', options);

export const formatDateToDDMMYYYY = (date: string | Date) => {
  return toLocaleDateString(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const formatDateDDMMMMYYYY = (date: string | Date) => {
  return toLocaleDateString(date, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

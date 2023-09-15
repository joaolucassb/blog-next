export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  dateObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
  return dateObj.toString();
};

export const phoneRegex =
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const isValidPhone = (email: string) => {
  const regex = new RegExp(phoneRegex);
  return regex.test(email);
};

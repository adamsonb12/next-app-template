export const textRegex = /[^\p{Letter}\p{Mark}\s-]+/gu;

export const cleanText = (text: string) => {
  const cleanText = text.replace(textRegex, "");
  return cleanText;
};

export function capitalizeFirstLetter(string?: string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

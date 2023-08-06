export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}`;
}

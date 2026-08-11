export default function formatDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toDateString();
}

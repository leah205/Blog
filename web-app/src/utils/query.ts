export default async function query(url: string, data: object) {
  const response = await fetch(`${url}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  return res;
}

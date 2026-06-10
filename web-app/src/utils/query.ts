import handleResponse from "./handle_response";

export default async function query(url: string) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${url}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }
  const res = await handleResponse(response);
  return res;
}

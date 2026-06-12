import handle_response from "./handle_response";

export default async function mutate(
  url: string,
  formData: object,
  method: string,
) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  console.log(url);
  const res = await handle_response(response);

  return res;
}

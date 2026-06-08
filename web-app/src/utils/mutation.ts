import handle_response from "./handle_response";

export default async function mutate(
  url: string,
  formData: object,
  method: string,
) {
  const response = await fetch(`${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const res = await handle_response(response);

  return res;
}

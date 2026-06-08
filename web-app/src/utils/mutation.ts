//import handle_response from "./handle_response";

export default async function mutate(
  url: string,
  formData: object,
  method: string,
) {
  //   console.log(url);
  //   console.log(method);
  //   console.log(formData);

  const response = await fetch(`${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const res = await response.json();
  console.log(res);
  return res;
}

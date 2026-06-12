import type { ValidationError } from "~/Errors/ValidationError";

const handleResponse = async (response: Response) => {
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(`Something went wrong. Try again later`);
  }
  if (data.errors) {
    const errorMessages = data.errors.map((error: object & { msg: string }) => {
      return error.msg;
    });
    const validationError: ValidationError = new Error(`${errorMessages}`);
    validationError.errors = errorMessages;
    throw validationError;
  } else if (response.status === 400) {
    throw new Error(`${data.message}`);
  } else if (response.status === 403) {
    throw new Error(`${data.message}. Sign in to complete this action`);
  } else if (response.status === 401) {
    throw new Error(`${data.message}. Sign in to complete this action`);
  } else if (!response.ok) {
    throw new Error(`Something went wrong. Try again later`);
  }
  return data;
};

export default handleResponse;

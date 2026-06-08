import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import mutate from "../utils/mutation";

interface validationErrorType {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

export default function useSignupMutation(
  apiUrl: string,
  setErrors: React.Dispatch<React.SetStateAction<string[] | undefined>>,
) {
  const navigate = useNavigate();
  const fetchUrl = `${apiUrl}/signup`;
  return useMutation({
    mutationFn: async (formData: object) => {
      return await mutate(fetchUrl, formData, "post");
    },
    onSuccess: (res) => {
      if (res.errors) {
        const error_arr = res.errors.map((err: validationErrorType) => err.msg);
        setErrors(error_arr);
        navigate("/signup");
      } else {
        navigate("/signin");
      }
    },
    onError: (error: Error & { errors?: string[] }) => {
      if ("errors" in error) {
        setErrors(error.errors);
      } else {
        setErrors([error.message]);
      }
    },
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import mutate from "../utils/mutation";
export default function useSigninMutation(
  apiUrl: string,
  setErrors: React.Dispatch<React.SetStateAction<string[] | undefined>>,
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchUrl = `${apiUrl}/login`;
  return useMutation({
    mutationFn: async (formData: object) => {
      return await mutate(fetchUrl, formData, "post");
    },
    onSuccess: (res: object) => {
      queryClient.clear();
      if ("token" in res) {
        localStorage.setItem("token", res.token as string);
      }
      navigate("/about");
    },
    onError: (error) => {
      console.log(error);
      setErrors([error.message]);
    },
  });
}

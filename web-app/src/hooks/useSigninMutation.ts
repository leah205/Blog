import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/types";
import mutate from "../utils/mutation";
export default function useSigninMutation(
  apiUrl: string,
  setErrors: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  signin: (user: User) => void,
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchUrl = `${apiUrl}/login`;
  return useMutation({
    mutationFn: async (formData: object) => {
      return await mutate(fetchUrl, formData, "post");
    },
    onSuccess: (res: object & { user: User }) => {
      queryClient.clear();
      if ("token" in res) {
        localStorage.setItem("token", res.token as string);
      }
      if ("user" in res) {
        const user = {
          id: res.user.id,
          is_author: res.user.is_author,
          username: res.user.username,
        };
        signin(user);
      }

      navigate("/about");
    },
    onError: (error) => {
      console.log(error);
      setErrors([error.message]);
    },
  });
}

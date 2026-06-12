import { useMutation, useQueryClient } from "@tanstack/react-query";
import mutate from "../utils/mutation";

export default function useCommentMutation(
  apiUrl: string,
  postid: string,
  setErrors: React.Dispatch<React.SetStateAction<string[] | undefined>>,
) {
  const queryClient = useQueryClient();

  const url = `${apiUrl}/posts/${postid}/comments`;
  return useMutation({
    mutationFn: async (formData: object) => {
      return await mutate(url, formData, "post");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      setErrors([]);
    },
    onError: (error: Error & { errors?: string[] }) => {
      if ("errors" in error) {
        setErrors(error.errors);
      }
      setErrors([error.message]);
    },
  });
}

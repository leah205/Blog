import { useQuery } from "@tanstack/react-query";
import query from "../utils/query";

export default function usePostsQuery(apiUrl: string) {
  const fetchUrl = `${apiUrl}/posts`;
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => query(fetchUrl),
  });
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchTodos() {
  const apiUrl = import.meta.env.VITE_API_URL;

  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/api/todos`);
      return response.data;
    },
  });
}

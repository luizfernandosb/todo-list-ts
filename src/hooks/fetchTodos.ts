import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/todos");
      return response.data;
    },
  });
}

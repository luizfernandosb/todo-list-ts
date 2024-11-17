import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
;

export default function useMutationDeleleTodo() {

  
  const apiUrl = import.meta.env.VITE_API_URL

  const queryClient = useQueryClient()
  return useMutation({
    
    mutationFn: async (id: number) => {
    return await axios.delete(`${apiUrl}/api/todos/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']})
    }
    
  });
}

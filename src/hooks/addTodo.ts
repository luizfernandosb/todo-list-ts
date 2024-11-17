import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


export default function useMutationAddTodo() {

  const apiUrl = import.meta.env.VITE_API_URL

  const queryClient = useQueryClient()
  return useMutation({
    
    mutationFn: async (data: {text: string}) => {
    return await axios.post(`${apiUrl}/api/todos`, data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']})
    }
    
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
;

export default function useMutationAddTodo() {

  const queryClient = useQueryClient()
  return useMutation({
    
    mutationFn: async (data: {text: string}) => {
    return await axios.post("http://localhost:3000/api/todos", data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']})
    }
    
  });
}

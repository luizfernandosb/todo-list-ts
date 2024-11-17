import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
;

export default function useMutationToggleComplete() {

  
  const apiUrl = import.meta.env._VITE_API_URL

  const queryClient = useQueryClient()
  return useMutation({
    
    mutationFn: async (id: number) => {
    return await axios.patch(`${apiUrl}/api/todos/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']})
    }
    
  });
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
;

export default function useMutationToggleComplete() {

  const queryClient = useQueryClient()
  return useMutation({
    
    mutationFn: async (id: number) => {
    return await axios.patch(`http://localhost:3000/api/todos/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['todos']})
    }
    
  });
}

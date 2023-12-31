import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVilla as apiDeleteVilla } from "../services/apiVillas";

export function useDeleteVilla() {
  const queryClient = useQueryClient();

  const { mutate: deleteVilla, isLoading: isDeleting } = useMutation({
    mutationFn: apiDeleteVilla,
    onSuccess: () => {
      toast.success("Villa successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["Villas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteVilla };
}

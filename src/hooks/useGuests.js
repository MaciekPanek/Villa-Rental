import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../services/apiGuests";

export function useGuests() {
  const {
    isLoading,
    data: guests,
    error,
  } = useQuery({ queryKey: ["Guests"], queryFn: getGuests });

  return { isLoading, error, guests };
}

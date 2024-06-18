import { useQuery } from "@tanstack/react-query";
import { getVehicleById } from "../apis/vehicles";

export function useVehicleById(id: number) {
  const query = useQuery({
    queryKey: ['vehicleid'],
    queryFn: () => getVehicleById(id)
  })
  return query
}
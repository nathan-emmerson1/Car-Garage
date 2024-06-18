import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import { getVehicles } from '../apis/vehicles.ts'
export function useVehicles() {
  const query = useQuery({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
  })
  return query
}

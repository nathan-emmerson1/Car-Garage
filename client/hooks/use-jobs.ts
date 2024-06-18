import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../apis/jobs";

export function useJobs(){
  const query = useQuery({
    queryKey: ['jobs'], 
    queryFn: getAllJobs,
    
    })
    return query


}
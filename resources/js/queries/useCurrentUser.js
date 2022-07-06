import { fetchCurrentUser } from "@/apis/authApi";
import { useQuery, useQueryClient } from "react-query";

export default function useCurrentUser(queryKey, options = {})
{
    const queryClient = useQueryClient()

    return useQuery({
        queryKey,
        queryFn: fetchCurrentUser,
        staleTime: 1000 * 60 * 60 * 2, //Refetch every 2 hours
        retry: (failureCount, error) => {
            //Unauthenticated
            if (error?.response?.status === 401) return false

            if (failureCount >= 3) return false

            return true
        },     
        onError(error) {
            if (error?.response?.status === 401) {
                queryClient.setQueryData(queryKey, null)
            }
        },
        ...options   
    })
}
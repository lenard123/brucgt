import { fetchAllAttributes } from "@/apis/attributeApi";
import { useQuery } from "react-query";
import queryKeyFactory from "./queryKeyFactory";


export default function useAttributes()
{
    const query = useQuery({
        queryKey: queryKeyFactory.attributes(),
        queryFn: fetchAllAttributes,
    })

    return query
}

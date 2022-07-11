import { fetchCategories } from "@/apis/categoryApi";
import { useQuery, useQueryClient } from "react-query";
import queryKeyFactory from "./queryKeyFactory";

const KEY = queryKeyFactory.categories()

export default function useCategories()
{
    const queryClient = useQueryClient()    

    const query = useQuery({
        queryKey: KEY,
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 10, //10 Minutes
    })

    const setCategories = function (categories) {
        queryClient.setQueryData(KEY, categories)
    }

    const invalidateData = function() {
        queryClient.invalidateQueries(KEY)
    }

    const pushCategory = function (category) {
        setCategories(categories => {
            return categories && [...categories, category]
        })
    }

    return {
        ...query,
        setCategories,
        pushCategory,
        invalidateData
    }
}
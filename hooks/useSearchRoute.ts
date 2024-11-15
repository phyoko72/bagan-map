import {useEffect, useState} from "react"
import {
    Tbl_TravelRouteListData as list,
    Tbl_BaganMapInfoData as pagodas,
} from "@/data/BaganMap.json"

export default function useSearchRoute(route: number) {
    const [data, setdata] = useState<Info[] | null>(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = list[route].PagodaList.map(
            (item) => pagodas.find((aa) => aa.Id === item)!
        ).slice(0, -1)

        setdata(result)
        setIsLoading(false)
    }, [])
    return {data, isLoading}
}

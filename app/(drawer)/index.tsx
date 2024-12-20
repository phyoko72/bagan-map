import {Tbl_BaganMapInfoData} from "@/data/BaganMap.json"
import Map from "@/components/Map"
import SearchByName from "@/components/SearchByName"
import {View} from "react-native"
import {useCallback, useState} from "react"

export default function Index() {
    const [selectedItem, setSelectedItem] = useState<Info | null>(null)
    const onSelectItem = useCallback((item: Info) => setSelectedItem(item), [])

    return (
        <View className=" flex-1 w-full">
            <Map data={Tbl_BaganMapInfoData} selectedItem={selectedItem} />
            <SearchByName
                selectedItem={selectedItem}
                onSelectItem={onSelectItem}
            />
        </View>
    )
}

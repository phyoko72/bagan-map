import {View, FlatList, Pressable} from "react-native"
import {Tbl_BaganMapInfoData as data} from "@/data/BaganMap.json"
import {useCallback, useState} from "react"
import RenderItem from "./RenderItem"
import Text from "./Text"

interface Props {
    selectedItem: Info | null
    onSelectItem: (item: Info) => void
}

export default function SearchByName({selectedItem, onSelectItem}: Props) {
    const [isSearching, setIsSearching] = useState(false)
    const reset = useCallback(() => setIsSearching(false), [])
    const toggle = useCallback(() => {
        setIsSearching((prev) => !prev)
    }, [])

    return (
        <View className=" w-full max-w-screen-sm absolute top-[30px] ">
            <View className=" w-[80%] mx-auto">
                {selectedItem ? (
                    <Pressable onPress={toggle}>
                        <Text className=" text-xl font-bold p-1 border rounded-md text-center bg-white">
                            {selectedItem.PagodaMmName}
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable onPress={toggle}>
                        <Text className=" text-xl font-bold p-1 border rounded-md text-center bg-white">
                            Search
                        </Text>
                    </Pressable>
                )}

                {isSearching ? (
                    <View className=" w-full h-[200px] mt-2">
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.Id}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => (
                                <View className=" h-2" />
                            )}
                            renderItem={({item}) => (
                                <RenderItem
                                    item={item}
                                    onSelectItem={onSelectItem}
                                    reset={reset}
                                />
                            )}
                        />
                    </View>
                ) : null}
            </View>
        </View>
    )
}

import {memo} from "react"
import {Pressable} from "react-native"
import Text from "./Text"

interface RenderItemProps {
    item: Info
    onSelectItem: (item: Info) => void
    reset: () => void
}

const RenderItem = memo(function ({
    item,
    onSelectItem,
    reset,
}: RenderItemProps) {
    return (
        <Pressable
            className=" p-3 border  rounded-md bg-white"
            onPress={() => {
                onSelectItem(item)
                reset()
            }}
        >
            <Text className=" text-xl">{item.PagodaMmName}</Text>
        </Pressable>
    )
})

export default RenderItem

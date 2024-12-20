import {ActivityIndicator, View} from "react-native"
import Map from "@/components/Map"
import useSearchRoute from "@/hooks/useSearchRoute"
import Text from "@/components/Text"
export default function RouteTwo() {
    const {data, isLoading} = useSearchRoute(1)

    if (isLoading)
        return (
            <View className=" flex-1">
                <ActivityIndicator size={"large"} color={"navy"} />
            </View>
        )

    if (!data)
        return (
            <View className=" flex-1">
                <Text>No data found!</Text>
            </View>
        )
    return (
        <View className=" flex-1 w-full">
            <Map data={data} showRoute />
        </View>
    )
}

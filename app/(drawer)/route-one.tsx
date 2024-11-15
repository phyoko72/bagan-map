import {Text, ActivityIndicator, View} from "react-native"
import Map from "@/components/Map"
import useSearchRoute from "@/hooks/useSearchRoute"

export default function RouteOne() {
    const {data, isLoading} = useSearchRoute(0)
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
            <Text>Route One</Text>
        </View>
    )
}

import {View, ScrollView, Pressable} from "react-native"
import {useLocalSearchParams, useRouter} from "expo-router"
import {Tbl_BaganMapInfoDetailData as items} from "@/data/BaganMap.json"
import {TabBarIcon} from "@/components/navigation/TabBarIcon"
import Text from "@/components/Text"
export default function Modal() {
    const {id, title} = useLocalSearchParams<{id: string; title: string}>()
    const router = useRouter()
    const data = items.find((item) => item.Id === id)

    if (!data)
        return (
            <View className=" flex-1">
                <Text>No data found!</Text>
            </View>
        )

    return (
        <ScrollView className=" absolute bottom-0 w-full h-[80vh] bg-white rounded-lg">
            <View className="p-4">
                <Pressable
                    className=" items-end mr-3 my-2"
                    onPress={() => router.back()}
                >
                    <TabBarIcon name="close-circle" size={30} color={"grey"} />
                </Pressable>

                <Text className=" text-2xl font-bold text-center underline underline-offset-4 mb-3">
                    {title}
                </Text>

                <Text className=" text-xl text-justify">
                    {data.Description
                        ? data.Description
                        : "အချက်အလက်များမရှိသေးပါ။"}
                </Text>
            </View>
        </ScrollView>
    )
}

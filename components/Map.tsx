import {View, Text, Image} from "react-native"
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from "react-native-maps"
import {useRouter} from "expo-router"
import {memo, useEffect, useRef} from "react"
const markerImg = require("@/assets/images/marker_02.png")
interface Props {
    data: Info[]
    selectedItem?: Info | null
    showRoute?: boolean
}
const Map = memo(function ({selectedItem, data, showRoute}: Props) {
    const router = useRouter()
    console.log("Map Rendered")
    const mapRef = useRef<MapView>(null)
    useEffect(() => {
        if (selectedItem) {
            mapRef.current?.animateToRegion(
                {
                    latitude: selectedItem.Latitude,
                    longitude: selectedItem.Longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                },
                500
            )
        }
    }, [selectedItem])
    return (
        <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            loadingEnabled
            tintColor="black"
            mapType="standard"
            showsPointsOfInterest={false}
            initialRegion={{
                latitude: data[0].Latitude,
                longitude: data[0].Longitude,
                // latitude: 21.1691301113955,
                // longitude: 94.8630055262538,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            userInterfaceStyle="dark"
            style={{width: "100%", height: "100%"}}
        >
            {data.map((item, index) => (
                <Marker
                    key={index}
                    tracksViewChanges={false}
                    coordinate={{
                        latitude: item.Latitude,
                        longitude: item.Longitude,
                    }}
                    onPress={() => {
                        console.log(item.PagodaMmName)
                        router.navigate({
                            pathname: "/[id]",
                            params: {id: item.Id, title: item.PagodaMmName},
                        })
                    }}
                >
                    <View className=" items-center">
                        <View className=" flex-row">
                            <View className="bg-blue-500 px-1 rounded">
                                <Text className=" text-sm text-white ">
                                    {index + 1}
                                </Text>
                            </View>
                            <View>
                                <Text>{item.PagodaMmName}</Text>
                            </View>
                        </View>
                        <Image source={markerImg} className=" w-10 h-10" />
                    </View>
                </Marker>
            ))}
            {showRoute && (
                <Polyline
                    coordinates={data.map((x) => ({
                        latitude: x.Latitude,
                        longitude: x.Longitude,
                    }))}
                    strokeColor="navy"
                    strokeWidth={2}
                    geodesic
                />
            )}
        </MapView>
    )
})

export default Map

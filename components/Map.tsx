import {View, Image} from "react-native"
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from "react-native-maps"
import {useRouter} from "expo-router"
import {memo, useEffect, useRef} from "react"
import Text from "./Text"
const markerImg = require("@/assets/images/marker_02.png")
interface Props {
    data: Info[]
    selectedItem?: Info | null
    showRoute?: boolean
}
const Map = memo(function ({selectedItem, data, showRoute}: Props) {
    const router = useRouter()
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
                        router.navigate({
                            pathname: "/[id]",
                            params: {id: item.Id, title: item.PagodaMmName},
                        })
                    }}
                >
                    <View className=" flex-row items-center justify-center gap-x-1">
                        <Text className=" text-blue-500 font-bold">
                            {`(${index + 1})`}
                        </Text>

                        <Text>{item.PagodaMmName}</Text>
                    </View>
                    <Image source={markerImg} className=" w-10 h-10" />
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

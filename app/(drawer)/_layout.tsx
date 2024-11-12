import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Drawer} from "expo-router/drawer"
import {StatusBar} from "expo-status-bar"

export default function Layout() {
    return (
        <>
            <GestureHandlerRootView style={{flex: 1}}>
                <Drawer
                    screenOptions={{
                        // headerBackgroundContainerStyle: {
                        //     backgroundColor: "gold",
                        //     paddingTop: 30,
                        // },
                        headerPressColor: "navy",
                        headerTransparent: true,
                    }}
                >
                    <Drawer.Screen
                        name="index" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: "Home",
                            title: "Homes",
                        }}
                    />
                    <Drawer.Screen
                        name="route-one" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: "Route One",
                            title: "Route One",
                        }}
                    />
                    <Drawer.Screen
                        name="route-two" // This is the name of the page and must match the url from root
                        options={{
                            drawerLabel: "Route Two",
                            title: "Route Two",
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="dark" />
        </>
    )
}

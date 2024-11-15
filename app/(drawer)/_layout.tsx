import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Drawer} from "expo-router/drawer"
import {StatusBar} from "expo-status-bar"

export default function Layout() {
    return (
        <>
            <GestureHandlerRootView style={{flex: 1}}>
                <Drawer
                // screenOptions={{
                //     headerTransparent: true,
                // }}
                >
                    <Drawer.Screen
                        name="index"
                        options={{
                            drawerLabel: "Home",
                            title: "Home",
                        }}
                    />
                    <Drawer.Screen
                        name="route-one"
                        options={{
                            drawerLabel: "ခရီးစဉ်-၁",
                            title: "ခရီးစဉ်-၁",
                        }}
                    />
                    <Drawer.Screen
                        name="route-two"
                        options={{
                            drawerLabel: "ခရီးစဉ်-၂",
                            title: "ခရီးစဉ်-၂",
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="dark" />
        </>
    )
}

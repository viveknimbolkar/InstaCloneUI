import { StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screen/home'

const Drawer = createDrawerNavigator();

export default function MenuNavigation() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#EB4511" />
      <Drawer.Navigator
        // Use this to customize drawer -  https://www.youtube.com/watch?v=l8nY4Alk70Q
        screenOptions={{
          drawerType: "front",
          headerShown: false,
          drawerActiveTintColor: "#bfbfbf",
          overlayColor:'transparent'
        }}
      >
        {/* conflict may be happen because of the same route name as Home */}
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </>
  );
}

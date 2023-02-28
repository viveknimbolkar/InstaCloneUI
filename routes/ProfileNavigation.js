import { StatusBar } from "react-native";
import Home from "../screen/home";
import Profile from "../screen/profile/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../screen/profile/EditProfile";
import SettingsIndexNavigation from "./settings/SettingsIndexNavigation";

const Stack = createStackNavigator();

export default function MenuNavigation() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#EB4511" />
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
        <Stack.Screen
          name="EditProfile"
          options={{ headerTitle: "Edit Profile" }}
          component={EditProfile}
        />

        <Stack.Screen
          name="SettingsIndexNavigation"
          options={{ headerTitle: "Settings" }}
          component={SettingsIndexNavigation}
        />
      </Stack.Navigator>
    </>
  );
}

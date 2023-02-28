import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationIndexNavigation from "./notification/NotificationIndexNavigation";
import SettingsPage from "./SettingsPage";

const Stack = createStackNavigator();

function SettingsIndexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SettingsPage"
        component={SettingsPage}
      />
      <Stack.Screen
        name="NotificationIndexNavigation"
        component={NotificationIndexNavigation}
      />
    </Stack.Navigator>
  );
}

export default SettingsIndexNavigation;

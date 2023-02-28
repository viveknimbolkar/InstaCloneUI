import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationSettings from "./NotificationSettings";

const Stack = createStackNavigator();

function NotificationIndexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationSettingsRoute"
        component={NotificationSettings}
      />
    </Stack.Navigator>
  );
}

export default NotificationIndexNavigation;

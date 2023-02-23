import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomePage from "../screen/HomePage";
import Search from "../screen/Search";
import Profile from "../screen/Profile";
import Reel from "../screen/Reel";
import Login from "../screen/Login";
import CreatePost from "../screen/CreatePost";

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "list-sharp" : "list-outline";
          } else if (route.name === "Notification") {
            iconName = focused
              ? "notifications-circle"
              : "notifications-circle-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "md-add-circle-outline" : "md-add-circle";
          } else if (route.name === "Reel") {
            iconName = focused ? "person-outline" : "person-sharp";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "person-sharp";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#EB4511",
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen name="Reel" component={Reel} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

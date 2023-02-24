import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "react-native";

import Home from "../screen/home/Home";
import Profile from '../screen/profile/Profile'
import CreatePost from '../screen/createpost/CreatePost'
import Reel from '../screen/reel/Reel'
import Search from "../screen/search/Search";

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#ffffff" barStyle='dark-content' />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search-outline" : "search";
            } else if (route.name === "CreatePost") {
              iconName = focused ? "md-add-circle-outline" : "md-add-circle";
            } else if (route.name === "Reel") {
              iconName = focused ? "videocam-outline" : "videocam";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-outline" : "person-sharp";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Reel" component={Reel} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  );
}

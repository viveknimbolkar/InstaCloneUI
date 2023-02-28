import { StatusBar } from "react-native";
import Profile from "../screen/profile/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../screen/profile/EditProfile";
import SettingsPage from "./settings/SettingsPage";
import NotificationSettingsPage from "./settings/notification/NotificationSettingsPage";
import NotificationSettings from "./settings/notification/NotificationSettingsPage";
import PostsStoriesAndCommentsSettings from "./settings/notification/poststoriescomments/PostsStoriesAndCommentsSettings";
import FollowingAndFollowers from "./settings/notification/followingandfollowers/FollowingAndFollowers.js";
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
          options={{ headerTitle: "Settings" }}
          name="SettingsPage"
          component={SettingsPage}
        />
        <Stack.Screen
          name="NotificationSettingsNavigation"
          options={{ headerTitle: "Notifications" }}
          component={NotificationSettingsPage}
        />
        <Stack.Screen
          name="NotificationSettings"
          options={{ headerTitle: "Notifications" }}
          component={NotificationSettings}
        />
        <Stack.Screen
          name="PostStoriesAndCommentsSettings"
          options={{ headerTitle: "Posts Stories And Comments" }}
          component={PostsStoriesAndCommentsSettings}
        />
        <Stack.Screen
          name="FollowingAndFollowersSetings"
          options={{ headerTitle: "Followers and Followinngs" }}
          component={FollowingAndFollowers}
        />
      </Stack.Navigator>
    </>
  );
}

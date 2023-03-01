import { StatusBar } from "react-native";
import Profile from "../screen/profile/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../screen/profile/EditProfile";
import SettingsPage from "./settings/SettingsPage";
import NotificationSettingsPage from "./settings/notification/NotificationSettingsPage";
import NotificationSettings from "./settings/notification/NotificationSettingsPage";
import PostsStoriesAndCommentsSettings from "./settings/notification/poststoriescomments/PostsStoriesAndCommentsSettings";
import FollowingAndFollowers from "./settings/notification/followingandfollowers/FollowingAndFollowers.js";
import MessagesSettings from "./settings/notification/messages/MessagesSettings";
import CallsSettings from "./settings/notification/calls/CallsSettings";
import LiveAndReelsSettings from "./settings/notification/liveandreels/LiveAndReelsSettings";
import FundraisersSettings from "./settings/notification/fundraisers/FundraisersSettings";
import FromInstagramSettings from "./settings/notification/frominstagram/FromInstagramSettings";
import EmailNotificationSettings from "./settings/notification/emailnotification/EmailNotificationSettings";
import ShoppingSettings from "./settings/notification/shopping/ShoppingSettings";
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
        {/* notification settings */}
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
          name="MessagesSettings"
          options={{ headerTitle: "Messagess" }}
          component={MessagesSettings}
        />
        <Stack.Screen
          name="FollowingAndFollowersSetings"
          options={{ headerTitle: "Followers and Followinngs" }}
          component={FollowingAndFollowers}
        />
        <Stack.Screen
          name="CallsSettings"
          options={{ headerTitle: "Calls" }}
          component={CallsSettings}
        />
        <Stack.Screen
          name="LiveAndReelsSettings"
          options={{ headerTitle: "Live and reels" }}
          component={LiveAndReelsSettings}
        />
        <Stack.Screen
          name="FundraisersSettings"
          options={{ headerTitle: "Fundraisers" }}
          component={FundraisersSettings}
        />
        <Stack.Screen
          name="FromInstagramSettings"
          options={{ headerTitle: "From Instagram" }}
          component={FromInstagramSettings}
        />
        <Stack.Screen
          name="EmailNotificationSettings"
          options={{ headerTitle: "Email notification" }}
          component={EmailNotificationSettings}
        />
        <Stack.Screen
          name="ShoppingSettings"
          options={{ headerTitle: "Shopping" }}
          component={ShoppingSettings}
        />

        {/* privacy */}
      </Stack.Navigator>
    </>
  );
}

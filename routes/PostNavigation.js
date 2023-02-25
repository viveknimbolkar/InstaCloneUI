import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserPosts from "../screen/profile/UserPosts";
import Home from "../screen/home/Home";
const Stack = createStackNavigator();
function PostNavigation() {
    // todo navigation for posts not working
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserPosts" component={UserPosts} />
    </Stack.Navigator>
  );
}

export default PostNavigation;

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

function NotificationSettings({ navigation }) {
  return (
    <ScrollView style={styles.mainContainer}>
      <List.Item
        title="Pause all"
        left={(props) => <Feather size={25} name="user-plus" />}
      />
      <List.Item
        onPress={() => navigation.navigate("PostStoriesAndCommentsSettings")}
        title="Posts, stories and comments"
        left={(props) => (
          <Ionicons size={25} name="ios-notifications-outline" />
        )}
      />
      <List.Item
      
      onPress={() => navigation.navigate("FollowingAndFollowersSetings")}
        title="Following and followers"
        left={(props) => <Feather size={25} name="lock" />}
      />

      <List.Item
        title="Messages"
        left={(props) => <Feather size={25} name="users" />}
      />
      <List.Item
        title="Calls"
        left={(props) => <MaterialCommunityIcons size={25} name="security" />}
      />
      <List.Item
        title="Live and reels"
        left={(props) => <AntDesign size={25} name="database" />}
      />
      <List.Item
        title="Fundraisers"
        left={(props) => (
          <MaterialCommunityIcons size={25} name="advertisements" />
        )}
      />
      <List.Item
        title="From instagram"
        left={(props) => <AntDesign size={25} name="login" />}
      />
      <List.Item
        title="Email notifications"
        left={(props) => <Entypo size={25} name="help" />}
      />
      <List.Item
        title="Shopping"
        left={(props) => (
          <Ionicons size={25} name="information-circle-outline" />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
  },
});
export default NotificationSettings;

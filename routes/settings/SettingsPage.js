import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
function SettingsPage({navigation}) {
  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <List.Item
          title="Follow and invite friends"
          left={(props) => <Feather size={25} name="user-plus" />}
        />
        <List.Item
        onPress={()=>navigation.navigate('NotificationSettingsNavigation')}
          title="Notifications"
          left={(props) => (
            <Ionicons size={25} name="ios-notifications-outline" />
          )}
        />
        <List.Item
          title="Privacy"
          left={(props) => <Feather size={25} name="lock" />}
        />

        <List.Item
          title="Supervision"
          left={(props) => <Feather size={25} name="users" />}
        />
        <List.Item
          title="Security"
          left={(props) => <MaterialCommunityIcons size={25} name="security" />}
        />
        <List.Item
          title="Suggested content"
          left={(props) => <AntDesign size={25} name="database" />}
        />
        <List.Item
          title="Ads"
          left={(props) => (
            <MaterialCommunityIcons size={25} name="advertisements" />
          )}
        />
        <List.Item
          title="Account"
          left={(props) => <AntDesign size={25} name="login" />}
        />
        <List.Item
          title="Help"
          left={(props) => <Entypo size={25} name="help" />}
        />
        <List.Item
          title="About"
          left={(props) => (
            <Ionicons size={25} name="information-circle-outline" />
          )}
        />
        <List.Item
          title="Theme"
          left={(props) => <Ionicons size={25} name="color-palette" />}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,backgroundColor:'white'
  },
});
export default SettingsPage;

import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Post from "../../components/post";
import Story from "../../components/story";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserCard from "../../components/userCard";
function Home() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHeaderContainer}>
          <Text style={styles.mainHeaderContainer.header}>Instagram</Text>
          <View style={styles.actionIconContainer}>
            <Ionicons
              style={styles.actionIconContainer.actionIcon}
              size={30}
              name={`heart-outline`}
            />
            <MaterialCommunityIcons
              style={styles.actionIconContainer.actionIcon}
              size={30}
              name={`message-text-outline`}
            />
          </View>
        </View>
        <Story />
        <UserCard />
        <Post />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  mainHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    header: {
      fontSize: 24,
      fontWeight: "700",
    },
  },
  actionIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    paddingTop: 10,
    actionIcon: {
      fontSize: 24,
    },
  },
});
export default Home;

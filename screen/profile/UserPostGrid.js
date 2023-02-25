import { Link } from "@react-navigation/native";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import PostNavigation from "../../routes/PostNavigation";
function UserPostGrid({navigation}) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.postContainer}>
            <Pressable onPress={()=>{navigation.navigate(PostNavigation)}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={{ uri: "https://via.placeholder.com/200/" }}
              />
            </Pressable>
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: "https://via.placeholder.com/200/" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default UserPostGrid;

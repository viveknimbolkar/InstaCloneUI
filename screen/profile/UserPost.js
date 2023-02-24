import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
function UserPost() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.postContainer}>
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

export default UserPost;

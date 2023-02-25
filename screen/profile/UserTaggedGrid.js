import React from "react";
import { View, Image, StyleSheet } from "react-native";
function UserTaggedGrid() {
  return (
    <>
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
      </View>
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

export default UserTaggedGrid;

import React from "react";
import { Searchbar } from "react-native-paper";
import { View, ScrollView, StyleSheet, Pressable, Image } from "react-native";
function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <View>
        <Searchbar
          style={{ backgroundColor: "white" }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ScrollView>
          <View style={styles.postContainer}>
            <Pressable
              onPress={() => {
                navigation.navigate(PostNavigation);
              }}
            >
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
export default Search;

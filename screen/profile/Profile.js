import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Appbar, List, Button } from "react-native-paper";
import Ionicon from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserReelGrid from "./UserReelGrid";
import UserPostGrid from "./UserPostGrid";
import UserTaggedGrid from "./UserTaggedGrid";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Modal, Portal, Provider } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
const Tab = createMaterialTopTabNavigator();

function Profile({ navigation, route }) {
  const [isStoryHightlightOpen, setIsStoryHightlightOpen] = useState(false);
  const [isAddPostModalVisible, setAddPostModalVisible] = useState(false);
  const [isSettingModalVisible, setSettingModalVisible] = useState(false);

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={isAddPostModalVisible}
            onDismiss={() => setAddPostModalVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <View>
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Reel"
                left={(props) => <Entypo size={25} color="grey" name="video" />}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Post"
                left={(props) => (
                  <AntDesign size={25} color="grey" name="pluscircleo" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Story"
                left={(props) => (
                  <FontAwesome size={25} color="grey" name="plus" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Story Hightlights"
                left={(props) => (
                  <AntDesign size={25} color="grey" name="heart" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Live"
                left={(props) => (
                  <MaterialIcons
                    size={25}
                    color="grey"
                    name="online-prediction"
                  />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Guide"
                left={(props) => (
                  <FontAwesome size={25} color="grey" name="book" />
                )}
              />
            </View>
          </Modal>
          <Modal
            visible={isSettingModalVisible}
            onDismiss={() => setSettingModalVisible(false)}
            contentContainerStyle={styles.modalContainer}
          >
            <View>
              <List.Item
              onPress={()=>navigation.navigate('SettingsIndexNavigation')}
                titleStyle={styles.popOverTitle}
                title="Settings"
                left={(props) => (
                  <AntDesign size={25} color="grey" name="setting" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Your activity"
                left={(props) => (
                  <AntDesign size={25} color="grey" name="clockcircleo" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Archive"
                left={(props) => (
                  <MaterialCommunityIcons
                    size={25}
                    color="grey"
                    name="book-clock"
                  />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="QR code"
                left={(props) => (
                  <AntDesign size={25} color="grey" name="qrcode" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Saved"
                left={(props) => (
                  <MaterialIcons
                    style={{ transform: [{ rotate: "90deg" }] }}
                    size={25}
                    color="grey"
                    name="label-outline"
                  />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Digital collectibles"
                left={(props) => (
                  <Feather size={25} color="grey" name="check-circle" />
                )}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Close friends"
                left={(props) => <Entypo size={25} color="grey" name="list" />}
              />
              <List.Item
                titleStyle={styles.popOverTitle}
                title="Favourites"
                left={(props) => (
                  <AntDesign size={25} color="grey" name="staro" />
                )}
              />
            </View>
          </Modal>
        </Portal>

        <Appbar.Header>
          <Appbar.Content title="user001.py" />
          <Appbar.Action
            icon="plus"
            onPress={() => setAddPostModalVisible(true)}
          />
          <Appbar.Action
            icon="tune"
            onPress={() => setSettingModalVisible(true)}
          />
        </Appbar.Header>

        <View style={styles.mainContainer}>
          <View style={styles.userStatContainer}>
            {/* <Avatar.Icon size={100} icon="folder" /> */}
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{
                uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
              }}
            />
            <View style={styles.userStatItemContainer}>
              <Text style={styles.userStatText}>5</Text>
              <Text style={styles.userStatContent}>Posts</Text>
            </View>
            <View style={styles.userStatItemContainer}>
              <Text style={styles.userStatText}>256</Text>
              <Text style={styles.userStatContent}>Following</Text>
            </View>
            <View style={styles.userStatItemContainer}>
              <Text style={styles.userStatText}>523</Text>
              <Text style={styles.userStatContent}>Followers</Text>
            </View>
          </View>
          <View style={styles.userBioContainer}>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userBio}>
              This is the bio of the user lsdkf l;ksdj flksjdlf;k sldfkj
              sldkjflsd
            </Text>
          </View>
          <View style={styles.actionBtnContainer}>
            <Button
              onPress={() => {
                navigation.navigate("EditProfile");
              }}
              style={styles.actionBtn}
              textColor="black"
              buttonColor="#ededed"
              mode="elevated"
            >
              Edit Profile
            </Button>
            <Button
              style={styles.actionBtn}
              textColor="black"
              buttonColor="#ededed"
              mode="elevated"
            >
              Share Profile
            </Button>
            <Button
              style={styles.actionBtn}
              icon="plus"
              textColor="black"
              buttonColor="#ededed"
              mode="elevated"
            ></Button>
          </View>
          <View
            onStartShouldSetResponder={() => {
              setIsStoryHightlightOpen(!isStoryHightlightOpen);
            }}
            style={styles.storyHightlightContainer}
          >
            <Text style={{ fontWeight: "900" }}>Story Highlights</Text>
            <Ionicon
              name={`${isStoryHightlightOpen ? "arrow-up" : "arrow-down"}`}
            />
          </View>
          {isStoryHightlightOpen && (
            <>
              <Text style={{ marginBottom: 10 }}>
                Keep your favourite stories on your profile
              </Text>
              <View style={styles.hightlightContainer}>
                <View style={styles.hightlightItem}>
                  <Ionicon name="add" style={{ fontSize: 28 }} />
                </View>
              </View>
            </>
          )}
        </View>
        <Tab.Navigator
          screenOptions={{
            tabBarShowIcon: true,
          }}
        >
          <Tab.Screen name="Post" component={UserPostGrid} />
          <Tab.Screen name="Reel" component={UserReelGrid} />
          <Tab.Screen name="Tagged" component={UserTaggedGrid} />
        </Tab.Navigator>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
  },
  userStatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userStatItemContainer: { display: "flex", alignItems: "center" },
  userStatText: {
    fontWeight: "800",
    fontSize: 20,
  },
  userStatContent: {
    color: "gray",
  },
  userBioContainer: {
    width: 200,
  },
  userName: {
    fontWeight: "700",
    fontSize: 18,
  },
  userBio: {},
  actionBtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionBtn: { borderRadius: 10 },
  storyHightlightContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hightlightContainer: {
    display: "flex",
    flexDirection: "row",
  },
  hightlightItem: {
    width: 70,
    height: 70,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 10,
  },
  popOverTitle: {
    fontSize: 17,
  },
});
export default Profile;

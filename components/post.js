import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Menu,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
} from "react-native-paper";
function Post() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isHeartIconActive, setIsHeartIconActive] = useState(false);
  const [isPostIconActive, setIsPostIconActive] = useState(false);
  const [isCommentIconActive, setIsCommentIconActive] = useState(false);
  const [isTagIconActive, setIsTagIconActive] = useState(false);

  const styles = StyleSheet.create({
    postHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      padding: 8,
      borderColor: "gray",
      user: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        username: {
          fontWeight: "700",
          marginLeft: 10,
          fontSize: 16,
        },
      },
    },
    imageContainer: {
      width: "100%",
      height: undefined,
      aspectRatio: 1,
    },
    postActionContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 5,
      paddingBottom: 5,
    },
    postActionFirstContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    postActionIcon: {
      marginLeft: 10,
    },
    commentContainer: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      comment: { fontWeight: "700" },
    },
    container: {
      flex: 1,
    },
  });

  // handle double tap
  let lastPress = 0;
  const onDoubleTap = (e) => {
    const time = new Date().getTime();
    const delta = time - lastPress;
    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      setIsHeartIconActive(true);
    }
    lastPress = time;
  };

  return (
    <>
      <View>
        <View style={styles.postHeader}>
          <View style={styles.postHeader.user}>
            <Avatar.Image
              size={38}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
              }}
            />
            <Text style={styles.postHeader.user.username}>user001.py</Text>
          </View>
          <Ionicons
            onPress={() => setIsMenuVisible(!isMenuVisible)}
            name="ellipsis-vertical"
            size={20}
          />
        </View>
        {/* menu action modal */}
        {/* <Provider>
          <Portal>
            <Modal
              visible={isMenuVisible}
              onDismiss={() => setIsMenuVisible(false)}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => setIsMenuVisible(true)}
          >
            Show
          </Button>
        </Provider> */}
        <View onStartShouldSetResponder={onDoubleTap}>
          <Image
            style={styles.imageContainer}
            source={{ uri: "https://via.placeholder.com/300" }}
          />
        </View>
        <View style={styles.postActionContainer}>
          <View style={styles.postActionFirstContainer}>
            <Ionicons
              onPress={() => setIsHeartIconActive(!isHeartIconActive)}
              style={[
                styles.postActionIcon,
                { color: isHeartIconActive ? "red" : null },
              ]}
              size={30}
              name={`${isHeartIconActive ? "heart" : "heart-outline"}`}
            />
            <Ionicons
              onPress={() => setIsPostIconActive(!isPostIconActive)}
              style={styles.postActionIcon}
              size={28}
              name={`paper-plane-outline`}
            />
            <Fontisto
              onPress={() => setIsCommentIconActive(!isCommentIconActive)}
              style={styles.postActionIcon}
              size={24}
              name={"comment"}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              onPress={() => setIsTagIconActive(!isTagIconActive)}
              style={[
                styles.postActionIcon,
                { transform: [{ rotate: "90deg" }], marginRight: 5 },
              ]}
              size={30}
              name={`${isTagIconActive ? "label" : "label-outline"}`}
            />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.commentContainer.comment}>356 likes</Text>
          <Text>
            this is the comment of the user ksldf lasldkf jsad jfl;sjd lskj dflk
            jsaklfj sdjkf
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.postHeader}>
          <View style={styles.postHeader.user}>
            <Avatar.Image
              size={38}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
              }}
            />
            <Text style={styles.postHeader.user.username}>user001.py</Text>
          </View>
          <Ionicons
            onPress={() => setIsMenuVisible(!isMenuVisible)}
            name="ellipsis-vertical"
            size={20}
          />
        </View>
        {/* menu action modal */}
        {/* <Provider>
          <Portal>
            <Modal
              visible={isMenuVisible}
              onDismiss={() => setIsMenuVisible(false)}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => setIsMenuVisible(true)}
          >
            Show
          </Button>
        </Provider> */}
        <View onStartShouldSetResponder={onDoubleTap}>
          <Image
            style={styles.imageContainer}
            source={{ uri: "https://via.placeholder.com/300" }}
          />
        </View>
        <View style={styles.postActionContainer}>
          <View style={styles.postActionFirstContainer}>
            <Ionicons
              onPress={() => setIsHeartIconActive(!isHeartIconActive)}
              style={[
                styles.postActionIcon,
                { color: isHeartIconActive ? "red" : null },
              ]}
              size={28}
              name={`${isHeartIconActive ? "heart" : "heart-outline"}`}
            />
            <Ionicons
              onPress={() => setIsPostIconActive(!isPostIconActive)}
              style={styles.postActionIcon}
              size={28}
              name={`paper-plane-outline`}
            />
            <Fontisto
              onPress={() => setIsCommentIconActive(!isCommentIconActive)}
              style={styles.postActionIcon}
              size={24}
              name={"comment"}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              onPress={() => setIsTagIconActive(!isTagIconActive)}
              style={[
                styles.postActionIcon,
                { transform: [{ rotate: "90deg" }], marginRight: 5 },
              ]}
              size={30}
              name={`${isTagIconActive ? "label" : "label-outline"}`}
            />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.commentContainer.comment}>356 likes</Text>
          <Text>
            this is the comment of the user ksldf lasldkf jsad jfl;sjd lskj dflk
            jsaklfj sdjkf
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.postHeader}>
          <View style={styles.postHeader.user}>
            <Avatar.Image
              size={38}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
              }}
            />
            <Text style={styles.postHeader.user.username}>user001.py</Text>
          </View>
          <Ionicons
            onPress={() => setIsMenuVisible(!isMenuVisible)}
            name="ellipsis-vertical"
            size={20}
          />
        </View>
        {/* menu action modal */}
        {/* <Provider>
          <Portal>
            <Modal
              visible={isMenuVisible}
              onDismiss={() => setIsMenuVisible(false)}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => setIsMenuVisible(true)}
          >
            Show
          </Button>
        </Provider> */}
        <View onStartShouldSetResponder={onDoubleTap}>
          <Image
            style={styles.imageContainer}
            source={{ uri: "https://via.placeholder.com/300" }}
          />
        </View>
        <View style={styles.postActionContainer}>
          <View style={styles.postActionFirstContainer}>
            <Ionicons
              onPress={() => setIsHeartIconActive(!isHeartIconActive)}
              style={[
                styles.postActionIcon,
                { color: isHeartIconActive ? "red" : null },
              ]}
              size={28}
              name={`${isHeartIconActive ? "heart" : "heart-outline"}`}
            />
            <Ionicons
              onPress={() => setIsPostIconActive(!isPostIconActive)}
              style={styles.postActionIcon}
              size={28}
              name={`paper-plane-outline`}
            />
            <Fontisto
              onPress={() => setIsCommentIconActive(!isCommentIconActive)}
              style={styles.postActionIcon}
              size={24}
              name={"comment"}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              onPress={() => setIsTagIconActive(!isTagIconActive)}
              style={[
                styles.postActionIcon,
                { transform: [{ rotate: "90deg" }], marginRight: 5 },
              ]}
              size={30}
              name={`${isTagIconActive ? "label" : "label-outline"}`}
            />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.commentContainer.comment}>356 likes</Text>
          <Text>
            this is the comment of the user ksldf lasldkf jsad jfl;sjd lskj dflk
            jsaklfj sdjkf
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.postHeader}>
          <View style={styles.postHeader.user}>
            <Avatar.Image
              size={38}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
              }}
            />
            <Text style={styles.postHeader.user.username}>user001.py</Text>
          </View>
          <Ionicons
            onPress={() => setIsMenuVisible(!isMenuVisible)}
            name="ellipsis-vertical"
            size={20}
          />
        </View>
        {/* menu action modal */}
        {/* <Provider>
          <Portal>
            <Modal
              visible={isMenuVisible}
              onDismiss={() => setIsMenuVisible(false)}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
          <Button
            style={{ marginTop: 30 }}
            onPress={() => setIsMenuVisible(true)}
          >
            Show
          </Button>
        </Provider> */}
        <View onStartShouldSetResponder={onDoubleTap}>
          <Image
            style={styles.imageContainer}
            source={{ uri: "https://via.placeholder.com/300" }}
          />
        </View>
        <View style={styles.postActionContainer}>
          <View style={styles.postActionFirstContainer}>
            <Ionicons
              onPress={() => setIsHeartIconActive(!isHeartIconActive)}
              style={[
                styles.postActionIcon,
                { color: isHeartIconActive ? "red" : null },
              ]}
              size={28}
              name={`${isHeartIconActive ? "heart" : "heart-outline"}`}
            />
            <Ionicons
              onPress={() => setIsPostIconActive(!isPostIconActive)}
              style={styles.postActionIcon}
              size={28}
              name={`paper-plane-outline`}
            />
            <Fontisto
              onPress={() => setIsCommentIconActive(!isCommentIconActive)}
              style={styles.postActionIcon}
              size={24}
              name={"comment"}
            />
          </View>
          <View>
            <MaterialCommunityIcons
              onPress={() => setIsTagIconActive(!isTagIconActive)}
              style={[
                styles.postActionIcon,
                { transform: [{ rotate: "90deg" }], marginRight: 5 },
              ]}
              size={30}
              name={`${isTagIconActive ? "label" : "label-outline"}`}
            />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.commentContainer.comment}>356 likes</Text>
          <Text>
            this is the comment of the user ksldf lasldkf jsad jfl;sjd lskj dflk
            jsaklfj sdjkf
          </Text>
        </View>
      </View>
    </>
  );
}

export default Post;

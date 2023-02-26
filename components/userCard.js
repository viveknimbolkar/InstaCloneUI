import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
function UserCard() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.crossIconContainer}>
          <AntDesignIcon name="close" size={20} />
        </View>
        <Avatar.Image
          size={110}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.followedByText}>
          Followed by shreya.sh, omkar_002 and 3 more
        </Text>
        <Pressable style={styles.followBtn}>
          <Text style={{ color: "white" }}>Follow</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.crossIconContainer}>
          <AntDesignIcon name="close" size={20} />
        </View>
        <Avatar.Image
          size={110}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.followedByText}>
          Followed by shreya.sh, omkar_002 and 3 more
        </Text>
        <Pressable style={styles.followBtn}>
          <Text style={{ color: "white" }}>Follow</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.crossIconContainer}>
          <AntDesignIcon name="close" size={20} />
        </View>
        <Avatar.Image
          size={110}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.followedByText}>
          Followed by shreya.sh, omkar_002 and 3 more
        </Text>
        <Pressable style={styles.followBtn}>
          <Text style={{ color: "white" }}>Follow</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.crossIconContainer}>
          <AntDesignIcon name="close" size={20} />
        </View>
        <Avatar.Image
          size={110}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.followedByText}>
          Followed by shreya.sh, omkar_002 and 3 more
        </Text>
        <Pressable style={styles.followBtn}>
          <Text style={{ color: "white" }}>Follow</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.crossIconContainer}>
          <AntDesignIcon name="close" size={20} />
        </View>
        <Avatar.Image
          size={110}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.followedByText}>
          Followed by shreya.sh, omkar_002 and 3 more
        </Text>
        <Pressable style={styles.followBtn}>
          <Text style={{ color: "white" }}>Follow</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginRight:10,
    marginTop:10,
    padding: 10,
    width: 170,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#b8b8b8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  crossIconContainer: {
    position: "absolute",
    right: 0,
    padding: 5,
  },
  username: {
    fontWeight: "600",
    fontSize: 18,
  },
  followBtn: {
    backgroundColor: "#0080FF",
    width: 130,
    height: 30,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
export default UserCard;

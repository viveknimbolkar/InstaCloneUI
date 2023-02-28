import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";

import { Avatar } from "react-native-paper";
function EditProfile() {
  const [name, setName] = useState("John Doe;");
  const [username, setUsername] = useState("user_001.py");

  return (
    <View style={{ padding: 10 }}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          size={120}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Pressable>
          <Text style={styles.profileEdit}>Edit picture or avatar</Text>
        </Pressable>
      </View>
      <Text style={styles.labels}>Name</Text>
      <TextInput style={styles.input} onChangeText={setUsername} value={name} />
      <Text style={styles.labels}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <View style={styles.linkContainer}>
        <Text style={styles.labels}>Links</Text>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  profileEdit: {
    fontSize: 18,
    marginTop: 10,
    color: "blue",
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    paddingTop: 10,
    fontSize: 16,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labels: {
    fontWeight: "600",
    fontSize: 16,
  },
});
export default EditProfile;

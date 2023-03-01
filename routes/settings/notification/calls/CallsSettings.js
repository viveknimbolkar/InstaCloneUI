import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { List, RadioButton } from "react-native-paper";
function CallsSettings() {
  const [value, setValue] = useState("off");
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.groupHeading}>Video chats</Text>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View style={styles.gropoContainer}>
              <Text>Off</Text>
              <RadioButton value="off" />
            </View>
            <View style={styles.gropoContainer}>
              <Text>From people i follow</Text>
              <RadioButton value="fromPeopleiFollow" />
            </View>
            <View style={styles.gropoContainer}>
              <Text>from everyone</Text>
              <RadioButton value="fromeveryone" />
            </View>
          </RadioButton.Group>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
  },
  groupHeading: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 10,
  },
  gropoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});

export default CallsSettings;

import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

function Story() {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    storyImage: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: "red",
      borderRadius: 50,
      marginRight: 10,
    },
  });
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
        <Image
          style={styles.storyImage}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg",
          }}
        />
      </View>
    </ScrollView>
  );
}

export default Story;

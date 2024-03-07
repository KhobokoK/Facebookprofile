import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={require("./assets/katai.jpg")}
          style={styles.profilePicture}
        />
        <View>
          <Text style={styles.profileName}>Katai Khoboko</Text>
          <Text style={styles.lastPostTime}>2 hours ago</Text>
        </View>
        <Text style={styles.threeDots}>&#8942;</Text>
      </View>

      {/* Post Content */}
      <View style={styles.postContent}>
        <Text style={styles.caption}>
          "Lost in the tranquility of nature's embrace, Where every moment
          whispers a story untold 🌿✨"
        </Text>

        <Image
          source={require("./assets/uploaded_picture.jpg")}
          style={styles.uploadedPicture}
        />
      </View>

      {/* Post Actions */}
      <View style={styles.postActions}>
        <View style={styles.actionItem}>
          <Text>100 likes</Text>
        </View>

        <View style={styles.actionItem}>
          <AntDesign name="like2" size={20} color="lightblue" />
          <Text>Like</Text>
        </View>

        <View style={styles.actionItem}>
          <AntDesign name="message1" size={20} color="black" />
          <Text>Comments</Text>
        </View>
        <View style={styles.actionItem}>
          <AntDesign name="sharealt" size={20} color="black" />
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontWeight: "bold",
  },
  lastPostTime: {
    color: "#777",
  },
  threeDots: {
    fontSize: 20,
    marginLeft: "auto",
  },
  postContent: {
    marginBottom: 10,
  },
  uploadedPicture: {
    width: "100%",
    height: 500,
    marginBottom: 10,
  },
  caption: {
    fontSize: 16,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default App;

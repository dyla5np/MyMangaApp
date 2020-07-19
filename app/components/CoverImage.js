import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colours from "../config/colours";
import MangaName from "./form/MangaName";

import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function CoverImage({image, mangaName, onPress}) {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={{zIndex: 1}}> */}
      <MaterialCommunityIcons
        name='keyboard-backspace'
        size={30}
        color='white'
        style={styles.backIcon}
        onPress={onPress}
      />
      <MaterialCommunityIcons
        name='download-outline'
        size={30}
        color='white'
        style={styles.downloadIcon}
      />
      {/* </TouchableOpacity> */}
      <ImageBackground source={image} style={styles.image} />
      <MangaName label={mangaName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: colours.primary,
  },
  image: {
    zIndex: 0,
    width: "100%",
    height: 275,
  },
  backIcon: {
    position: "absolute",
    zIndex: 1,
    top: 50,
    left: 30,
  },
  downloadIcon: {
    position: "absolute",
    zIndex: 1,
    top: 50,
    right: 30,
  },
});

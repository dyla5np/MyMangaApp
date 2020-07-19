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
import IconButton from "./IconButton";

export default function CoverImage({image, mangaName, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{zIndex: 1}} onPress={onPress}>
        <IconButton
          name='keyboard-backspace'
          size={30}
          style={{top: 50, left: 20}}
        />
      </TouchableOpacity>
      <ImageBackground source={image} style={styles.image} />
      <MangaName label={mangaName} style={{top: 250, right: 50}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: colours.primary,
    flexDirection: "row",
  },
  image: {
    zIndex: 0,
    width: "100%",
    height: 250,
    position: "absolute",
  },
});

import React from "react";
import {StyleSheet, Text, View, Image, ImageBackground} from "react-native";
import colours from "../config/colours";
import MangaName from "./form/MangaName";

export default function CoverImage({image, mangaName}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <MangaName label={mangaName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  image: {
    zIndex: 0,
    width: "100%",
    height: 250,
  },
});

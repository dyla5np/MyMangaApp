import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import colours from "../config/colours";
import Header from "./Header";
import MangaName from "./form/MangaName";
import Author from "./form/Author";

export default function Card({image, mangaName, author}) {
  return (
    <View style={styles.container}>
      <View style={styles.manga}>
        <Image source={image} style={styles.image} />
        <View style={styles.label}>
          <MangaName label={mangaName} />
          <Author label={author} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  manga: {
    width: "100%",
    height: 200,
    backgroundColor: colours.darkgray,
    borderRadius: 15,
    marginTop: 5,
    flexDirection: "row",
    padding: 5,
  },
  image: {
    width: "40%",
    height: 190,
    borderRadius: 15,
  },
  label: {
    padding: 10,
    marginLeft: 5,
    justifyContent: "flex-end",
    // backgroundColor: "blue",
  },
});

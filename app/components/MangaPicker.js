import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
} from "react-native";
import MangaName from "./form/MangaName";
import Author from "./form/Author";

export default function MangaPicker({image, onPress, name, author}) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Image source={image} style={styles.images} />
          <MangaName label={name} />
          <Author label={author} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  images: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
});

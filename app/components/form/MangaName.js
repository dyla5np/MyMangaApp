import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../../config/colours";

export default function MangaName({label, style}) {
  return (
    <View>
      <Text style={[styles.text, style]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 20,
    justifyContent: "center",
    color: "#FFF",
    zIndex: 1,
  },
});

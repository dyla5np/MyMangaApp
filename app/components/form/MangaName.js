import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function MangaName({label}) {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
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
  },
});

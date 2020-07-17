import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../../config/colours";

export default function Chapters() {
  return (
    <View style={styles.container}>
      <Text style={{color: colours.text}}> Chapters </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.primary,
  },
});

import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Author({label, style}) {
  return (
    <View>
      <Text style={[styles.text, style]}> {label} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "300",
    // padding: 15,
    justifyContent: "center",
    color: "#FFF",
    bottom: 10,
    paddingTop: 10,
  },
});

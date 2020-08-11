import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";
import Header from "./Header";

export default function VerticalComponent({style}) {
  return (
    <View style={(styles.container, style)}>
      <Header title={"new"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

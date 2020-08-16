import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";
import Header from "./Header";

export default function VerticalComponent({style}) {
  return (
    <View style={(styles.container, style)}>
      <Header title={"new"} />
      <View style={styles.manga}>
        <Text style={{color: "#fff"}}>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
    padding: 10,
  },
  manga: {
    width: "100%",
    height: 200,
    backgroundColor: colours.darkgray,
    padding: 10,
    borderRadius: 15,
  },
});

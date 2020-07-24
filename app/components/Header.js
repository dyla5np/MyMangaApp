import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";

export default function Header({title}) {
  return <Text style={styles.header}> {title} </Text>;
}

const styles = StyleSheet.create({
  header: {
    color: colours.text,
    fontSize: 30,
    fontWeight: "bold",
  },
});

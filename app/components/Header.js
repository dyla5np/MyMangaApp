import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";

export default function Header({title, style}) {
  return <Text style={[styles.header, style]}> {title} </Text>;
}

const styles = StyleSheet.create({
  header: {
    color: colours.text,
    fontSize: 30,
    fontWeight: "bold",
  },
});

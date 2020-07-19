import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colours from "../config/colours";

export default function IconButton({
  name,
  size,
  style,
  onPress,
  color = colours.text,
}) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colours.primary,
    zIndex: 1,
    opacity: 0.8,
  },
});

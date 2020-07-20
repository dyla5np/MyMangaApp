import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import colours from "../config/colours";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Icon({
  name,
  style,
  onPress,
  size = 30,
  color = colours.text,
}) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={style}
    />
  );
}

const styles = StyleSheet.create({});

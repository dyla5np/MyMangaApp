import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import colours from "../config/colours";
import Header from "./Header";
import Card from "./Card";
import SectionScreen from "./../screens/SectionScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import SectionHeader from "./SectionHeader";

export default function VerticalComponent({
  style,
  data,
  title,
  itemShown = data.length,
}) {
  return (
    <View style={[styles.container, style]}>
      <SectionHeader
        title={title}
        iconName={"arrow-right"}
        style={{marginLeft: 10, marginRight: 10, top: 5}}
      />
      <SectionScreen itemShown={itemShown} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

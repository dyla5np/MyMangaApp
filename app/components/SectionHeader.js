import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Header from "./Header";
import colours from "../config/colours";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function SectionHeader({title, iconName, style}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Section", {name: title})}>
      <View style={[styles.header, style]}>
        <Header title={title} />
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          color={colours.text}
          style={{marginRight: 20, top: 2}}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

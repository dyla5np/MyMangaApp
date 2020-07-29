import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";

import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import CoverImage from "../components/CoverImage";
import Chapters from "./tabs/Chapters";
import Description from "./tabs/Description";
import colours from "../config/colours";
import TabNavigator from "./../navigation/TabNavigator";

export default function PickedManga({navigation}) {
  const route = useRoute();
  return (
    <>
      <CoverImage
        image={route.params.image}
        mangaName={route.params.name}
        style={styles.cover}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TabNavigator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
});

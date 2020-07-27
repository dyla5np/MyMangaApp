import React from "react";
import {StyleSheet, SafeAreaView, FlatList, Screen, Text} from "react-native";

import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import MangaPicker from "./app/components/MangaPicker";
import Favorites from "./app/screens/FavoriteScreen";
import PickedManga from "./app/screens/PickedManga";
import MangaNavigator from "./app/navigation/MangaNavigator";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreen /> */}
      <MangaNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232123",
  },
});

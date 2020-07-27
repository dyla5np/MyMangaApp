import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import PickedManga from "../screens/PickedManga";
import Favorites from "../screens/FavoriteScreen";
import HomeScreen from "./../screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Favorites' component={Favorites} />
      <Stack.Screen name='Picked Manga' component={PickedManga} />
    </Stack.Navigator>
  );
};

export default function mangaNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

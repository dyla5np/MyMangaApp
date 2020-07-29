import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

import PickedManga from "../screens/PickedManga";
import Favorites from "../screens/FavoriteScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import colours from "../config/colours";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' mode='modal'>
      <Stack.Screen name='Discover' component={DiscoverScreen} />
      <Stack.Screen name='Favorites' component={Favorites} />
      <Stack.Screen name='Picked Manga' component={PickedManga} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: "#2a2c33"}}>
      <Tab.Screen
        name='Discover'
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name='apple-safari'
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='heart' color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function mangaNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

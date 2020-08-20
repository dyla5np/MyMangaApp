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
import SectionScreen from "./../screens/SectionScreen";
import {color} from "react-native-reanimated";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      mode='modal'
      screenOptions={{
        headerStyle: {
          backgroundColor: colours.darkblue,
        },
        headerTintColor: colours.text,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
        },
      }}>
      <Stack.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name='Favorites' component={Favorites} />
      <Stack.Screen
        name='Section'
        component={SectionScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name='Picked Manga'
        component={PickedManga}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: colours.darkblue}}>
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

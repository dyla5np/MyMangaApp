import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";

import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Chapters from "../screens/tabs/Chapters";
import Description from "../screens/tabs/Description";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {backgroundColor: colours.primary},
        labelStyle: {color: colours.text, fontWeight: "bold"},
        indicatorStyle: {
          backgroundColor: colours.text,
        },
      }}>
      <Tab.Screen name='Description' component={Description} />
      <Tab.Screen name='Chapters' component={Chapters} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

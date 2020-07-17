import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import CoverImage from "../components/CoverImage";
import Chapters from "./tabs/Chapters";
import Description from "./tabs/Description";
import colours from "../config/colours";
import {TouchableOpacity} from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
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
};

export default function PickedManga({image, mangaName}) {
  return (
    <>
      <CoverImage image={image} mangaName={mangaName} />
      <View style={styles.container}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
  },
});

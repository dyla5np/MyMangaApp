import React from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";

import {NavigationContainer, useRoute} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import CoverImage from "../components/CoverImage";
import Chapters from "./tabs/Chapters";
import Description from "./tabs/Description";
import colours from "../config/colours";

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
    flex: 0.7,
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import colours from "../config/colours";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.updates}>
        <Header title='New Updates' />
        <View style={{flexDirection: "row"}}>
          <ScrollView horizontal>
            <ImageBackground
              source={require("../../assets/manga-images/bleach.jpg")}
              style={styles.image}
            />
            <ImageBackground
              source={require("../../assets/manga-images/dr-stone.jpg")}
              style={styles.image}
            />
            <ImageBackground
              source={require("../../assets/manga-images/bleach.jpg")}
              style={styles.image}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  updates: {
    flex: 0.3,
    // backgroundColor: "red",
    width: "100%",
    padding: 10,
    top: 50,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
    marginTop: 10,
  },
});

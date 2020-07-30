import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colours from "../config/colours";
import Header from "../components/Header";
import MangaPicker from "../components/MangaPicker";
import MangaName from "../components/form/MangaName";
import Author from "../components/form/Author";
import HorizontalComponent from "../components/HorizontalComponent";

const manga = [
  {
    id: 1,
    name: "Bleach",
    image: require("../../assets/manga-images/bleach.jpg"),
    author: "Tite Kubo",
  },
  {
    id: 2,
    name: "Dr Stone",
    image: require("../../assets/manga-images/dr-stone.jpg"),
    author: "Boichi, Riichiro Inagaki",
  },
  {
    id: 3,
    name: "One Piece",
    image: require("../../assets/manga-images/one-piece.jpg"),
    author: "Eiichiro Oda",
  },
  {
    id: 4,
    name: "One Punch",
    image: require("../../assets/manga-images/one-punch.jpg"),
    author: "ONE, Yusuke Murata",
  },
  {
    id: 5,
    name: "Black Clover",
    image: require("../../assets/manga-images/black-clover.jpg"),
    author: "Yuki Tabata",
  },
  {
    id: 6,
    name: "Fairy Tail",
    image: require("../../assets/manga-images/fairy-tail.jpg"),
    author: "Hiro Mashima",
  },
  {
    id: 7,
    name: "Dragon Ball",
    image: require("../../assets/manga-images/dragon-ball.jpg"),
    author: "Akira Toriyama",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.features}>
          <HorizontalComponent data={manga} name={"Features"} />
        </View>
        <View style={styles.updates}>
          <HorizontalComponent data={manga} name={"Updates"} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colours.primary,
  },
  features: {
    flex: 1,
    width: "100%",
    padding: 10,
    top: 50,
    backgroundColor: "green",
  },
  updates: {
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "red",
    top: 50,
  },
});

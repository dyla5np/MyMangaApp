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
  Image,
} from "react-native";
import colours from "../config/colours";
import Header from "../components/Header";
import MangaPicker from "../components/MangaPicker";
import MangaName from "../components/form/MangaName";
import Author from "../components/form/Author";
import HorizontalComponent from "../components/HorizontalComponent";
import VerticalComponent from "../components/VerticalComponent";
import Card from "../components/Card";

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
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled>
        <HorizontalComponent
          data={manga}
          name={"Features"}
          style={{marginTop: 50}}
        />
        <HorizontalComponent
          data={manga}
          name={"Updates"}
          // style={{backgroundColor: "blue"}}
        />
        <VerticalComponent data={manga} itemShown={3} />
      </ScrollView>
    </SafeAreaView>
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
});

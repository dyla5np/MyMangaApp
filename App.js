import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import MangaPicker from "./app/components/MangaPicker";
import Favorites from "./app/screens/FavoriteScreen";
import PickedManga from "./app/screens/PickedManga";

const manga = [
  {
    id: 1,
    name: "Bleach",
    image: require("./assets/manga-images/bleach.jpg"),
    author: "Tite Kubo",
  },
  {
    id: 2,
    name: "Dr Stone",
    image: require("./assets/manga-images/dr-stone.jpg"),
    author: "Boichi, Riichiro Inagaki",
  },
  {
    id: 3,
    name: "One Piece",
    image: require("./assets/manga-images/one-piece.jpg"),
    author: "Eiichiro Oda",
  },
  {
    id: 4,
    name: "One Punch",
    image: require("./assets/manga-images/one-punch.jpg"),
    author: "ONE, Yusuke Murata",
  },
  {
    id: 5,
    name: "Black Clover",
    image: require("./assets/manga-images/black-clover.jpg"),
    author: "Yuki Tabata",
  },
  {
    id: 6,
    name: "Fairy Tail",
    image: require("./assets/manga-images/fairy-tail.jpg"),
    author: "Hiro Mashima",
  },
  {
    id: 7,
    name: "Dragon Ball",
    image: require("./assets/manga-images/dragon-ball.jpg"),
    author: "Akira Toriyama",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Favorites data={manga} /> */}
      <PickedManga
        image={require("./assets/manga-images/one-punch.jpg")}
        mangaName='One Punch'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232123",
  },
});

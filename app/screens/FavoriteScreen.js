import React, {useState} from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";

import MangaPicker from "./../components/MangaPicker";
import PickedManga from "./PickedManga";
import colours from "../config/colours";

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

export default function Favorites({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={manga}
        keyExtractor={(manga) => manga.id.toString()}
        renderItem={({item}) => (
          <MangaPicker
            image={item.image}
            name={item.name}
            author={item.author}
            onPress={() =>
              navigation.navigate("Picked Manga", {
                image: item.image,
                name: item.name,
              })
            }
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
    paddingTop: 60,
  },
});

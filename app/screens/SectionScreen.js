import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colours from "../config/colours";
import Header from "./../components/Header";
import Card from "./../components/Card";
import SectionHeader from "../components/SectionHeader";
import {useNavigation} from "@react-navigation/native";

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

export default function SectionScreen({
  style,
  data,
  title,
  itemShown = manga.length,
}) {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.container, style]}>
        {manga.slice(0, itemShown).map((item, i) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Picked Manga", {
                  image: item.image,
                  name: item.name,
                })
              }
              key={i}>
              <Card
                image={item.image}
                mangaName={item.name}
                author={item.author}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // backgroundColor: "green",
  },
  scrollView: {
    backgroundColor: colours.primary,
  },
});

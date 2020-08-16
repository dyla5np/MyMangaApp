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
      <ScrollView>
        <HorizontalComponent
          data={manga}
          name={"Features"}
          style={{backgroundColor: "red", marginTop: 50}}
        />
        <HorizontalComponent
          data={manga}
          name={"Updates"}
          style={{backgroundColor: "blue"}}
        />
        <View style={styles.new}>
          <Header title={"New"} />
          <View style={styles.manga}>
            <Image
              source={require("../../assets/manga-images/bleach.jpg")}
              style={styles.image}
            />
            <View style={styles.label}>
              <MangaName label={"Bleach"} />
              <Author label={"Tite Kubo"} />
            </View>
          </View>
        </View>
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
  new: {
    flex: 1,
    padding: 5,
    backgroundColor: "green",
  },
  manga: {
    width: "100%",
    height: 200,
    backgroundColor: colours.darkgray,
    borderRadius: 15,
    marginTop: 5,
    flexDirection: "row",
    padding: 5,
  },
  image: {
    width: "40%",
    height: 190,
    borderRadius: 15,
  },
  label: {
    padding: 10,
    marginLeft: 5,
    justifyContent: "flex-end",
    // backgroundColor: "blue",
  },
});

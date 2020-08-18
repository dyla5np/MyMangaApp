import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";
import Header from "./Header";
import Card from "./Card";

export default function VerticalComponent({style, data, itemShown}) {
  return (
    <View style={[styles.container, style]}>
      <Header title={"New"} style={{marginLeft: 5}} />
      {data.slice(0, itemShown).map((item, i) => {
        return (
          <Card
            image={item.image}
            mangaName={item.name}
            author={item.author}
            key={i}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // backgroundColor: "green",
  },
});

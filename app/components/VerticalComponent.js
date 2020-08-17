import React from "react";
import {StyleSheet, Text, View} from "react-native";
import colours from "../config/colours";
import Header from "./Header";
import Card from "./Card";
import {FlatList} from "react-native-gesture-handler";

export default function VerticalComponent({style, data}) {
  return (
    <View style={[styles.container, style]}>
      <Header title={"New"} style={{marginLeft: 5}} />
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({item}) => (
          <Card image={item.image} mangaName={item.name} author={item.author} />
        )}
      />
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

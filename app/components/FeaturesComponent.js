import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MangaName from "./form/MangaName";
import Author from "./form/Author";

export default function FeaturesComponent({data, navigation}) {
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
          style={{
            flexDirection: "column",
          }}
          onPress={() =>
            navigation.navigate("Picked Manga", {
              image: item.image,
              name: item.name,
            })
          }>
          <ImageBackground source={item.image} style={styles.image} />
          <MangaName label={item.name} />
          <Author label={item.author} />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 10,
    marginTop: 10,
  },
});

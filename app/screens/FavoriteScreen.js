import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";

import MangaPicker from "./../components/MangaPicker";
import colours from "../config/colours";

export default function Favorites({data}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(manga) => manga.id.toString()}
        renderItem={({item}) => (
          <MangaPicker
            image={item.image}
            name={item.name}
            author={item.author}
            onPress={() => console.log(item)}
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
  },
});

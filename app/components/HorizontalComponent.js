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
import {useNavigation} from "@react-navigation/native";
import Header from "./Header";

export default function FeaturesComponent({data, name, style}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <Header title={name} />
      <View style={{flexDirection: "row"}}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
    marginTop: 10,
  },
});

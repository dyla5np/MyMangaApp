import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colours from "../config/colours";
import MangaName from "./form/MangaName";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import IconButton from "./IconButton";
import Icon from "./Icon";

export default function CoverImage({image, mangaName, onPress}) {
  const [name, setName] = useState(null);
  const [download, setDownload] = useState(null);

  const nameToggle = () => setName(!name);
  const downloadToggle = () => setDownload(!download);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          zIndex: 1,
          width: 50,
          height: 50,
          top: 70,
          left: 20,
          position: "absolute",
        }}>
        <IconButton
          name='keyboard-backspace'
          size={30}
          style={{position: "absolute"}}
          onPress={onPress}
        />
      </TouchableOpacity>
      <ImageBackground source={image} style={styles.image} />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 40,
          alignItems: "center",
          justifyContent: "space-between",
          top: 250,
        }}>
        <MangaName label={mangaName} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "20%",
            marginRight: 20,
            top: 5,
          }}>
          {!name ? (
            <Icon name='heart-outline' onPress={nameToggle} />
          ) : (
            <Icon name='heart' onPress={nameToggle} />
          )}
          {!download ? (
            <Icon name='download-outline' onPress={downloadToggle} size={35} />
          ) : (
            <Icon name='download' onPress={downloadToggle} size={35} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: colours.primary,
    flexDirection: "row",
  },
  image: {
    zIndex: 0,
    width: "100%",
    height: 250,
    position: "absolute",
  },
});

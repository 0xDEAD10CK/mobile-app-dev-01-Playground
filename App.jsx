import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const placeholderImg = require("./assets/imgs/pikachu.png");

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const pickImageAsync = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: "Images",
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
    } else {
      alert("You did not select any Pokémon image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          selectedImg={selectedImg} 
          placeholderImgSrc={placeholderImg} 
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a Pokémon"
          onPress={pickImageAsync}
        />
        <Button label="Use this Pokémon" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

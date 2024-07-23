import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const placeholderImg = require("./assets/imgs/pikachu.png");

export default App = () => {
  const pickImageAsync = async () => {
    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // You can view the result object in the
      // debugger. Press J to open the debugger
      console.log(result);
    } else {
      alert("You did not select any Pokémon image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImgSrc={placeholderImg} />
        </View>
        <StatusBar style="auto" />
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
};

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

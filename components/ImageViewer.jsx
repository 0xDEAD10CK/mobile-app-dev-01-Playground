import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const ImageViewer = ({ selectedImg, placeholderImgSrc }) => {
  // Check if the selected image exists; if not, use the placeholder
  const imgSrc = selectedImg ? { uri: selectedImg } : placeholderImgSrc;

  return (
    <View style={styles.container}>
      {imgSrc ? (
        <Image source={imgSrc} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text>No image available</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
    },
});

export default ImageViewer;
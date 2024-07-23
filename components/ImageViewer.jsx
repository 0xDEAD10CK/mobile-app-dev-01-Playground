import { StyleSheet, Image } from "react-native";

const ImageViewer = (props) => {
    return (
        <Image source={props.placeholderImgSrc} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
    },
});

export default ImageViewer;
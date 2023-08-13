import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: SIZES.width *0.4,
        height: SIZES.height *0.3,
        marginEnd: SIZES.small,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
    },
    imageContainer: {
        flex: 1,
        width: SIZES.width *0.37,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
    },
    image: {
        aspectRatio: 1,
        resizeMode: "cover",
    },
    details: {
        padding: SIZES.small,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,
        marginBottom: 2
    },
    description: {
        fontFamily: "regular",
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    price: {
        fontFamily: "bold",
        fontSize: SIZES.medium,
    },
    addBtn: {
        // padding: SIZES.small,
        position: "absolute",
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    }
});

export default styles;
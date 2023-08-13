import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginBottom: -SIZES.xSmall,
        marginTop: SIZES.medium,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headingTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.xLarge - 2,
    }
});

export default styles;
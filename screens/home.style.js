import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appBarText: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999,
    },
    cartnNumber: {
        fontFamily: 'regular',
        fontSize: 10,
        fontWeight: '600',
        color: COLORS.lightWhite
    }
});

export default styles;
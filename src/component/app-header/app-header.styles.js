import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '55%',
        padding: 5,
        borderRadius: 6,
    }
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        height: 165,
        width: 105,
        borderWidth: 4,
        borderColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 20,
        borderRadius: 60,
        marginHorizontal: 5
    },
    imageCardBox: {
        backgroundColor: '#ffffff',
        borderRadius: 50
    },
    imageCard: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 50
    },
    titleCard: {
        fontSize: 16,
        fontWeight: '600'
    }
})
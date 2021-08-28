import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        height: 120,
        width: '95%',
        borderRadius: 10,
        elevation: 3,
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 17,
        color: '#1682BD'
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '80%'
    },
    cardService: {
        width: '50%'
    },
    cardInfo: {
        width: '50%'
    },
    textInfo: {
        color: '#1682BD',
        textAlign: 'center'
    },
    line: {
        borderWidth: 1,
        borderColor: '#464646'
    }
})
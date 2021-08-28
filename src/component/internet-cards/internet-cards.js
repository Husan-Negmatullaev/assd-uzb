import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './internet-cards.style'

const InternetCards = ({service}) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{service.title}</Text>

            <View style={styles.cardBody}>
                <View style={styles.cardService}>
                    <Text>{service.sum}</Text>
                    <Text>{service.traffic}</Text>
                    <Text>{service.calendar}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.cardInfo}>
                    <Text style={styles.textInfo}>{service.code}</Text>
                </View>
            </View>
        </View>
    )
}

export default InternetCards
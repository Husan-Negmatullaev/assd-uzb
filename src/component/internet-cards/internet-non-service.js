import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './internet-cards.style'

const InternetNonService = () => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>3000 MB NON-STOP</Text>

            <View style={styles.cardBody}>
                <View style={styles.cardService}>
                    <Text>24 000 сум Стоимость со 2-го по следующие месяцы 21600 сум 3000 MB</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.cardInfo}>
                    <Text style={styles.textInfo}>*141*10074*25648#</Text>
                </View>
            </View>
        </View>
    )
}

export default InternetNonService
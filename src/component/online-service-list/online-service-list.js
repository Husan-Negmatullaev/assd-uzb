import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './online-service-list.style'
import { AntDesign } from '@expo/vector-icons';

const OnlineList = ({service, backColor}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.card}>
            <View style={[styles.iconBox, {backgroundColor: backColor}]}>
                {service.icon}
            </View>
            <View>
                <Text style={styles.cardText}>{service.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OnlineList
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './modem-service-list.style'

const ServiceList = ({item, changeService}) => {
    console.log('Service', item.active);
    return (
        <TouchableOpacity 
            activeOpacity={1}
            onPress={() => changeService(item.id)}
            style={[styles.card, {backgroundColor: item.active ? item.backColor : '#ffffff'}]}
        >
            <View style={[styles.imageCardBox]}>
                <Image source={item.image} style={styles.imageCard} />
            </View>
            <View>
                <Text 
                    style={[styles.titleCard, {color: item.active ? '#ffffff' : '#000000'}]}
                >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ServiceList
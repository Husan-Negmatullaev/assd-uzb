import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './internet-packages.style'

const InternetPackages = ({ service }) => {
    return (
        <View style={styles.navContainer}>
            <FlatList data={service} renderItem={({item}) => {
                return (
                    <View style={styles.navItem}>
                        <Text>{item.title}</Text>
                    </View>
                )
            }} 
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            />
        </View>
    )
}

export default InternetPackages
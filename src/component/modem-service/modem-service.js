import React from 'react'
import {View, FlatList} from 'react-native'
import ServiceList from '../modem-service-list'
import {styles} from './modem-service.style'

const ModemService = ({service, changeService}) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={service}
                renderItem={({item}) => <ServiceList changeService={changeService} item={item} />}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={false}
            />
        </View>
    )
}

export default ModemService
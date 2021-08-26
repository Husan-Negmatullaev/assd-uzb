import React from 'react'
import { FlatList, View } from 'react-native'
import OnlineList from '../online-service-list/online-service-list'
import { styles } from './online-service.style'

const OnlineService = ({service, backColor}) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={service}
                renderItem={({item}) => <OnlineList backColor={backColor} service={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
            />
        </View>
    )
}

export default OnlineService
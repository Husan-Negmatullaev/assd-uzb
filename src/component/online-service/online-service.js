import React from 'react'
import { FlatList, View } from 'react-native'
import OnlineList from '../online-service-list/online-service-list'
import { styles } from './online-service.style'
import { useNavigation } from '@react-navigation/native';

const OnlineService = ({service, backColor}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <FlatList 
                data={service}
                renderItem={({item}) => <OnlineList navigation={navigation} backColor={backColor} service={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
            />
        </View>
    )
}

export default OnlineService
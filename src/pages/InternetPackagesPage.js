import React, { useLayoutEffect } from 'react'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import InternetCards from '../component/internet-cards/internet-cards'
import InternetPackages from '../component/internet-packages'
import PrimaryButton from '../component/UI/primary-button'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function InternetPackagesPage({ navigation, route }) {
    
    const { backColor } = route.params

    const nav = [
        {id: 1, title: 'Ежемесячные пакеты'},
        {id: 2, title: 'Ежедневные пакеты'},
        {id: 3, title: 'Ночной интернет'},
        {id: 4, title: 'Интернет пакеты для TAS-IX'},
        {id: 5, title: 'Интернет non-stop'},
        {id: 6, title: 'Интернет пакеты для абонентов ТП "Constructor"'},
    ]

    const service = [
        {id: 1, title: '500 MB', sum: '10 000 сум', traffic: '500 MB', calendar: '30 дней', code: '*141*10074*25648#'},
        {id: 2, title: '500 MB', sum: '10 000 сум', traffic: '500 MB', calendar: '30 дней', code: '*141*10074*25648#'},
        {id: 3, title: '500 MB', sum: '10 000 сум', traffic: '500 MB', calendar: '30 дней', code: '*141*10074*25648#'},
        {id: 4, title: '500 MB', sum: '10 000 сум', traffic: '500 MB', calendar: '30 дней', code: '*141*10074*25648#'},
        {id: 5, title: '500 MB', sum: '10 000 сум', traffic: '500 MB', calendar: '30 дней', code: '*141*10074*25648#'},
        {id: 6, title: '500 MB', sum: '10 000 сум', traffic: '500 MB', calendar: '30 дней', code: '*141*10074*25648#'},
    ]

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Интернет пакеты',
            headerStyle: { backgroundColor: backColor },
            headerTintColor: '#fff',
            headerRight: () => (
                <TouchableOpacity
                  onPress={() => alert('Info Menu Clicked')}
                  style={{marginRight: 10}}>
                  <MaterialCommunityIcons name="information-outline" size={30} color="#ffffff" />
                </TouchableOpacity>
            ),
        })
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: '#E5E5E5', justifyContent: 'space-between'}}>
            <View style={{height: '8%', marginTop: 30}}>
                <InternetPackages service={nav} />
            </View>
            <View style={{height: '75%', alignItems: 'center'}}>
                <FlatList contentContainerStyle={{alignItems: 'center'}} data={service} renderItem={({item}) => {
                   return <InternetCards service={item} />
                }} 
                keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={{height: '10%', justifyContent: 'center', alignItems: 'center'}}>
                <PrimaryButton backColor="#1284C6" text="Проверка остатка трафика" />
            </View>
        </View>
    )
}

export default InternetPackagesPage
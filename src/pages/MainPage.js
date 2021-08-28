import React, { Component, useState } from 'react'
import {View} from 'react-native'
import AppHeader from '../component/app-header'
import ModemService from '../component/modem-service'
import OnlineService from '../component/online-service'
import { AntDesign, MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

export default class MainPage extends Component {

    state = {
        modem: [
            {id: 1, title: 'Uzmobile', image: require('../assets/image/uzmobile.jpg'), backColor: '#01B4FF', active: true},
            {id: 2, title: 'Perfectum', image: require('../assets/image/perfectum.png'), backColor: '#FF5E12', active: false},
            {id: 3, title: 'Beeline', image: require('../assets/image/beeline.png'), backColor: '#FCC400', active: false},
            {id: 4, title: 'Mobiuz', image: require('../assets/image/mobiuz.png'), backColor: '#E62229', active: false},
            {id: 5, title: 'Ucell', image: require('../assets/image/ucell.png'), backColor: '#652D86', active: false},
        ],

        service: [
            {id: 1, title: 'ИНТЕРНЕТ ПАКЕТЫ', icon: <AntDesign name="earth" size={30} color="#ffffff" />, backColor: '#01B4FF', navigatePage: 'internet-packages'},
            {id: 2, title: 'КОДЫ USSD', icon: <MaterialCommunityIcons name="currency-sign" size={30} color="#ffffff" />, backColor: '#01B4FF', navigatePage: 'internet-packages'},
            {id: 3, title: 'ТАРИФНЫЕ ПЛАНЫ', icon: <Feather name="credit-card" size={30} color="#ffffff" />, backColor: '#01B4FF', navigatePage: 'internet-packages'},
            {id: 4, title: 'УСЛУГИ', icon: <MaterialCommunityIcons name="router-network" size={30} color="#ffffff" />, backColor: '#01B4FF', navigatePage: 'internet-packages'},
            {id: 5, title: 'СМС ПАКЕТЫ', icon: <Ionicons name="chatbubble-outline" size={30} color="#ffffff" />, backColor: '#01B4FF', navigatePage: 'internet-packages'},
            {id: 6, title: 'МИНУТ', icon: <Feather name="clock" size={30} color="#ffffff" />, backColor: '#01B4FF', navigatePage: 'internet-packages'},
        ],

        backColor: '#01B4FF'
    }

    changeServiceModem = (id) => {
        this.clearActiveModem()
        this.setState(({modem}) => {
            const idx = modem.findIndex(el => el.id === id)
            const oldItem = modem[idx]
            
            const newItem = {
                ...oldItem, active: true
            }

            const getColor = newItem.backColor

            const newArr = [
                ...modem.slice(0, idx),
                newItem,
                ...modem.slice(idx + 1)
            ]

            return {
                modem: newArr,
                backColor: getColor
            }
        })
    }

    // NEED TO CHANGE

    clearActiveModem = () => {
        this.setState(({modem}) => {
            const newArr = modem.map(item => item.active = false)
            console.log(newArr);
        })
    }

    // NEED TO CHANGE
    
    render() {
        const { modem, service, backColor } = this.state

        return (
            <View style={{flex: 1, backgroundColor: '#F7F8F8'}}>
                <View style={{flex: 1}}>
                    <AppHeader backColor={backColor} />
                </View>
                <View style={{flex: 2, transform: [
                    {translateY: -30}
                ]}}>
                    <ModemService changeService={this.changeServiceModem} service={modem} />
                </View>
                <View style={{flex: 3}}>
                    <OnlineService backColor={backColor} service={service} />
                </View>
            </View>
        )
    }
}
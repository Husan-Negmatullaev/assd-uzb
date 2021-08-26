import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './app-header.styles'
import { FontAwesome, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const AppHeader = ({ backColor }) => {
    console.log(backColor);
    return (
        <View style={[styles.header, {backgroundColor: backColor}]}>
            <TouchableOpacity>
                <FontAwesome name="bars" size={30} color="#ffffff" />
            </TouchableOpacity>
            <View style={[styles.iconBox, {backgroundColor: backColor}]}>
                <TouchableOpacity>
                    <Feather name="credit-card" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="barschart" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="filter" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="sharealt" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="telegram" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="bell" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppHeader
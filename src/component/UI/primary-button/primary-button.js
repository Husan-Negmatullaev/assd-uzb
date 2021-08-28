import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const PrimaryButton = ({text, backColor, ...props}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} {...props} style={[styles.button, {backgroundColor: backColor}]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton
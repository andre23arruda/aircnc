import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import { getApi } from '../../services/api'


function Booking() {

    const navigation = useNavigation()


 	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg }/>
                <Text style={ styles.headerText }>
                    Total de <Text style={ styles.headerTextBold }>0 spots</Text>
                </Text>
            </View>

            <Text style={ styles.title }>Bem-vindo!</Text>
            <Text style={ styles.description }>Escolha um dos casos abaixo e salve o dia.</Text>


        </View>
  	)
}

export default Booking

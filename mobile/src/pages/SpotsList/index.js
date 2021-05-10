import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/core'
import { getApi } from '../../services/api'
import Spots from '../../components/Spots'

function SpotsList() {

    const navigation = useNavigation()

    const route = useRoute()
    const userParams = route.params
    console.log(userParams)

 	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image style={ styles.imgLogo } source={ logoImg }/>

                <Spots props={ userParams } />

            </View>


        </View>
  	)
}

export default SpotsList

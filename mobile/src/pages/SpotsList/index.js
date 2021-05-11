import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/core'
import Spots from '../../components/Spots'

function SpotsList() {

    const navigation = useNavigation()

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    const route = useRoute()
    const userParams = route.params
    const techs = userParams.techs

 	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <TouchableOpacity
                    style={ styles.headerBackButton }
                    onPress={ navigateToLogin }
                >
					<Feather name="chevron-left" size={ 28 } color="#E02041"/>
				</TouchableOpacity>

                <Image style={ styles.imgLogo } source={ logoImg }/>
            </View>

            <View style={ styles.spotsList }>
                <ScrollView>
                    {techs.map(tech => <Spots key={ tech } tech={ tech } userParams={ userParams } />)}
                </ScrollView>
            </View>

        </View>
  	)
}

export default SpotsList

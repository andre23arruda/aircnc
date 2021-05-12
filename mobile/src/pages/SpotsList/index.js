import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { useNavigation, useRoute, useIsFocused  } from '@react-navigation/core'
import Spots from '../../components/Spots'
import { getApi } from '../../services/api'


function SpotsList() {

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const route = useRoute()
    const userParams = route.params
    const techs = userParams.techs
    const userBookings = userParams.userBookings
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        loadBookings()
    }, [isFocused])

    async function loadBookings() {
        const response = await getApi(`bookings/?user=${ userParams.user_id }&status=A`)
		setBookings(response)
	}

    function navigateToLogin() {
        navigation.navigate('Login')
    }

    function navigateToBookingList() {
        console.log(bookings.length)
        navigation.navigate('BookingList', {
            userParams: userParams,
            userBookings: bookings
        })
    }

    useEffect(() => {
        loadBookings()
        const interval = setInterval(() => {
            loadBookings()
        }, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <TouchableOpacity
                    style={ styles.headerButton }
                    onPress={ navigateToLogin }
                    >
					<Feather name="chevron-left" size={ 28 } color="#E02041"/>
				</TouchableOpacity>

                <Image style={ styles.imgLogo } source={ logoImg }/>

                <TouchableOpacity
                    style={ styles.headerButton }
                    onPress={ navigateToBookingList }
                >
                    { bookings.length == 0 ?
                        <Text style={ styles.buttonText }>
                            { `${ bookings.length }` }
                        </Text>
                     :
                        <Text style={ [styles.buttonText, styles.buttonTextShow] }>
                            { `${ bookings.length }` }
                        </Text>
                    }
					<Feather name="bookmark" size={ 28 } color="#E02041"/>
				</TouchableOpacity>
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

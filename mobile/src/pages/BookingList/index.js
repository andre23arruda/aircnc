import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { putApi } from '../../services/api'
import { FlatList } from 'react-native-gesture-handler'
import { getDateFormatJson } from '../../utils'

function BookingList() {

    const navigation = useNavigation()

    const route = useRoute()
    const { userParams, userBookings } = route.params

    const [bookings, setBookings] = useState(userBookings)

    async function submitViewed(event, booking) {
        event.preventDefault()
        const formData = {
            status: 'V',
            spot: booking.spot,
            user: userParams.user_id,
        }
        await putApi(`bookings/${ booking.id }/`, formData, userParams.user_id)
        setBookings(bookings.filter(obj => obj.id !== booking.id))
    }

    function navigateToSpotsList() {
        navigation.navigate('SpotsList', {
            user_id: userParams.user_id,
            user_email: userParams.user_email,
            techs: userParams.techs,
            userBookings: bookings,
        })
    }

 	return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <TouchableOpacity
                    style={ styles.headerBackButton }
                    onPress={ navigateToSpotsList }
                >
					<Feather name="chevron-left" size={ 28 } color="#E02041"/>
				</TouchableOpacity>

                <Image style={ styles.imgLogo } source={ logoImg }/>
            </View>

            <FlatList
                style={ styles.bookingsList }
                showsVerticalScrollIndicator={ true }
                data={ bookings }
                keyExtractor={ booking => String(booking.id) }
                renderItem={ ({item: booking}) => (
                    <View style={ styles.booking }>
                        <View style={ styles.info }>
                            <Text style={ styles.bookingProp }>Data da reserva</Text>
                            <Text style={ styles.bookingValue }>{ getDateFormatJson(booking.booking_date) }</Text>

                            <Text style={ styles.bookingProp }>Aprovado:</Text>
                            <Text style={ styles.bookingValue }>
                                { booking.is_approved ? 'Claro!' : 'Não :(' }
                            </Text>

                            <Text style={ styles.bookingProp }>Preço:</Text>
                            <Text style={ styles.bookingValue }>R$ 50.00</Text>

                        </View>

                        <TouchableOpacity
                            style={ styles.okButton }
                            onPress={ event => submitViewed(event, booking) }
                        >
                            <Text style={ styles.okButtonText }>Ok</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />

        </View>
  	)
}

export default BookingList

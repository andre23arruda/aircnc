import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { postApi } from '../../services/api'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Feather } from '@expo/vector-icons'
import { showAlert, getDateFormat, getDateFormatToSubmit } from '../../utils'


function Booking() {
    const navigation = useNavigation()
    const route = useRoute()
    const { userParams, spot_id } = route.params

    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)
    }

    const showMode = () => {
        setShow(true)
    }

    const showDatepicker = () => {
        showMode('date')
    }

    function navigateToSpotsList() {
        navigation.navigate('SpotsList', userParams)
    }

    async function submitBooking(event) {
        event.preventDefault()
        const formData = {
            booking_date: getDateFormatToSubmit(date),
            spot_id,
        }
        const response = await postApi('bookings/', formData, userParams.user_id)
        try {
            if (response.spot_id) {
				navigation.navigate('SpotsList', {
					user_id: userParams.user_id,
					user_email: userParams.user_email,
					techs: userParams.techs,
				})
                showAlert('Solicitação de reserva enviada com sucesso.', 'Deu bom!!')
            } else {
                showAlert('Erro na requisição. Tente novamente.')
            }
        } catch(err) {
            showAlert('Erro na requisição. Tente novamente.')
        }
    }

    return (
        <View style={ styles.container }>

            <View style={ styles.form }>

                <Text style={ styles.title }>Hora de fazer a reserva</Text>

                <View style={ styles.dateContainer }>
                    <TouchableOpacity
                        style={ styles.dateButton }
                        onPress={ showDatepicker }
                    >
                        <Feather name="calendar" size={ 28 } color="#E02041"/>
                    </TouchableOpacity>

                    <Text style={ styles.dateText }>{ getDateFormat(date) }</Text>
                </View >


                <TouchableOpacity style={ styles.button } onPress={ submitBooking }>
                    <Text style={ styles.buttonText }>Solicitar reserva</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ [styles.button, styles.buttonCancel] } onPress={ navigateToSpotsList }>
                    <Text style={ styles.buttonText }>Cancelar</Text>
                </TouchableOpacity>

            </View>


            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={ date }
                    mode="date"
                    is24Hour={ true }
                    display="default"
                    onChange={ onChange }
                />
            )}

        </View>
    )
}

export default Booking

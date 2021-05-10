import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { FlatList } from 'react-native-gesture-handler'
import { getApi } from '../../services/api'
import { showAlert, toTitleCase } from '../../utils'


import styles from './styles'


function Spots({ tech }) {

	const [spots, setSpots] = useState([])

	useEffect(() => {
		async function loadSpots() {
			const response = await getApi(`spots/?techsfilter=${ tech }`)
			try {
				setSpots(response)
			} catch(err) {
				showAlert('Erro na requisição')
			}
		}

		loadSpots()

	}, [])

  	return (
		<View style={ styles.spotContainer }>
			<Text style={ styles.title }>
				Empresas que usam
				<Text style={ styles.bold }> { toTitleCase(tech) }</Text>


			</Text>

		</View>
  	)
}

export default Spots

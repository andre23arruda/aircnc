import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { FlatList } from 'react-native-gesture-handler'
import { getApi } from '../../services/api'
import { showAlert, toTitleCase } from '../../utils'

import styles from './styles'

const NO_THUMBNAIL = 'https://res.cloudinary.com/utils-cloudinary/image/upload/v1620454863/media/ex2_xdhmga.jpg'


function Spots({ tech }) {

	const [spots, setSpots] = useState([])

	useEffect(() => {
		async function loadSpots() {
			const response = await getApi(`spots/?techsfilter=${ tech }`)
			setSpots(response)
		}

		loadSpots()

	}, [])

  	return (
		<View style={ styles.spotContainer }>
			<Text style={ styles.title }>
				Empresas que usam
				<Text style={ styles.bold }> { toTitleCase(tech) }</Text>
			</Text>

			{ spots.length ?
				<FlatList
					style={ styles.list }
					data={ spots }
					keyExtractor={ spot => spot.id }
					horizontal
					showsHorizontalScrollIndicator={ false }
					renderItem={ ({ item }) => (
						<View style={ styles.listItem }>
							<Image
								style={ styles.thumbnail }
								source={ item.thumbnail ? { uri: item.thumbnail } : { uri: NO_THUMBNAIL }}
							/>

							<Text style={ styles.company }>{ item.company }</Text>
							<Text style={ styles.price }>
								{ item.price ? `RS${ item.price }/dia` : GRATUITO }
							</Text>

							<TouchableOpacity
								style={ styles.button }
								onPress={ () => {} }
							>
								<Text style={ styles.buttonText }>Solicitar reserva</Text>
							</TouchableOpacity>

						</View>
					)}
				/>
			 :

				<View>
					<Text>
						Nenhuma empresa encontrada :(
					</Text>
				</View>
			}

		</View>
  	)
}

export default Spots

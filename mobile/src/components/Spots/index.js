import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'

import styles from './styles'

function Spots( {props} ) {
	console.log(props)
	console.log(props.user_techs)

  	return (
		<View style={ styles.spotContainer }>
			<Text>{ props.user_techs }</Text>

		</View>
  	)
}

export default Spots

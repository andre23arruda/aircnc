import React, { useState } from 'react'
import {
	View, Text, Image,
	TouchableOpacity, TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { postApi } from '../../services/api'
import { showAlert } from '../../utils'

import styles from './styles'
import logoImg from '../../assets/logo.png'


function Login() {

    const navigation = useNavigation()
	const [email, setEmail] = useState('')
	const [techs, setTechs] = useState([])

	function splitTechs(techsText) {
		const techsArray = techsText.split(',').map(tech => tech.trim())
		setTechs(techsArray)
	}

	async function submitLogin(event) {
        event.preventDefault()
        const formData = {
            email
        }
        const response = await postApi('sessions/', formData)
        try {
            if (response.id) {
				console.log(response)
				navigation.navigate('SpotsList', {
					user_id: response.id,
					user_email: response.email,
					user_techs: techs,
				})
            } else {
                showAlert('Erro no login. Tente novamente.')
            }
        } catch(err) {
            showAlert('Erro no login. Tente novamente.')
        }
    }

  	return (
        <View style={ styles.container }>
			<Image source={ logoImg }/>
            <View style={ styles.form }>
				<Text style={ styles.inputLabel }>Email *</Text>
				<TextInput
					style={ styles.input }
					placeholder="Seu email"
					keyboardType="email-address"
					autoCapitalize="none"
					autoCaorrect={ false }
					onChangeText={ setEmail }
					>
				</TextInput>

				<Text style={ styles.inputLabel }>Tecnologias *</Text>
				<TextInput
					style={ styles.input }
					placeholder="React, Node, Python"
					onChangeText={ (value) => splitTechs(value) }
				>
				</TextInput>

				<TouchableOpacity
					style={ styles.button }
					onPress={ submitLogin }
				>
					<Text style={ styles.buttonText }>Encontrar spots</Text>
				</TouchableOpacity>
            </View>

        </View>
  	)
}

export default Login
